<h1 align="center">
Advanced StrawPNG
</h1>

<h3 align="center">
I'm a "static" failure
</h3>

The advanced thing is from `strawpng-notworking.py`

## Static
#### Stage
- This split into three stage:
1. Stage 1 (optional): Notebook telemetry - Get JWT token
2. Stage 2 (main): Strawpage: Send data
3. Stage 3 (optional): Notebook telemetry - Send telemetry "sent drawing!"

#### Stage 1
Simple, just:
```python
    payload = {
        "type": "event",
        "payload": {
            "website": website_id, # data-website-id
            "hostname": base_url.replace('https://', ''), # strawpage url
            "screen": "1366x768", # can be any screen resolution.
            "language": "vn-ES", # ~~mã idioma~~ language code
            "title": encoded_title, # url encoded site title
            "url": "/",
            "referrer": "https://straw.page/"
        }
    }
```
The `website` is `data-website-id` script tag.
```html
<script defer="" src="https://notebook.straw.page" data-website-id="12345aef-6789-dead-beef-0123456789bc"></script>
```

<p align="center">
  <img src="https://github.com/Bang1338/strawpng/raw/refs/heads/main/docs/adv-img1.png">
</p>

#### Stage 2 (not working)
Extremely simple... maybe not.  
```
comp=<base64 zlib data>&<width, height & resize>
```
Problem is how we encode that value? or just left it naked (aka no encode)?

#### Stage 3
In header we just add:
```
"x-umami-cache": "<JWT token we got from stage 1>"
```

And payload:
```py
    # similar to stage 1, just add "name"
    payload = {
        "type": "event",
        "payload": {
            "website": website_id,
            "hostname": base_url.replace('https://', ''),
            "screen": "1366x768",
            "language": "en-US",
            "title": encoded_title,
            "url": "/",
            "referrer": "https://straw.page/",
            "name": "sent drawing!"
        }
    }
```

## CFanion (unused)
Inspired from [GHunt Companion Extension](https://chromewebstore.google.com/detail/ghunt-companion/dpdcofblfbmmnikcbmmiakkclocadjab) and [deploy2nekoweb](https://deploy.nekoweb.org).

#### What was that?
CFanion is a small HTML code to extract `SPID` and `cf_clearance`.

#### What it will do?
No fake SPID and bypass CloudFlare protection.

#### How to use? (short)
Just copy the `/gimmicks/canvas/2` request as cURL (bash) and put it to big boxes. The cfanion value is the final value, copy and paste it to `cfanion.txt`

#### How to use? (long)
1. Open devtool (`Ctrl + Shift + I` or Right click > Inspect)
2. Go to Network tab
3. Right click on first one (with your strawpage site address)
4. Copy > Copy as cURL (bash)
5. Open `cfanion.html`
6. Paste the command
7. Copy the bottom right value
8. Make `cfanion.txt`, paste the content.

## What can I do?
Try to use .bin or .txt file for posting request in static way, if you fixed the broken "static" code.

Or just import it to OpenBullet (or Burp Suite if you're pro enough)