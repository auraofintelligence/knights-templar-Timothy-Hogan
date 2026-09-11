import { pages } from './pages.mjs';
import { morePages } from './more-pages.mjs';
import catalogue from './catalogue.json';
export { catalogue };
export const editorial=[...pages,...morePages];
export const repoURL='https://github.com/auraofintelligence/knights-templar-Timothy-Hogan';
export const repositoryCopy=(name)=>`${repoURL}/tree/main/source-repositories/${encodeURIComponent(name)}`;
export const allPages=[...editorial,
 ...catalogue.sources.map(source=>({slug:`library/${source.id}`,title:source.title,description:`${source.format} source record: ${source.filename}`,image:'library',section:'library',sections:[],related:['library','gallery','sources'],sources:[],kind:'source',source})),
 ...catalogue.chapters.map(chapter=>({slug:`interview/${chapter.id}`,title:chapter.title,description:`Chapter ${chapter.number} of the supplied Timothy Hogan interview transcript.`,image:'conversation',section:'interview',sections:[],related:['interview/transcript','intersections','research'],sources:['T01'],kind:'chapter',chapter})),
 ...catalogue.projects.filter(project=>project.snapshot).map(project=>({slug:`projects/${project.name}`,title:project.title,description:project.description,image:'network',section:'network',sections:[],related:['projects','network','library'],sources:[],kind:'project',project}))
];
export const findPage=(slug)=>allPages.find(p=>p.slug===slug);
