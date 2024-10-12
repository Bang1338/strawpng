<h1 align="center">
StrawPNG
</h1>

<p align="center">
  <img src="https://github.com/Bang1338/strawpng/raw/refs/heads/main/strawpng.png">
</p>

<h3 align="center">
Semi-auto, dynamic strawpage image sender
</h3>

## Quick note
* This is not for mobile user (except if you're Termux skid)
* You need at least 3 braincells

## How to use?
### Install Python
* Step 1: Install [Python](https://www.python.org/downloads/release/python-3119/)
* Step 2: `pip install flask flask_cors pillow`

### Install Tampermonkey & Script
* Step 1: Install [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* Step 2: [Click here to install script](https://github.com/Bang1338/strawpng/raw/refs/heads/main/strawpng-hookah.user.js)

### "Composing" Image data
* Step 1: Put image near `composing.py`
* Step 2: `python composing.py`
* Step 3: Press "1" for export to base64, next "2" for no url encoding
It should have this file:
```
727v2.jpg.bin       - zlib binary (you don't need them)
727v2.jpg.bin.txt   - base64 data (main)
727v2.jpg.data.txt  - width and height data (main)
```

### Start a hook loader server
* Step 1: Replace these value with your own file you generated (line 51):
```py
    b64dat = "727v2.jpg.bin.txt"
    hwdata = "727v2.jpg.data.txt"
```
* Step 2: `python strawpng.py`

### Now you can go to someone strawpage and post image.

## How it work?
See HOWITWORK.md

## Advanced and what can I do?
See ADVANCED.md

## TODO
- Optimize vector data