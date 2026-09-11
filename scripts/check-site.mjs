import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {hornPoint,ADDRESS_COUNT} from '../src/scripts/horn-geometry.mjs';
const root=path.resolve('dist'),base='/knights-templar-Timothy-Hogan';
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
const built=files(root),html=built.filter(f=>f.endsWith('.html')),errors=[];let checked=0;
const sequence=new Map();
const selection=JSON.parse(fs.readFileSync('src/data/source-selection.json','utf8'));
const originalCatalogue=JSON.parse(fs.readFileSync('src/data/catalogue.json','utf8'));
const omitted=new Set(selection.consolidations.flatMap(group=>group.omit));
const selected=originalCatalogue.sources.filter(source=>!omitted.has(source.id));
for(const group of selection.consolidations){
 assert.ok(selected.some(source=>source.id===group.keep),'Consolidation must retain a reading copy');
 for(const id of group.omit)assert.ok(originalCatalogue.sources.some(source=>source.id===id),'Unknown excluded source');
}
assert.equal(new Set(selected.map(source=>source.sha256)).size,selected.length,'Byte-identical sources must not become separate reading entries');
for(const source of originalCatalogue.sources){
 assert.equal(createHash('sha256').update(fs.readFileSync(source.path)).digest('hex'),source.sha256,'Preserved original changed: '+source.id);
}
for(const id of omitted){
 for(const prefix of ['library','downloads','media/documents']){
  if(fs.existsSync(path.join(root,prefix,id)))errors.push('Excluded source still deployed: '+prefix+'/'+id);
 }
}
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
  if([...omitted].some(id=>raw.includes('/library/'+id+'/')||raw.includes('/downloads/'+id+'/')||raw.includes('/media/documents/'+id+'/')))errors.push('Excluded source still linked: '+raw);
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
const startPage=fs.readFileSync(path.join(root,'start/index.html'),'utf8');
const embedPosition=startPage.indexOf('data-original-interview');
if(embedPosition<startPage.indexOf('Ark or other artefacts.</p>')||embedPosition>startPage.indexOf('<section id="section-1"')||embedPosition<0)errors.push('Interview must follow the opening introduction on Start');
if(!/src="https:\/\/www\.youtube-nocookie\.com\/embed\/K7Dy7MUw-G0\?autoplay=0/.test(startPage))errors.push('Missing original interview embed or no-autoplay setting');
const footnotes=startPage.match(/<section[^>]*source-footnotes[\s\S]*?<\/section>/)?.[0]||'';
assert.deepEqual([...footnotes.matchAll(/\/library\/(source-\d+)\//g)].map(match=>match[1]),['source-05','source-33','source-61'],'Start must show just the three canonical references');
assert.ok(footnotes.includes('Transcript')&&!footnotes.includes('Pasted markdown'),'Use a readable transcript title');
const search=fs.readFileSync(path.join(root,'data/search.json'),'utf8');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const id of omitted)if(search.includes('library/'+id)||sitemap.includes('library/'+id))errors.push('Excluded source in search or sitemap: '+id);
const sourceRoutes=html.filter(file=>/[/\\]library[/\\]source-\d+[/\\]index.html$/.test(file));
assert.equal(sourceRoutes.length,selected.length,'Library routes must match selected works');
const transcript=originalCatalogue.sources.find(source=>source.id==='source-61');
assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,'downloads/source-61/Transcript.md'))).digest('hex'),transcript.sha256,'Renamed transcript must preserve the original bytes');
assert.equal(ADDRESS_COUNT,7*2*12*24);
for(let i=0;i<24;i++){const p=hornPoint(i*Math.PI/12,Math.PI);assert.ok(Math.hypot(p.x,p.y,p.z)<1e-12,'Infinity point must meet at the origin')}
if(built.some(f=>f.endsWith('.svg')))errors.push('SVG file in published output');
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1)}
console.log(`${html.length} HTML pages checked; ${checked} internal links/assets resolve; no SVG; horn-torus infinity point verified.`);
console.log(`Complete ${totalPages}-page sequence: every page once, reciprocal Previous/Next links, no wraparound; back-to-top links present.`);
console.log(`${selected.length} selected sources; ${omitted.size} repeated entries excluded across the site; all ${originalCatalogue.sources.length} archival originals unchanged.`);
