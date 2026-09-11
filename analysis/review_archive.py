"""Local source-review aids only. Does not build or publish the website."""
from pathlib import Path
import json, hashlib
import pypdfium2 as pdfium
from PIL import Image, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'analysis' / 'visual-review'
OUT.mkdir(exist_ok=True)

def contact(pdf_path, prefix, selected=None):
    pdf = pdfium.PdfDocument(str(pdf_path))
    indices = selected if selected is not None else range(len(pdf))
    pages = []
    for i in indices:
        im = pdf[i].render(scale=1.2).to_pil().convert('RGB')
        if prefix == 'work-education':
            im.save(OUT / f'{prefix}-page-{i+1}.png')
        thumb = ImageOps.contain(im, (470, 340))
        cell = Image.new('RGB', (490, 375), '#e9e8e4')
        cell.paste(thumb, ((490-thumb.width)//2, 23))
        ImageDraw.Draw(cell).text((10, 5), f'{prefix}: page {i+1}', fill='black')
        pages.append(cell)
    for start in range(0, len(pages), 12):
        batch = pages[start:start+12]
        sheet = Image.new('RGB', (490*3, 375*((len(batch)+2)//3)), 'white')
        for j, cell in enumerate(batch):
            sheet.paste(cell, ((j%3)*490, (j//3)*375))
        sheet.save(OUT / f'{prefix}-sheet-{start//12+1}.jpg', quality=90)
    print(prefix, len(pdf), 'pages')

contact(ROOT/'reference-files/D03-work-and-education/Luke Work and Education.pdf', 'work-education')
contact(ROOT/'reference-files/Queens-Venture/What Would You Choose 2023.pdf', 'what-would-you-choose')
contact(ROOT/'reference-files/D02-aura-deck/Version7 Aura of Intelligence 2023 July.pdf', 'aura-2023')
for p in sorted((ROOT/'analysis/rendered').glob('*.pdf')):
    contact(p, p.stem)

repos = []
for p in sorted((ROOT/'source-repositories').iterdir()):
    if not p.is_dir():
        continue
    files = [f for f in p.rglob('*') if f.is_file()]
    repos.append({'name': p.name, 'files':len(files), 'bytes':sum(f.stat().st_size for f in files),
                  'svg_files':sum(f.suffix.lower()=='.svg' for f in files)})
atlas = json.loads((ROOT/'source-repositories/project-atlas/data/projects.json').read_text(encoding='utf-8'))
review = {'snapshot_repositories':repos, 'atlas_snapshot_date':atlas['refreshSnapshotDate'],
          'atlas_project_count':len(atlas['projects']),
          'atlas_directory':[{'name':p['name'],'title':p['title'],'repositoryUrl':p['repositoryUrl'],
                             'publicPage':p.get('publicPage'), 'description':p['description'],
                             'local_directory_found':(ROOT.parent/p['name']).is_dir()} for p in atlas['projects']]}
(ROOT/'analysis/repository-inventory.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
lines = ['# Wider repository directory', '',
         'Source: the supplied Project Atlas snapshot, refreshed 10 September 2026. These are 152 catalogue entries, not a fresh live audit of every repository. Local directory existence was checked during preparation; it does not establish build quality or remote synchronisation.', '',
         'The 24 repositories copied for this project remain separately listed in [the reference register](../REFERENCE_REGISTER.md). No additional repositories were copied merely because they occur in this wider directory.', '',
         '| Project | GitHub | Public page in snapshot | Local directory found |',
         '|---|---|---|---|']
for p in review['atlas_directory']:
    page = f"[Website]({p['publicPage']})" if p['publicPage'] else 'Not recorded'
    lines.append(f"| {p['title'].replace('|','/')} | [{p['name']}]({p['repositoryUrl']}) | {page} | {'Yes' if p['local_directory_found'] else 'No'} |")
(ROOT/'analysis/ALL_REPOSITORIES.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
