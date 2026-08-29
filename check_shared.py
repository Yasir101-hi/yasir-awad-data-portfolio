import urllib.request
import re

html = urllib.request.urlopen('https://ais-pre-cqrrz43ilc2k47z5cl3inq-330379135195.europe-west2.run.app').read().decode('utf-8')
js_files = re.findall(r'src="([^"]+\.js)"', html)
for js in js_files:
    if not js.startswith('http'):
        url = 'https://ais-pre-cqrrz43ilc2k47z5cl3inq-330379135195.europe-west2.run.app' + js
    else:
        url = js
    
    print("Checking", url)
    content = urllib.request.urlopen(url).read().decode('utf-8')
    if 'fetch' in content:
        print("Found fetch in", url)
        # print snippets
        for m in re.finditer(r'.{0,40}fetch.{0,40}', content):
            print("   ", m.group(0))

