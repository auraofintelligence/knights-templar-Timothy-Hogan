import concurrent.futures
import json
from pathlib import Path
import subprocess
import urllib.request

head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], text=True).strip()
files = ['index.html', 'matrix.html', 'inventory.html', 'explainer.html', 'guide.html',
         'original.js', 'original.css', 'styles.css', 'app.js', 'core.js', 'renderer.js',
         'spatial.js', 'spatial-ui.js', 'workspace.js', 'assets/mockplus/pages.json',
         'original-live.js', 'original-favourites.js', 'favourites-data.js', 'menu-camera.js', 'original-sitemap.js', 'original-routes.js', 'quickstart.js', 'dataset-schema.js',
         'dataset-allocation.js', 'DATASET-CATALOGUE.md', 'assets/dataset-catalogue.json']
files += ['earth-map.js','earth-data.js','timing-data.js','timing-ui.js','timing-ideas.js','favourite-groups.js','frame-display.js','solar-system.js','page-icons.js','market-map.js','travel-data.js','travel-ui.js','celestial-clock.js','time-context.js','MARKET-DATA.md','TRAVEL-AND-TIMING.md','assets/market-data.json','assets/travel-destinations.json']
files += [str(p).replace('\\','/') for p in Path('assets/earth').rglob('*.json')]
files += [str(p).replace('\\','/') for p in Path('vendor').rglob('*') if p.is_file()]
files += ['assets/mockplus/' + p.name for p in Path('assets/mockplus').iterdir() if p.name != 'pages.json']

def check(name):
    request = urllib.request.Request('https://auraofintelligence.github.io/aura-matrix-studio/' + name + '?verify=' + head,
                                     headers={'Cache-Control': 'no-cache'})
    with urllib.request.urlopen(request, timeout=40) as response:
        actual = response.read()
        assert response.status == 200, name
    expected = subprocess.check_output(['git', 'show', head + ':' + name])
    assert actual == expected, 'Deployed content differs: ' + name
    return len(actual)

with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    sizes = list(pool.map(check, files))
print(json.dumps({'commit': head, 'anonymous_files_verified': len(files), 'bytes': sum(sizes), 'all_match_commit': True}))
