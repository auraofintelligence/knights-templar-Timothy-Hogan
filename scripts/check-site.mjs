import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {hornPoint,ADDRESS_COUNT} from '../src/scripts/horn-geometry.mjs';
import {journeySlugs,pages as editorialPages,mergedRoutes} from '../src/data/journey.mjs';
const root=path.resolve('dist'),base='/knights-templar-Timothy-Hogan';
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
const built=files(root),html=built.filter(f=>f.endsWith('.html')),errors=[];let checked=0;
const mergedFiles=new Set(html.filter(file=>fs.readFileSync(file,'utf8').includes('data-merged-page')));
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
 const relative=path.relative(root,file).replaceAll('\\','/');
 const slug=relative.replace(/\/index\.html$/,'').replace(/^index\.html$/,'');
 if(mergedFiles.has(file)){
  assert.ok(text.includes('name="robots" content="noindex"'),'Merged routes stay out of search');
  const target=text.match(/<a href="([^"]+)"/)?.[1];
  assert.ok(target,'Merged route must have a fallback link');
  const url=new URL(target,'https://local.test');
  const dest=path.join(root,decodeURIComponent(url.pathname.slice(base.length+1)),'index.html');
  assert.ok(fs.existsSync(dest),'Merged route target must exist: '+target);
  assert.ok(!mergedFiles.has(dest),'Merged routes must not chain');
  if(url.hash)assert.ok(fs.readFileSync(dest,'utf8').includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),'Missing merged target anchor: '+target);
  continue;
 }
 if(text.includes('Follow another thread')||text.includes('class="footer-invite"'))errors.push('Repeated footer cards or invitation returned: '+file);
 if(!text.includes('data-back-to-top')||!text.includes('id="page-top"'))errors.push('Missing back-to-top control or target: '+file);
 if(journeySlugs.includes(slug)){
  const nav=text.match(/<nav\b[^>]*data-page-sequence[^>]*>[\s\S]*?<\/nav>/)?.[0];
  if(!nav)errors.push('Missing page sequence: '+file);
  else{
   const position=Number(nav.match(/data-position="(\d+)"/)?.[1]),total=Number(nav.match(/data-total="(\d+)"/)?.[1]);
   const getLink=marker=>[...nav.matchAll(/<a\b[^>]*>/g)].find(m=>m[0].includes(marker))?.[0].match(/href="([^"]+)"/)?.[1]||null;
   const url=base+'/'+path.relative(root,file).replaceAll('\\','/').replace(/index\.html$/,'');
   if(sequence.has(position))errors.push('Repeated sequence position: '+position);
   sequence.set(position,{url,total,previous:getLink('data-sequence-previous'),next:getLink('data-sequence-next')});
  }
 }else if(relative!=='404.html'){
  if(text.includes('data-page-sequence'))errors.push('Reference page forced into main journey: '+file);
  if(!text.includes('data-reference-navigation'))errors.push('Reference needs a return link: '+file);
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
  checked++;
  if(!fs.existsSync(disk))errors.push(path.relative(root,file)+' -> '+raw);
  else if(mergedFiles.has(disk))errors.push('Active page links to a retired route: '+raw);
  else if(url.hash&&disk.endsWith('.html')&&!fs.readFileSync(disk,'utf8').includes(`id="${decodeURIComponent(url.hash.slice(1))}"`))errors.push('Missing anchor: '+raw);
 }
}
const totalPages=journeySlugs.length;
assert.equal(sequence.size,totalPages,'Only main journey pages have numbered navigation');
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
if(embedPosition<startPage.indexOf('Ark or other artefacts.</p>')||embedPosition>startPage.indexOf('<section id="11-11"')||embedPosition<0)errors.push('Interview must follow the opening introduction on Start');
if(!/src="https:\/\/www\.youtube-nocookie\.com\/embed\/K7Dy7MUw-G0\?autoplay=0/.test(startPage))errors.push('Missing original interview embed or no-autoplay setting');
assert.ok(!startPage.includes('source-footnotes'),'No repeated global source-footnote block');
const auraPage=fs.readFileSync(path.join(root,'aura/index.html'),'utf8');
for(const project of ['aura-horn-torus','aura-matrix-studio'])assert.ok(auraPage.includes(`href="https://auraofintelligence.github.io/${project}/"`),'Aura must link to the supplied live app: '+project);
assert.equal((auraPage.match(/data-aura-worldbuilding-slide/g)||[]).length,1,'Show the worldbuilding slide once on Aura');
assert.ok(auraPage.includes('media/documents/source-33/page-028.webp'),'Reuse the complete PDF preview, not a duplicate screenshot');
assert.ok(auraPage.includes('/library/source-62/'),'Link the original Blender-to-Unity conversation');
const blend=originalCatalogue.sources.find(source=>source.id==='source-62');
assert.ok(blend?.text.includes("I'm not modelling a normal scene."),'Preserve the supplied design conversation as reading text');
assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,decodeURIComponent(blend.download)))).digest('hex'),blend.sha256,'Blend download must preserve original bytes');
const paragraphs=editorialPages.flatMap(p=>p.sections.flatMap(s=>s.paragraphs));
const queens=editorialPages.find(page=>page.slug==='network').sections.find(section=>section.id==='queens').paragraphs;
assert.ok(queens[0].includes('less than 3%')&&queens[0].includes('trigger'),'Queens Venture must lead with the funding inequality that prompted it');
for(const detail of ['500 Queen Street',"Queen's Wharf",'Festival Towers','workers compensation',"didn't pursue it"])assert.ok(queens.some(p=>p.includes(detail)),'Preserve the supplied Queens Venture origin: '+detail);
const network=editorialPages.find(page=>page.slug==='network');
const policyFocalPoints={
 compute:['Senate Environment and Communications References Committee','Artificial intelligence and data centres','32','A$6 million','Commonwealth','states and territories','councils','First Nations','Civic Reserve'],
 economy:['House of Representatives Standing Committee on Regional Development, Infrastructure and Transport','Local Government Funding and Fiscal Sustainability','Redland City Council','Incomplete Ledger','Treasury','ASIC','Corporations Act 2001','outcome records'],
 cooperation:['Joint Standing Committee on Treaties','Fiji-Australia Vuvale Union','Ocean of Peace Alliance','Veitacini Treaty','29 August 2026','A$100 million','talanoa']
};
for(const [id,details] of Object.entries(policyFocalPoints)){
 const section=network.sections.find(section=>section.id===id);
 for(const detail of details)assert.ok(section.paragraphs.some(p=>p.includes(detail)),'Keep substantive inquiry context in '+id+': '+detail);
 assert.ok(section.links.some(link=>link.href.startsWith('https://www.aph.gov.au/')),'Policy section needs its official inquiry link: '+id);
}
assert.equal(new Set(paragraphs).size,paragraphs.length,'Each editorial paragraph earns one place');
for(const phrase of ['20-million-person','Shambhala','Miyake events','At exactly 11:11'])assert.equal(paragraphs.filter(p=>p.includes(phrase)).length,1,'Explain the subject once: '+phrase);
const search=fs.readFileSync(path.join(root,'data/search.json'),'utf8');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const route of Object.keys(mergedRoutes))assert.ok(!sitemap.includes(base+'/'+route+'/'),'Merged essay remains in sitemap: '+route);
const transcriptHTML=fs.readFileSync(path.join(root,'interview/index.html'),'utf8');
assert.equal((transcriptHTML.match(/class="transcript-cue"/g)||[]).length,originalCatalogue.chapters.reduce((n,ch)=>n+ch.cues.filter(c=>c.text).length,0),'Every transcript cue retained once');
for(const ch of originalCatalogue.chapters)assert.ok(transcriptHTML.includes(`id="${ch.id}"`),'Chapter anchor missing');
const projectsHTML=fs.readFileSync(path.join(root,'projects/index.html'),'utf8');
for(const project of originalCatalogue.projects){assert.ok(projectsHTML.includes(`id="${project.name}"`),'Project anchor missing');assert.ok(projectsHTML.includes(project.repositoryUrl),'Original repository link missing');}
assert.ok(projectsHTML.includes('data-project-sort')&&projectsHTML.includes('Featured for this meeting'),'Project directory needs an explicit relevance-first sort');
const firstProject=projectsHTML.match(/<div class="project-grid"[^>]*>[\s\S]*?<section id="([^"]+)"/)?.[1];
assert.equal(firstProject,'strange-but-true-cosmic-nexus','Cosmic Nexus must lead the relevance-first project directory');
for(const project of ['micronova-and-excursions','virtual-solar-swarm','extreme-matter-atlas','aura-horn-torus','aura-matrix-studio'])assert.ok(projectsHTML.indexOf(`id="${project}"`)>projectsHTML.indexOf('id="strange-but-true-cosmic-nexus"'),'Core meeting projects must follow Cosmic Nexus: '+project);
for(const [before,after] of [['GAJRA-earth-infinity','gajra-earth-claude-build'],['gajra-earth-claude-build','p4a-xyz-cinema'],['p4a-xyz-cinema','p4a-oceania-cinema'],['p4a-oceania-cinema','p4a-native-nations-cinema']])assert.ok(projectsHTML.indexOf(`id="${before}"`)<projectsHTML.indexOf(`id="${after}"`),`${before} must appear before ${after}`);
assert.ok(projectsHTML.includes('https://p4a.xyz/')&&projectsHTML.includes('https://auraofintelligence.github.io/p4a-xyz-cinema/'),'P4A foundation card must retain both public addresses');
for(const id of omitted)if(search.includes('library/'+id)||sitemap.includes('library/'+id))errors.push('Excluded source in search or sitemap: '+id);
const sourceRoutes=html.filter(file=>/[/\\]library[/\\]source-\d+[/\\]index.html$/.test(file));
assert.equal(sourceRoutes.length,selected.length,'Library routes must match selected works');
const transcript=originalCatalogue.sources.find(source=>source.id==='source-61');
assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,'downloads/source-61/Transcript.md'))).digest('hex'),transcript.sha256,'Renamed transcript must preserve the original bytes');
assert.equal(ADDRESS_COUNT,7*2*12*24);
for(let i=0;i<24;i++){const p=hornPoint(i*Math.PI/12,Math.PI);assert.ok(Math.hypot(p.x,p.y,p.z)<1e-12,'Infinity point must meet at the origin')}
if(built.some(f=>f.endsWith('.svg')))errors.push('SVG file in published output');
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1)}
console.log(`${html.length-mergedFiles.size-1} content pages and ${mergedFiles.size} legacy redirects checked; ${checked} internal links/assets resolve; no SVG; horn-torus infinity point verified.`);
console.log(`Complete ${totalPages}-page journey: reciprocal Previous/Next links, no wraparound; optional references stay outside the sequence. No related-card blocks or repeated editorial paragraphs.`);
console.log(`${selected.length} selected sources; ${omitted.size} repeated entries excluded across the site; all ${originalCatalogue.sources.length} archival originals unchanged.`);
