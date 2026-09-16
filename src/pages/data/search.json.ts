import {allPages,catalogue} from '../../data/content.mjs';
export function GET(){const entries=[
 ...allPages.map(p=>({title:p.title,description:p.description,type:p.kind,path:p.slug})),
 ...catalogue.chapters.map(ch=>({title:ch.title,description:`Interview chapter ${ch.number}`,type:'chapter',path:`interview/#${ch.id}`})),
 ...catalogue.projects.map(p=>({title:p.title,description:p.description,type:'project',path:`projects/#${p.name}`}))
];return new Response(JSON.stringify(entries),{headers:{'Content-Type':'application/json; charset=utf-8'}})}
