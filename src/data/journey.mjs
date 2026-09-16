const link=(label,path)=>({label,href:`/knights-templar-Timothy-Hogan/${path}`});
const repo=(label,name)=>({label,href:`https://github.com/auraofintelligence/${name}`});
const section=(id,title,paragraphs,links=[])=>({id,title,paragraphs,links});
const page=(slug,title,description,image,sections,kind='essay',sources=[])=>({slug,title,description,image,section:slug,sections,kind,sources});

// Each subject has one home. Source readers and tools are optional reference pages.
export const journeySlugs=['','start','research','aura','network','about','projects','library'];
export const pages=[
 page('start','The interview and 11:11','The conversation, the two messages and the reason for this website.','conversation',[
  section('welcome','Welcome, Tim',[
   "Your interview sent me back through years of my own work. I reached out hoping for an invitation to the Knights Templar vault dig and an opportunity to study an Ark or other artefacts."
  ]),
  section('11-11','11 September 2026, 11:11 am',[
   "At exactly 11:11 am Australian time, I sent a message through your website contact form. After laughing about the synchronicity with friends, I sent another five minutes later. I wanted you or your secretary to notice the Australian timing, knowing your local timestamp would differ, and to see my email twice in a row.",
   "I did not retain the wording of either message. This is the place I prepared for you to explore if you reply."
  ])
 ]),
 page('research','Ancient worlds and future civilisation','My beliefs, the worlds that inspire me and the work I want to pursue.','matter',[
  section('mythology','Travel, symbolism and mythology',[
   "Subterranean cities in antiquity fire my curiosity. So does the story of Atlantis being destroyed in a cataclysm, and the possibility that its people might have built underground cities. Shambhala, Shangri-La and the realms of Norse mythology also inspire my interest in travel, mysteries and symbolism. Cosmic Nexus brings these interests together."
  ],[repo('Cosmic Nexus','strange-but-true-cosmic-nexus')]),
  section('solar','Celestial catastrophes',[
   "Solar micronova, Miyake events, Carrington-scale solar storms and asteroid impacts are central to my beliefs, concerns and work. I believe civilisation needs to take celestial catastrophes seriously and put real effort into preparedness.",
   "My solar-sensing work began with Virtual Solar Swarm in 2019. My earlier space-weather document sets out an earthquake research target of magnitude 7 or greater, an hour of notice and a location within 100 kilometres. I want to pursue the observations, comparisons and testing behind that ambition."
  ],[repo('Virtual Solar Swarm','virtual-solar-swarm'),repo('Micronova and Excursions','micronova-and-excursions'),link('Space Weather Data','library/source-43/')]),
  section('city','Cities across Earth and the solar system',[
   "I believe humanity should be designing eco-cities across the planet, beneath its oceans and throughout the solar system to hedge our bets. I want us to spread the places where civilisation can endure and flourish in Joyful Responsible Abundance.",
   "My local contribution to that vision is a 20-million-person eco-city beneath the sand dunes, ocean and bays of Quandamooka Country, where I live. Civilisation of Sand, Future of Life 2045 and my wider network plans are parts of that larger ambition.",
   "I also want us to proceed cautiously, open to the possibility that such cities may already exist. If we encounter their inhabitants, or they announce themselves to us, my intention is to approach with respect and seek friendship."
  ],[{label:'Subterranean Cities on GitHub Pages',href:'https://auraofintelligence.github.io/subterranean-cities.html'},{label:'Subterranean Cities on Aura of Intelligence',href:'https://auraofintelligence.com/subterranean-cities/'},repo('Civilisation of Sand','civilisation-of-sand'),repo('Future of Life 2045','Future-of-Life-2045')]),
  section('artefacts','Arks, materials and discovery',[
   "I want to study the Arks and other artefacts discussed in the interview: their construction, materials, geometry, symbolism and possible functions. Crystals, resonators and unusual behaviour in matter already occupy a place in my Extreme Matter Atlas.",
   "Photography, film and digital models are practical interests I would bring to a conversation about documenting the dig and studying its contents."
  ],[repo('Extreme Matter Atlas','extreme-matter-atlas'),repo('Grain by Grain documentary','grain-by-grain-documentary'),link('Vault discussion in the transcript','interview/#chapter-08')]),
  section('eclipses','The eclipse decade and GAJRA',[
   "The eclipses of 2028, 2030, 2037 and 2038 give my longer plans a calendar. My 2035 GAJRA vision centres on art, music and shared values around the fiftieth anniversary of Live Aid. These dates and synchronicities matter to how I imagine the years ahead."
  ],[repo('GAJRA Earth','gajra-earth-claude-build')])
 ]),
 page('aura','Aura of Intelligence','Personal meaning, the horn torus and a developing relationship with intelligent systems.','meeting',[
  section('origins','From reflection to architecture',[
   "Aura grows from my pre-AI work on self-understanding: values, memory, family, skills and the life a person wants to lead. The 2014 Constitutional Matrix and my July 2023 presentation record stages of that work.",
   "My July 2023 grand narrative connects Aura with Queens Venture, GAJRA Earth, entertainment, wearables and cities on the surface, underground and in space. Gamification and worldbuilding bring the personal journey into those shared ambitions. The slide below shows how I was drawing those connections together."
  ],[link('Constitutional Matrix','library/source-05/'),link('Aura, July 2023','library/source-33/')]),
  section('matrix','The horn torus and infinity point',[
   "Aura uses seven nested horn tori in chakra colours, sharing the central infinity point. Each has equal major and minor radii. Twelve rows, twenty-four columns, seven shells and two sides give 4,032 face addresses, with an interior personal view and an exterior observer view.",
   "I designed the faces, edges, colours and lines as an interface to tables of information, connected to a vector space for memory and learned relationships. The geometry supplies stable addresses while the associations develop through experience. Explore the model below, or open Horn Torus for the folding geometry and Matrix Studio for the wider personal interface."
  ],[{label:'Explore Aura Horn Torus',href:'https://auraofintelligence.github.io/aura-horn-torus/'},{label:'Open Aura Matrix Studio',href:'https://auraofintelligence.github.io/aura-matrix-studio/'}]),
  section('genesis','Geode, Genesis and the twin',[
   "In Blend Aura to Unity, I explored navigating this architecture in VR, attaching information to its geometry and pinning favourite sequences of interactions in the world for easy recall. The conversation follows my Blender work towards Unity and Vive Pro.",
   "My 2025 conversations explored a 60-session Genesis process: repeated experience, dialogue and feedback between a person and a developing digital twin. I imagine a relationship in which different strengths and circumstances shape who leads.",
   "Clothing, not skin is my principle for wearables and surrounding systems. I want a deep connection and the freedom to take the tools off."
  ],[link('Blend Aura to Unity','library/source-62/'),link('Geode to Macro','library/source-36/')]),
  section('care','Memory and care',[
   "Aura of Dementia explores a research path for keeping a person's songs, stories, preferences and relationships close within care. It connects my interest in a living memoir with the practical work of carers and clinical assessment."
  ],[link('Aura of Dementia research document','library/source-46/')])
 ],'aura'),
 page('network','The network I want to build','Founder opportunities, sovereign computing and different forms of value.','network',[
  section('queens','Queens Venture',[
   "Queens Venture began when I came across the figure that women-led companies received less than 3% of venture capital globally. I thought that was ridiculous. That inequality was the trigger.",
   "Then I discovered that Gina Rinehart's company, Hancock Prospecting, was at 500 Queen Street in Brisbane. Queen's Wharf was under construction, and I was living down the road in Festival Towers. The synchronicities lined up for me, and I began thinking through 500 Queens and the possibilities of a global women's movement.",
   "At the time, I was an unemployed man on workers compensation, with no corporate experience. I felt like an impostor trying to set up a global women's movement, so I didn't pursue it. The presentations preserve where that thought experiment took me."
  ],[{label:'Queens Venture website',href:'https://auraofintelligence.github.io/Queens_Venture/'},repo('Queens Venture repository','Queens_Venture'),link('View the presentations','gallery/')]),
  section('compute','Sovereign computing',[
   "My August 2026 papers address the Australian Parliament's Senate Environment and Communications References Committee inquiry into Artificial intelligence and data centres. Their central proposition is larger than putting a supercomputer in every postcode. Australia should deliberately build a federated intelligence stack spanning personal devices, neighbourhood meshes, serious community-scale compute, bioregional, state and national systems, commercial data centres, research supercomputers, quantum systems and future orbital capability.",
   "The weakest part of that stack is the missing middle between the phone and the giant data centre. I use one serious community node for roughly every 10,000 people as an understandable starting ratio, adapted to geography, Country, population, energy, institutions and disaster exposure. Federation is not a pipeline for sending everything upwards. It creates choices about what stays local, what can be shared and what remains under personal or collective authority. Open interfaces, workload portability, degraded operation and the ability to change vendors are part of sovereignty, not optional extras.",
   "I propose beginning with 32 deliberately different sites, four in every state and territory. An all-in planning allowance of A$6 million per frontier-class node makes that first cohort approximately A$192 million. Each installation would combine secure compute with a visible community laboratory, a digital twin, just-in-time XR training and an obligation to teach the next cohort. Recruitment would run through councils, schools, TAFEs, universities, hospitals, libraries, Indigenous developer pathways, girls-in-code networks, makers, creative industries and research institutions. The cycle is identify, qualify, train, install, experiment, document and teach the next cohort.",
   "The Commonwealth would fund the national backbone, security standards and shared services, while states and territories would connect energy, planning, education, health and emergency-management systems. Local councils and community institutions would host place-based capability without inheriting another unfunded mandate. First Nations would hold a genuine sovereign layer wherever Country, language, cultural knowledge and collective data are involved, with authority to participate, connect or remain separate on their own terms.",
   "My 24 August 2026 submission to the Brisbane hearing of the Independent AUKUS Public Inquiry takes that architecture into the national-security debate. The Inquiry itself asks about opportunity costs, cost-effective alternatives and whether AUKUS Pillar II advances could be achieved through other mechanisms. My answer is a Protopian Gambit: compare AUKUS with positive-sum security infrastructure that builds intelligence, education, science, climate and disaster resilience, cultural understanding and peaceful regional capability throughout society.",
   "The scale comparison is deliberate. My cities dataset contains about 41,549 places with recorded populations of at least 9,000. At the same A$6 million planning allowance, a frontier-everywhere thought experiment is approximately A$249.3 billion, in the same broad order as the public A$268-368 billion life-cycle estimate for Australia's nuclear-powered submarine program. This is a strategic and moral question about what humanity is prepared to count as security infrastructure. Distributed civic capability can create peace before conflict becomes the only coordination mechanism left.",
   "Queensland could test the complete stack: CSIRO Vetra at Pullenvale, universities and health networks, the proposed PsiQuantum facility at Moreton Bay, Brisbane 2032, Redlands and Minjerribah, the Gold Coast and wider national and international networks. Ballow Road is one possible island edge testbed. Brisbane 2032 could turn a temporary volunteer mobilisation into a permanent Civic Reserve skilled in AI, digital twins, logistics, communications, citizen science, disaster resilience, cultural stewardship and space-weather awareness. Aura Direct Hardware carries sovereignty into the machines themselves. Do not put all our eggs in one basket. Build the interfaces between the baskets."
  ],[{label:'Senate inquiry: Artificial intelligence and data centres',href:'https://www.aph.gov.au/Parliamentary_Business/Committees/Senate/Environment_and_Communications/AIdatacentres48P'},link('Fair Go research brief','library/source-37/'),link('Postcode-level submission draft','library/source-38/'),link('Do Not Put All Our Eggs in One Basket','library/source-39/'),{label:'Read my AUKUS Public Inquiry submission',href:'https://auraofintelligence.github.io/multi-site-Minjerribah-network/source-documents/aukus-public-inquiry-submission.pdf'},repo('Aura Direct Hardware','aura-direct-hardware')]),
  section('economy','The braided economy',[
   "My local-government submission addresses the federal House of Representatives Standing Committee on Regional Development, Infrastructure and Transport through its Inquiry into Local Government Funding and Fiscal Sustainability. The inquiry concerns the financial relationship between councils and other levels of government. My local setting is Minjerribah within Redland City Council, Queensland, connecting Commonwealth policy, state responsibilities and council-level practice.",
   "My argument is the Incomplete Ledger: care, volunteering, social cohesion and ecological stewardship sustain a community, yet conventional accounts leave much of that contribution invisible. I proposed Community-Hours to record contribution and community sovereign wealth funds to retain and reinvest locally created value. Alongside them, sovereign digital twins connect personal and household records, voluntary neighbourhood sharing and council-level information without making private lives an open council database.",
   "The original submission asks the Committee to recommend a Commonwealth legislative category for Regenerative Assets through changes to the Corporations Act 2001 and the digital-asset legislation then proposed. It also proposes a regulatory sandbox involving Treasury, ASIC, a pilot council such as Redland City Council and a First Nations partner. These are specific requests for a path into practice, with the Minjerribah proposal grounded in Quandamooka data sovereignty.",
   "My later AI and treaty papers develop three distinct records: money for infrastructure and paid work, C-Hours for verified voluntary contribution, and outcome records for what actually changed. One verified hour is one C-Hour, without a dollar exchange rate. Paid work remains paid. That distinction matters: the hours given and the benefit created are related, but they are not the same measurement."
  ],[{label:'House inquiry: Local Government Funding and Fiscal Sustainability',href:'https://www.aph.gov.au/LocalGovernmentFunding'},link('Read my local-government submission','library/source-47/')]),
  section('cooperation','Family without assimilation',[
   "My Fiji-Australia Vuvale Union submission, dated 29 August 2026, and Ocean of Peace Alliance submission, dated 27 August, address the Australian Parliament's Joint Standing Committee on Treaties. These are two separate federal parliamentary inquiries into agreements between the national governments of Fiji and Australia. The Ocean of Peace Alliance is also called the Veitacini Treaty.",
   "For Vuvale, I propose an indicative A$100 million Civic Empowerment pilot: five to ten community-scale AI installations, with the rest supporting people, local models, food-waste reduction, cooperative finance, health research, digital twins and disaster resilience. The Vuvale Forum and long-term Work Plan offer a place to consider these locally chosen projects. I want the family relationship to become practical capability while each community keeps its own centre.",
   "For the Ocean of Peace Alliance, I connect the treaty's Pacific Way, talanoa and consensus with daily civic cooperation. My proposals include locally governed pilots, shared ocean and climate sensing, public treaty knowledge, language tools, arts and youth exchange. GAJRA Earth brings in voluntary reflection on values across cultures. The aim is cooperation among distinct peoples, with the freedom to adopt, adapt or refuse, rather than one system absorbing everyone.",
   "These treaty submissions extend the local-government and AI infrastructure work into an international setting. P4A.xyz is the foundation website for this civic architecture and the shared doorway into the Oceania and Native Nations pathways. Those cinema projects explore the relationships through imagined futures; the multi-site Minjerribah network returns to the places and infrastructure around my own home."
  ],[{label:'JSCOT inquiry: Fiji-Australia Vuvale Union',href:'https://www.aph.gov.au/Parliamentary_Business/Committees/Joint/Treaties/FijiAUVuvale'},link('My Vuvale submission','library/source-41/'),{label:'JSCOT inquiry: Ocean of Peace Alliance',href:'https://www.aph.gov.au/Parliamentary_Business/Committees/Joint/Treaties/OceanofPeaceAlliance'},link('My Ocean of Peace submission','library/source-42/'),{label:'P4A foundation: p4a.xyz',href:'https://p4a.xyz/'},repo('Minjerribah network','multi-site-Minjerribah-network'),repo('Native Nations cinema','p4a-native-nations-cinema'),repo('Oceania cinema','p4a-oceania-cinema')])
 ]),
 page('about','Luke Nathan Hayes','The life, philosophy and creative work behind the projects.','culture',[
  section('background','From the human question to the code',[
   "I live on Minjerribah, North Stradbroke Island. I approach AI from years of philosophy, spiritual self-reflection and conscious cognitive architecture design, working from the larger human question towards the technical detail.",
   "My working life has included retail, practical labour, automotive work, railways, airports, events, web design and museum transcription. I create through Strange But True, Aura of Intelligence and i C. infinity."
  ],[link('Work and education timeline','library/source-35/'),repo('The man and mind project','luke-nathan-hayes-man-and-mind')]),
  section('creative','Joyful Responsible Abundance',[
   "Joy makes the journey worth living. Responsibility asks me to care about consequences and relationships. Abundance is my ambition for knowledge, resources and opportunity to circulate generously. My poems, songs and creative worlds express that philosophy alongside my technical work."
  ],[repo('i C. infinity music universe','i-C-infinity-music-universe'),link('Deeper Meaning and We Will Be Heard','library/source-49/')]),
  section('archive','Beyond this collection',[
   "There are many hundreds more AI-assisted documents, pre-AI documents and presentations, and personal handwritten journals behind this selection. If something here connects with your work, Tim, I would love to hear from you through the email address in my messages."
  ])
 ]),
 page('projects','Project directory','The collected repositories and the wider Project Atlas snapshot.','network',[
  section('directory','Browse the work',[
   "This directory contains the 152 entries in the Project Atlas snapshot of 10 September 2026, plus Aura Matrix Studio. It opens with projects most relevant to this meeting rather than allowing the alphabet to decide what matters. Visitors can reorder the complete collection by date or title. The 24 collected repositories link directly to their preserved copies."
  ])
 ],'directory'),
 page('library','Document library','Original documents, presentations, images and transcript.','library',[
  section('collection','Read the originals',[
   "One entry per selected work. Each opens its original download and available previews."
  ],[link('Full interview transcript','interview/'),link('Presentation viewer','gallery/')])
 ],'library'),
 page('interview','Interview transcript','The complete supplied transcript, with twelve chapter markers and video timestamps.','conversation',[],'transcript'),
 page('gallery','Presentations and images','Six presentations and the selected original images.','library',[],'gallery'),
 page('sources','Sources and image credits','Archive provenance and artwork credits.','library',[
  section('records','Source records',[
   "All 62 collected files remain unchanged in the GitHub archive; the reading library selects 29 entries after consolidating copies and screenshots. The 24 repository snapshots preserve local working files from collection time.",
   "The transcript retains the supplied wording, including transcription errors and uncertain speaker changes. ARKS is an AI-created acronym from the conversation material, not my final naming protocol."
  ]),
  section('artwork','Images',[
   "Editorial hero images are generated concept artwork. Original documents, slides and supplied images remain separately labelled in the library."
  ])
 ],'sources'),
 page('licence','Strange But True licence','The public source licence for my original work.','library',[
  section('rights','Licence and attribution',[
   "The Strange But True Public Source Licence appears below. Third-party material, including the interview, retains its own rights."
  ])
 ],'licence'),
 page('site-map','Site index','The reading journey and optional reference pages.','library',[],'sitemap')
];

// Former pages lead straight to the section that now owns their subject.
export const mergedRoutes={
 'why-this-interview':'research/', '11-11':'start/#11-11',
 'interview/transcript':'interview/', 'intersections':'research/',
 'research/vaults-and-arks':'research/#artefacts', 'research/materials-and-resonance':'research/#artefacts',
 'research/documentation':'research/#artefacts', 'research/questions':'research/#artefacts',
 'aura/matrix':'aura/#matrix', 'aura/genesis':'aura/#genesis', 'aura/care':'aura/#care',
 'network/queens':'network/#queens', 'network/sovereign-compute':'network/#compute',
 'network/braided-economy':'network/#economy', 'network/sovereign-cooperation':'network/#cooperation',
 'network/minjerribah':'network/#cooperation', 'horizons':'research/',
 'horizons/solar-sensing':'research/#solar', 'horizons/subterranean':'research/#city',
 'horizons/eclipse-decade':'research/#eclipses', 'culture':'about/#creative',
 'timeline':'about/#background', 'glossary':'aura/', 'continue':'about/#archive'
};
