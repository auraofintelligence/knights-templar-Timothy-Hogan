import { pages,journeySlugs,mergedRoutes } from './journey.mjs';
import archiveCatalogue from './catalogue.json';
import selection from './source-selection.json';
const omittedSources=new Set(selection.consolidations.flatMap(group=>group.omit));
// The archive preserves every supplied file; readers see one entry per work.
export const catalogue={...archiveCatalogue,sources:archiveCatalogue.sources
 .filter(source=>!omittedSources.has(source.id))
 .map(source=>({...source,...selection.overrides[source.id]}))};
export const editorial=pages;
export const repoURL='https://github.com/auraofintelligence/knights-templar-Timothy-Hogan';
export const repositoryCopy=(name)=>`${repoURL}/tree/main/source-repositories/${encodeURIComponent(name)}`;
export const allPages=[...editorial,
 ...catalogue.sources.map(source=>({slug:`library/${source.id}`,title:source.title,description:`${source.format} source record: ${source.filename}`,image:'library',section:'library',sections:[],sources:[],kind:'source',source}))
];
export const findPage=(slug)=>allPages.find(p=>p.slug===slug);

export const readingOrder=journeySlugs.map(slug=>slug?findPage(slug):{slug:'',title:'A curious meeting of worlds'});
if(readingOrder.some(page=>!page)||new Set(journeySlugs).size!==journeySlugs.length)throw new Error('Invalid reading journey');
export const redirects={...mergedRoutes,
 ...Object.fromEntries(catalogue.chapters.map(chapter=>[`interview/${chapter.id}`,`interview/#${chapter.id}`])),
 ...Object.fromEntries(catalogue.projects.filter(project=>project.snapshot).map(project=>[`projects/${project.name}`,`projects/#${project.name}`]))
};
