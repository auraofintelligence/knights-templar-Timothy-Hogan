import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {hornPoint,ADDRESS_COUNT} from '../src/scripts/horn-geometry.mjs';
const root=path.resolve('dist'),base='/knights-templar-Timothy-Hogan';
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
const built=files(root),html=built.filter(f=>f.endsWith('.html')),errors=[];let checked=0;
for(const file of html){const text=fs.readFileSync(file,'utf8');
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
assert.equal(ADDRESS_COUNT,7*2*12*24);
for(let i=0;i<24;i++){const p=hornPoint(i*Math.PI/12,Math.PI);assert.ok(Math.hypot(p.x,p.y,p.z)<1e-12,'Infinity point must meet at the origin')}
if(built.some(f=>f.endsWith('.svg')))errors.push('SVG file in published output');
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1)}
console.log(`${html.length} HTML pages checked; ${checked} internal links/assets resolve; no SVG; horn-torus infinity point verified.`);
