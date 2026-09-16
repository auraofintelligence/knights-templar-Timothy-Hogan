// Editorial order for this particular introduction. The complete Atlas remains intact.
export const featuredProjects=[
 ['strange-but-true-cosmic-nexus','Mysteries, travel and symbolism'],
 ['micronova-and-excursions','Celestial catastrophes'],
 ['virtual-solar-swarm','Solar-system sensing'],
 ['extreme-matter-atlas','Materials and artefact research'],
 ['aura-horn-torus','Aura geometry'],
 ['aura-matrix-studio','Aura interface'],
 ['aura-spatial-perception','Aura perception'],
 ['aura-direct-hardware','Sovereign hardware'],
 ['civilisation-of-sand','Subterranean civilisation'],
 ['Future-of-Life-2045','Long-horizon civilisation'],
 ['grain-by-grain-documentary','Civilisational resilience'],
 ['multi-site-Minjerribah-network','Local network plans'],
 ['Queens_Venture','Women founders and venture'],
 ['GAJRA-earth-infinity','Joyful Responsible Abundance'],
 ['p4a-oceania-cinema','Oceania cooperation'],
 ['p4a-native-nations-cinema','Native Nations futures'],
 ['global-founder-atlas','Global founder pathways'],
 ['project-atlas','Map of the wider body of work'],
 ['luke-nathan-hayes-man-and-mind','Personal self-portrait'],
 ['strange-but-true','Public home and practical work']
];

const featured=new Map(featuredProjects.map(([name,label],index)=>[name,{rank:index+1,label}]));
export function prioritiseProjects(projects){return projects.map(project=>{
 const priority=featured.get(project.name);
 const publicPage=project.name==='aura-matrix-studio'?'https://auraofintelligence.github.io/aura-matrix-studio/':project.publicPage;
 const title=project.name==='aura-matrix-studio'?'Aura Matrix Studio':project.title;
 return {...project,title,publicPage,featuredRank:priority?.rank??999,featuredLabel:priority?.label??''};
}).sort((a,b)=>a.featuredRank-b.featuredRank||(b.firstBuilt||'').localeCompare(a.firstBuilt||'')||a.title.localeCompare(b.title,'en-AU'))}
