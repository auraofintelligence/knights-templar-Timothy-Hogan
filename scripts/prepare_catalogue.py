"""Build a portable catalogue and web previews from the preserved source copies."""
from pathlib import Path
import hashlib, json, re, shutil
from urllib.parse import quote
from PIL import Image
import pypdfium2 as pdfium

ROOT=Path(__file__).resolve().parents[1]
BASE='https://github.com/auraofintelligence/knights-templar-Timothy-Hogan'
def github(p): return BASE+'/blob/main/'+quote(p,safe='/')
sources=[]
for i, record in enumerate(json.loads((ROOT/'analysis/source-inventory.json').read_text(encoding='utf-8')),1):
    p=ROOT/record['path']; sid=f'source-{i:02}'
    if hashlib.sha256(p.read_bytes()).hexdigest()!=record['sha256']: raise ValueError('Changed original: '+str(p))
    destination=ROOT/'public/downloads'/sid/p.name
    destination.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,destination)
    text=(ROOT/record['extraction']).read_text(encoding='utf-8') if record.get('extraction') else ''
    item={**record,'id':sid,'title':p.stem.replace('_',' '),'filename':p.name,'group':Path(record['path']).parts[1],
          'format':p.suffix[1:].upper(),'url':github(record['path']),'download':'downloads/'+sid+'/'+quote(p.name),
          'text':text,'previews':[]}
    out=ROOT/'public/media/documents'/sid;out.mkdir(parents=True,exist_ok=True)
    pdf=p if p.suffix.lower()=='.pdf' else ROOT/'analysis/rendered'/(p.stem+'.pdf')
    if p.suffix.lower() in ('.png','.jpg','.jpeg'):
        im=Image.open(p).convert('RGB');im.thumbnail((1600,2000));im.save(out/'image.webp',quality=86)
        item['previews']=[{'src':f'media/documents/{sid}/image.webp','width':im.width,'height':im.height,'label':'Original supplied image'}]
    elif pdf.is_file() and pdf.suffix.lower()=='.pdf':
        doc=pdfium.PdfDocument(str(pdf))
        for n in range(len(doc)):
            page=doc[n];w,h=page.get_size();im=page.render(scale=min(1600/w,2000/h)).to_pil().convert('RGB')
            target=out/f'page-{n+1:03}.webp'
            if not target.exists(): im.save(target,quality=86)
            item['previews'].append({'src':f'media/documents/{sid}/{target.name}','width':im.width,'height':im.height,'label':f'{"Slide" if p.suffix.lower()==".pptx" else "Page"} {n+1}'})
            page.close()
        doc.close()
        if p.suffix.lower()=='.pptx':
            target=ROOT/'public/downloads'/sid/pdf.name;shutil.copy2(pdf,target)
            item['pdf']='downloads/'+sid+'/'+quote(pdf.name)
    sources.append(item)
    print(sid,p.name,len(item['previews']),flush=True)

chapters=[]
for p in sorted((ROOT/'analysis/extracted').glob('transcript-chapter-*.txt')):
    lines=p.read_text(encoding='utf-8').strip().splitlines();number=int(re.search(r'(\d+)\.txt',p.name).group(1));cues=[]
    for line in lines[1:]:
        match=re.match(r'\[(\d+:\d\d(?::\d\d)?)\]\s*(.*)',line)
        if match:
            time,body=match.groups();seconds=0
            for component in time.split(':'):seconds=seconds*60+int(component)
            body=re.sub(r'^(?:\d+ hours?\s*)?(?:\d+ minutes?\s*)?(?:\d+ seconds?\s*)?$','',body).strip()
            cues.append({'time':time,'seconds':seconds,'text':body})
        elif cues and line.strip(): cues[-1]['text']+=' '+line.strip()
    chapters.append({'id':f'chapter-{number:02}','number':number,'title':re.sub(r'^Chapter \d+:\s*','',lines[0]),'cues':cues,'start':cues[0]['seconds'] if cues else 0})

inventory=json.loads((ROOT/'analysis/repository-inventory.json').read_text(encoding='utf-8'))
atlas=json.loads((ROOT/'source-repositories/project-atlas/data/projects.json').read_text(encoding='utf-8'))
projects=inventory['atlas_directory']
for item in projects:
    detail=next((x for x in atlas['projects'] if x['name']==item['name']),{})
    item['families']=[f['title'] for f in detail.get('families',[])]
    item['firstBuilt']=detail.get('firstBuilt','')
    item['snapshot']=next((x for x in inventory['snapshot_repositories'] if x['name']==item['name']),None)
for snap in inventory['snapshot_repositories']:
    if not any(x['name']==snap['name'] for x in projects):
        projects.append({'name':snap['name'],'title':snap['name'].replace('-',' '),'description':'A directly referenced repository preserved in the supplied collection.','repositoryUrl':'https://github.com/auraofintelligence/'+snap['name'],'publicPage':None,'snapshot':snap,'families':[],'firstBuilt':'','local_directory_found':True,'outsideAtlas':True})
data={'sources':sources,'chapters':chapters,'projects':projects,'snapshotDate':atlas['refreshSnapshotDate']}
(ROOT/'src/data/catalogue.json').write_text(json.dumps(data,ensure_ascii=False),encoding='utf-8')
licence=(ROOT.parent/'STRANGE_BUT_TRUE_LICENCE_TEMPLATE.md').read_text(encoding='utf-8').replace('[YEAR]','2026').replace('[PROJECT_NAME]','11:11, a meeting of worlds').replace('[PROJECT_URL]',BASE)
(ROOT/'LICENCE.md').write_text(licence,encoding='utf-8')
print('Catalogue complete:',len(sources),'sources,',len(chapters),'chapters,',len(projects),'projects')
