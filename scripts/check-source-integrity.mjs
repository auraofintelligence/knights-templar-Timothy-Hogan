import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const entries=execFileSync('git',['ls-files','--stage','-z'],{encoding:'utf8',maxBuffer:8*1024*1024}).split('\0').filter(Boolean);
let count=0;const errors=[];
for(const entry of entries){const match=entry.match(/^(\d+) ([a-f0-9]+) \d\t([\s\S]+)$/);if(!match)continue;const [,mode,expected,file]=match;if(!/^(reference-files|source-repositories|public\/downloads)\//.test(file))continue;
 if(mode==='160000'){errors.push('Unexpected nested Git link: '+file);continue}
 const bytes=fs.readFileSync(file),hash=createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
 if(hash!==expected){
  if(process.argv.includes('--stage-raw')){
   // Nested historical .gitattributes must not normalise preserved source bytes.
   const written=execFileSync('git',['hash-object','-w','--no-filters','--',file],{encoding:'utf8'}).trim();
   assertHash(written,hash);
   execFileSync('git',['update-index','--cacheinfo',`${mode},${written},${file}`]);
  }else errors.push(file);
 }count++;
}
if(errors.length){console.error('Staged source differs from local original:',errors);process.exit(1)}
console.log(`${count} staged archive/download files match their local bytes exactly.`);
function assertHash(actual,expected){if(actual!==expected)throw Error('Unexpected object hash while preserving a source')}
