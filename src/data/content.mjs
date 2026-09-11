import { pages } from './pages.mjs';
import { morePages } from './more-pages.mjs';
import archiveCatalogue from './catalogue.json';
import selection from './source-selection.json';
const omittedSources=new Set(selection.consolidations.flatMap(group=>group.omit));
// The archive preserves every supplied file; readers see one entry per work.
export const catalogue={...archiveCatalogue,sources:archiveCatalogue.sources
 .filter(source=>!omittedSources.has(source.id))
 .map(source=>({...source,...selection.overrides[source.id]}))};
export const editorial=[...pages,...morePages];
export const repoURL='https://github.com/auraofintelligence/knights-templar-Timothy-Hogan';
export const repositoryCopy=(name)=>`${repoURL}/tree/main/source-repositories/${encodeURIComponent(name)}`;
export const allPages=[...editorial,
 ...catalogue.sources.map(source=>({slug:`library/${source.id}`,title:source.title,description:`${source.format} source record: ${source.filename}`,image:'library',section:'library',sections:[],related:['library','gallery','sources'],sources:[],kind:'source',source})),
 ...catalogue.chapters.map(chapter=>({slug:`interview/${chapter.id}`,title:chapter.title,description:`Chapter ${chapter.number} of the supplied Timothy Hogan interview transcript.`,image:'conversation',section:'interview',sections:[],related:['interview/transcript','intersections','research'],sources:['T01'],kind:'chapter',chapter})),
 ...catalogue.projects.filter(project=>project.snapshot).map(project=>({slug:`projects/${project.name}`,title:project.title,description:project.description,image:'network',section:'network',sections:[],related:['projects','network','library'],sources:[],kind:'project',project}))
];
export const findPage=(slug)=>allPages.find(p=>p.slug===slug);

// One complete, deterministic route. Detail pages sit beside their index.
// Do not wrap the final page back to the beginning.
const detailGroups={ 'interview/transcript':'chapter', projects:'project', library:'source' };
export const readingOrder=[{slug:'',title:'A curious meeting of worlds'},
 ...editorial.flatMap(page=>[
  page,
  ...allPages.filter(detail=>detail.kind===detailGroups[page.slug])
 ])
];
if(new Set(readingOrder.map(page=>page.slug)).size!==allPages.length+1 || readingOrder.length!==allPages.length+1){
 throw new Error('The reading sequence must contain each content page exactly once.');
}
