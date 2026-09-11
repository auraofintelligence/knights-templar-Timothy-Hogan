"""Read-only source extraction for the website planning review, not a site builder."""
from pathlib import Path
import hashlib, json, re, zipfile
from xml.etree import ElementTree as ET
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'analysis' / 'extracted'
OUT.mkdir(parents=True, exist_ok=True)
manifest = []
for path in sorted((ROOT / 'reference-files').rglob('*')):
    if not path.is_file():
        continue
    rel = path.relative_to(ROOT).as_posix()
    record = {'path': rel, 'bytes': path.stat().st_size, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest()}
    sections = []
    try:
        if path.suffix.lower() == '.pdf':
            pdf = PdfReader(path)
            sections = [(f'Page {i+1}', page.extract_text() or '') for i, page in enumerate(pdf.pages)]
        elif path.suffix.lower() in ('.docx', '.pptx'):
            with zipfile.ZipFile(path) as z:
                if path.suffix.lower() == '.docx':
                    tree = ET.fromstring(z.read('word/document.xml'))
                    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
                    sections = [('Document', '\n'.join(''.join(t.text or '' for t in p.findall('.//w:t',ns)) for p in tree.findall('.//w:p',ns)))]
                else:
                    ns = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
                    names = sorted((n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide\d+\.xml',n)), key=lambda n:int(re.search(r'(\d+)\.xml',n).group(1)))
                    for i, name in enumerate(names):
                        tree = ET.fromstring(z.read(name))
                        body = '\n'.join(''.join(t.text or '' for t in p.findall('.//a:t',ns)) for p in tree.findall('.//a:p',ns))
                        notes_name = f'ppt/notesSlides/notesSlide{i+1}.xml'
                        if notes_name in z.namelist():
                            notes = ET.fromstring(z.read(notes_name))
                            body += '\nNOTES: ' + ' '.join(t.text or '' for t in notes.findall('.//a:t',ns))
                        sections.append((f'Slide {i+1}',body))
                    record['embedded_media'] = len([n for n in z.namelist() if n.startswith('ppt/media/')])
        elif path.suffix.lower() in ('.md','.txt'):
            body = path.read_text(encoding='utf-8-sig')
            if 'T01-' in rel:
                lines = [s.strip() for s in body.splitlines() if s.strip()]
                compact = []
                for s in lines:
                    if re.fullmatch(r'(?:\d+ hours?,? ?)?(?:\d+ minutes?,? ?)?\d+ seconds?',s):
                        continue
                    if re.fullmatch(r'\d+:\d\d(?::\d\d)?',s):
                        compact.append('['+s+'] ')
                    else:
                        if compact and compact[-1].endswith('] '): compact[-1] += s
                        else: compact.append(s)
                body = '\n'.join(compact)
                chapters = re.split(r'(?=Chapter \d+:)',body)
                for chapter in chapters:
                    if chapter.strip():
                        number = re.search(r'Chapter (\d+)',chapter)
                        if number: (OUT / f'transcript-chapter-{int(number.group(1)):02}.txt').write_text(chapter,encoding='utf-8')
            sections = [('Text',body)]
        if sections:
            name = path.parent.name + '__' + path.name + '.txt'
            result = '\n\n'.join('## '+heading+'\n'+body for heading,body in sections)
            (OUT / name).write_text(result,encoding='utf-8')
            record.update({'extraction':(OUT/name).relative_to(ROOT).as_posix(),'sections':len(sections),'text_chars':len(result)})
    except Exception as exc:
        record['error'] = str(exc)
    manifest.append(record)
(ROOT/'analysis'/'source-inventory.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'files':len(manifest),'bytes':sum(r['bytes'] for r in manifest),'extracted':sum('extraction' in r for r in manifest),'errors':[r for r in manifest if 'error' in r]},ensure_ascii=False))
for r in manifest:
    if 'extraction' in r: print(f"{r['sections']:3} sections | {r['text_chars']:7} chars | {r['extraction']}")
