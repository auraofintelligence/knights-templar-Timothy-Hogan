const base=document.body.dataset.base;
const dialog=document.querySelector('#site-index');
let opener=null;
document.querySelectorAll('[data-open-index]').forEach(b=>b.addEventListener('click',()=>{opener=b;dialog.showModal();document.querySelector('#site-search').focus();loadSearch();}));
document.querySelector('[data-close-index]')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('close',()=>opener?.focus());
const toast=(s)=>{const el=document.querySelector('.toast');el.textContent=s;el.classList.add('visible');setTimeout(()=>el.classList.remove('visible'),2500)};
const get=(k)=>{try{return localStorage.getItem(k)}catch{return null}};
const set=(k,v)=>{try{localStorage.setItem(k,v)}catch{}};
const systemReduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let reduced=get('meeting-motion')==='off'||systemReduced;
const motionButton=document.querySelector('[data-motion]');
function applyMotion(){document.body.classList.toggle('reduce-motion',reduced);motionButton.textContent=`Motion: ${reduced?'off':'on'}`;motionButton.setAttribute('aria-pressed',String(reduced))}
applyMotion();motionButton.addEventListener('click',()=>{reduced=!reduced;set('meeting-motion',reduced?'off':'on');applyMotion()});
const topLink=document.querySelector('[data-back-to-top]');
if(topLink){
 const updateTopLink=()=>{topLink.hidden=window.scrollY<400};
 window.addEventListener('scroll',updateTopLink,{passive:true});
 window.addEventListener('pageshow',updateTopLink);updateTopLink();
 topLink.addEventListener('click',event=>{event.preventDefault();document.body.focus({preventScroll:true});window.scrollTo({top:0,behavior:reduced?'instant':'smooth'})});
}
document.querySelectorAll('[data-share]').forEach(el=>el.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);toast('Page link copied')}catch{toast('Copy this page address from your browser')}}));
let searchData=null;
async function loadSearch(){if(searchData)return;try{const r=await fetch(`${base}/data/search.json`);if(!r.ok)throw Error();searchData=await r.json();renderSearch()}catch{document.querySelector('#search-status').textContent='The search index is unavailable. Explore the page links or complete site map.'}}
const input=document.querySelector('#site-search');input.addEventListener('input',renderSearch);
function renderSearch(){if(!searchData)return;const q=input.value.trim().toLowerCase();const words=q.split(/\s+/).filter(Boolean);const found=searchData.filter(r=>words.every(w=>`${r.title} ${r.description} ${r.type}`.toLowerCase().includes(w)));const shown=found.slice(0,q?60:12);const out=document.querySelector('#search-results');out.replaceChildren();for(const item of shown){const a=document.createElement('a');a.href=`${base}/${item.path}${item.path.includes('#')?'':'/'}`;a.textContent=item.title;const small=document.createElement('small');small.textContent=`${item.type} · ${item.description}`;a.append(small);out.append(a)}document.querySelector('#search-status').textContent=q?`${found.length} results${found.length>60?' · Showing the first 60. Refine your search for more.':''}`:'A few places to begin';}

document.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>window.print()));
const filterInput=document.querySelector('[data-filter-input]'),filterSelect=document.querySelector('[data-filter-select]');
const items=[...document.querySelectorAll('[data-filter-item]')];
const projectGrid=document.querySelector('[data-project-grid]'),projectSort=document.querySelector('[data-project-sort]');
function sortProjects(){if(!projectGrid)return;const mode=projectSort?.value||'featured',cards=[...projectGrid.children];const compare=(a,b)=>{if(mode==='newest')return (b.dataset.date||'').localeCompare(a.dataset.date||'')||(a.dataset.title||'').localeCompare(b.dataset.title||'');if(mode==='oldest')return (a.dataset.date||'9999').localeCompare(b.dataset.date||'9999')||(a.dataset.title||'').localeCompare(b.dataset.title||'');if(mode==='az')return (a.dataset.title||'').localeCompare(b.dataset.title||'');return Number(a.dataset.featuredRank)-Number(b.dataset.featuredRank)||(b.dataset.date||'').localeCompare(a.dataset.date||'')||(a.dataset.title||'').localeCompare(b.dataset.title||'')};cards.sort(compare).forEach(card=>projectGrid.append(card))}
function filterRecords(){const words=(filterInput?.value||'').trim().toLowerCase().split(/\s+/).filter(Boolean),category=filterSelect?.value||'';let count=0;for(const item of items){const show=words.every(word=>item.dataset.search.includes(word))&&(!category||(item.dataset.category||'').split('|').includes(category));item.hidden=!show;if(show)count++}const status=document.querySelector('[data-filter-count]');if(status)status.textContent=count?`${count} of ${items.length} shown`:'No matches. Try another word or clear the filters.'}
filterInput?.addEventListener('input',filterRecords);filterSelect?.addEventListener('change',filterRecords);projectSort?.addEventListener('change',sortProjects);sortProjects();if(items.length)filterRecords();
document.querySelectorAll('[data-gallery]').forEach(gallery=>{const track=gallery.querySelector('.slide-track'),slides=[...track.children],previous=gallery.querySelector('[data-previous]'),next=gallery.querySelector('[data-next]'),status=gallery.querySelector('[data-slide-status]');let index=0;const update=()=>{index=Math.round(track.scrollLeft/Math.max(1,track.clientWidth));status.textContent=`${index+1} / ${slides.length}`;previous.disabled=index===0;next.disabled=index>=slides.length-1};const move=delta=>{const target=Math.max(0,Math.min(slides.length-1,index+delta));track.scrollTo({left:target*track.clientWidth,behavior:reduced?'instant':'smooth'})};previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));track.addEventListener('scroll',update,{passive:true});track.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowLeft'?-1:1)}});new ResizeObserver(update).observe(track);update()});
