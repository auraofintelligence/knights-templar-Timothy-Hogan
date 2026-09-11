import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {hornPoint,ADDRESS_COUNT} from '../src/scripts/horn-geometry.mjs';
const root=path.resolve('dist'),base='/knights-templar-Timothy-Hogan';
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
const built=files(root),html=built.filter(f=>f.endsWith('.html')),errors=[];let checked=0;
const sequence=new Map();
for(const file of html){const text=fs.readFileSync(file,'utf8');
 if(!text.includes('data-back-to-top')||!text.includes('id="page-top"'))errors.push('Missing back-to-top control or target: '+file);
 if(path.relative(root,file)!=='404.html'){
  const nav=text.match(/<nav\b[^>]*data-page-sequence[^>]*>[\s\S]*?<\/nav>/)?.[0];
  if(!nav)errors.push('Missing page sequence: '+file);
  else{
   const position=Number(nav.match(/data-position="(\d+)"/)?.[1]),total=Number(nav.match(/data-total="(\d+)"/)?.[1]);
   const getLink=marker=>[...nav.matchAll(/<a\b[^>]*>/g)].find(m=>m[0].includes(marker))?.[0].match(/href="([^"]+)"/)?.[1]||null;
   const url=base+'/'+path.relative(root,file).replaceAll('\\','/').replace(/index\.html$/,'');
   if(sequence.has(position))errors.push('Repeated sequence position: '+position);
   sequence.set(position,{url,total,previous:getLink('data-sequence-previous'),next:getLink('data-sequence-next')});
  }
 }
 if(/<svg\b/i.test(text))errors.push('SVG markup: '+file);
 if((text.match(/<h1\b/g)||[]).length!==1)errors.push('Expected one page heading: '+file);
 if(!text.includes('name="description"'))errors.push('Missing description: '+file);
 const pagePath='/'+path.relative(root,file).replaceAll('\\','/').replace(/index\.html$/,'');
 for(const m of text.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const raw=m[1].replaceAll('&amp;','&');if(/^(?:https?:|data:|mailto:|tel:|#)/.test(raw))continue;
  const url=new URL(raw,'https://local.test'+base+pagePath);let target=decodeURIComponent(url.pathname);
  if(!target.startsWith(base+'/')){errors.push('Outside Pages base: '+raw);continue}
  target=target.slice(base.length+1);let disk=path.join(root,target);if(target.endsWith('/'))disk=path.join(disk,'index.html');
  if(!fs.existsSync(disk))errors.push(path.relative(root,file)+' -> '+raw);checked++;
 }
}
const totalPages=html.length-1;
for(let position=1;position<=totalPages;position++){
 const current=sequence.get(position);
 if(!current){errors.push('Missing sequence position: '+position);continue}
 if(current.total!==totalPages)errors.push('Incorrect page total at '+position);
 if(current.previous!==(sequence.get(position-1)?.url||null))errors.push('Incorrect Previous link at '+position);
 if(current.next!==(sequence.get(position+1)?.url||null))errors.push('Incorrect Next link at '+position);
}
if(sequence.get(1)?.url!==base+'/')errors.push('The sequence must begin on the homepage');
assert.equal(ADDRESS_COUNT,7*2*12*24);
for(let i=0;i<24;i++){const p=hornPoint(i*Math.PI/12,Math.PI);assert.ok(Math.hypot(p.x,p.y,p.z)<1e-12,'Infinity point must meet at the origin')}
if(built.some(f=>f.endsWith('.svg')))errors.push('SVG file in published output');
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1)}
console.log(`${html.length} HTML pages checked; ${checked} internal links/assets resolve; no SVG; horn-torus infinity point verified.`);
console.log(`Complete ${totalPages}-page sequence: every page once, reciprocal Previous/Next links, no wraparound; back-to-top links present.`);
