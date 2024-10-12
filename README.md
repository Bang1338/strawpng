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
* [Don't be a dick.](https://meta.wikimedia.org/wiki/Don%27t_be_a_jerk)

## Why I did this in first place?
Because strawpage's picasso don't have autosave like most ibispaint artist do, so waste a time was a thing. So here, I did a thing.

## What I shouldn't do?
- To avoid [osman (creator of strawpage)](https://osman.straw.page) patch or remove picasso, you mustn't:
1. Spamming and spreading malicious content
2. "NSFW Jumpscare" (or NSFW/NSFL)
3. Trolling
4. Advertising

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

## Does it work?
Demo: 727 WYSI

- [starguestdonna](https://x.com/starguestdonna/status/1844172291317563839)
- [republicsglory](https://x.com/republicsglory/status/1844175275111874867)
- [tigerfeathers](https://x.com/tigerfeathers/status/1844186919410041090)
- [mahimahimeghan](https://x.com/mahimahimeghan/status/1844965424330309645)
- Few people in nekoweb Discord

## How it work?
See [HOWITWORK.md](https://github.com/Bang1338/strawpng/blob/main/docs/HOWITWORK.md)

## Advanced and what can I do?
See [ADVANCED.md](https://github.com/Bang1338/strawpng/blob/main/docs/ADVANCED.md)

## Note
1. If you want to change image, repeat from `"Composing" Image data` to `Start a hook loader server`
2. **This is not for weak computer, __require at least 6GB of RAM__** (or 3 extra GB of swap memory if 4GB I guess, sorry HDD user).

## TODO
- Optimize vector data
- ~~Restart server on base64/HW data change~~ - it did.
- Fix more bug

## Fact
There was a [userscript](https://greasyfork.org/en/scripts/501886-strawpage-image-uploader/code) for picasso v1 that allow you to send image