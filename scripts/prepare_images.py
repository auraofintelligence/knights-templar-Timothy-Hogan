"""Copy immutable generated originals and make web-size raster derivatives."""
from pathlib import Path
from PIL import Image
import shutil, json

ROOT=Path(__file__).resolve().parents[1]
SOURCE=Path(r'C:\Users\lukec\.codex\generated_images\01a08ea4-afc1-7f41-9b3a-7239e90446bf')
ASSETS={
 'meeting':'exec-13ae83a3-1cb6-4233-8920-17bb1402698b.png',
 'conversation':'exec-b016ac14-3301-4b45-b36c-bfd2e1944c82.png',
 'matter':'exec-462c278e-366c-419f-94d4-3edd36c4516e.png',
 'network':'exec-b5abfce2-80e2-4bcd-9450-c59501c74d16.png',
 'horizons':'exec-a3bf0697-a29b-416c-bb14-178e8ee06b21.png',
 'culture':'exec-3c0c3233-5c4d-4544-81b8-7969cc3fea06.png',
 'library':'exec-3e03cd17-3d79-4b7d-b16a-f391916dbac3.png',
}
originals=ROOT/'media-originals/generated'
public=ROOT/'public/media/heroes'
originals.mkdir(parents=True,exist_ok=True);public.mkdir(parents=True,exist_ok=True)
for name,file in ASSETS.items():
    shutil.copy2(SOURCE/file, originals/f'{name}.png')
    im=Image.open(originals/f'{name}.png').convert('RGB')
    im.thumbnail((2000,1400));im.save(public/f'{name}.webp',quality=86,method=6)
    mobile=im.copy();mobile.thumbnail((1000,700));mobile.save(public/f'{name}-mobile.webp',quality=83,method=6)
fonts=ROOT/'public/media/fonts';fonts.mkdir(parents=True,exist_ok=True)
shutil.copy2(ROOT/'source-repositories/auraofintelligence.github.io/assets/fonts/archivo-var.woff2',fonts/'archivo-var.woff2')
shutil.copy2(ROOT/'source-repositories/grain-by-grain-documentary/assets/img/favicon-192.png',ROOT/'public/media/favicon.png')
print('Prepared',len(ASSETS),'hero families')
