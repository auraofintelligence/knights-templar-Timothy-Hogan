import {allPages} from '../../data/content.mjs';
export function GET(){return new Response(JSON.stringify(allPages.map(p=>({title:p.title,description:p.description,type:p.kind,path:p.slug}))),{headers:{'Content-Type':'application/json; charset=utf-8'}})}
