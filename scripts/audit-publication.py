"""Read-only pre-publication scan. Report paths, never matched secret values."""
from pathlib import Path
import json,re,zipfile
ROOT=Path(__file__).resolve().parents[1]
patterns={
 'private key':re.compile(r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'),
 'GitHub token':re.compile(r'\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{50,})\b'),
 'AWS access key':re.compile(r'\bAKIA[0-9A-Z]{16}\b'),
 'OpenAI key':re.compile(r'\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{40,}\b'),
 'Slack token':re.compile(r'\bxox[baprs]-[A-Za-z0-9-]{25,}\b'),
}
findings=[];count=0;size=0
for folder in ['reference-files','source-repositories','src','public','docs','media-originals']:
 for p in (ROOT/folder).rglob('*'):
  if not p.is_file() or p.relative_to(ROOT).as_posix()=='media-originals/generated/aura.png':continue
  rel=p.relative_to(ROOT).as_posix();count+=1;size+=p.stat().st_size
  if p.stat().st_size>=100*1024**2:findings.append({'path':rel,'reason':'Exceeds GitHub 100 MiB file limit'})
  if p.name in ('.env','id_rsa','id_ed25519','credentials.json','token.json') or p.suffix.lower() in ('.pfx','.p12','.key'):
   findings.append({'path':rel,'reason':'Sensitive filename'})
  try:
   if p.suffix.lower() in ('.docx','.pptx'):
    with zipfile.ZipFile(p) as z:text='\n'.join(z.read(n).decode('utf-8','replace') for n in z.namelist() if n.endswith('.xml'))
   elif p.suffix.lower() in ('.md','.txt','.json','.js','.mjs','.ts','.astro','.html','.yml','.yaml','.toml','.py','.ps1','.csv','.xml','.env','.config'):
    text=p.read_text(encoding='utf-8',errors='replace')
   else:continue
   for label,pattern in patterns.items():
    if pattern.search(text):findings.append({'path':rel,'reason':label})
  except (OSError,zipfile.BadZipFile):findings.append({'path':rel,'reason':'Unreadable for audit'})
report={'files':count,'bytes':size,'findings':findings,'scope':'Filename and recognisable credential-pattern scan, not a complete privacy or rights review.'}
(ROOT/'analysis/publication-audit-local.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report,indent=2))
raise SystemExit(bool(findings))
