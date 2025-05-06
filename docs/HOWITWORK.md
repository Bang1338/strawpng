<h1 align="center">
Strawpage & StrawPNG - How it work?
</h1>

# Strawpage

## picasso
```
Pablo Ruiz Picasso (25 October 1881 – 8 April 1973) 
was a Spanish painter, sculptor, printmaker, ceramicist, 
and theatre designer who spent most of his adult life in France. 

One of the most influential artists of the 20th century, 
he is known for co-founding the Cubist movement, the invention of 
constructed sculpture, the co-invention of collage, and for the 
wide variety of styles that he helped develop and explore. 

Among his most famous works are the 
proto-Cubist Les Demoiselles d'Avignon (1907) 
and the anti-war painting Guernica (1937), 
a dramatic portrayal of the bombing of Guernica by 
German and Italian air forces during the Spanish Civil War.
```
- the name "Picasso" also used in strawpage, as an important part to make your anonymous art to someone.

## [picasso v1](https://github.com/Bang1338/strawpng/blob/main/docs/picasso-v1-deobfuscated.js)
- aka `/gimmicks/canvas`

In picasso v1, they just: 
1. Take base64 image data form canvas: `_0x48ac97.toDataURL("image/png")`
2. Embed with external data: site name, unknown base64 data (likely signature)
3. Send to `<your strawpage site>/gimmicks/canvas`

Final image data (obfuscated variable name): `_0x192cea`

## [picasso v2](https://github.com/Bang1338/strawpng/blob/main/draw-deob.js)
- aka `/gimmicks/canvas/2`

Picasso v2 used different way:
1. Write vector data in JSON everytime you touch
2. Pack vector data with zlib deflate (default compression)
3. Encode with base64
4. Send to `<your strawpage site>/gimmicks/canvas/2`

Final data (obfuscated variable name): 
- Custom JSON vector: `_0xb2b917`
- Width, height: `_0x1cd1c9` (`.width`, `.height`)
- Reduce size(?): `_0x2845ef`

## picasso v3
Not published, but they improved the obfuscation and used Websocket. Here's my **theory**:
1. Create Websocket once user touch drawing gimmick for first time (this took a while)
2. Write vector data in JSON everytime you touch, note that they will split JSON for server processing vector easier - **THEORY**
3. Everytime you touch, encrypt JSON data with AES (or something else) - **THEORY**
4. Once you send, they close the websocket.
5. Drawing gimmick(s) are sent to strawpage moderation. If it met the standard, they will approve to show it to user - **THEORY**

No final data yet

## Rendering
- picasso v1: local (aka when you draw)
- picasso v2: server (aka server render the image)
- picasso v3: server (in real time)

## StrawPNG - My approach
#### Picasso v1 (patched)
Just make a skeleton that allow me to ~~turn base64 image to actual image data, then put it somewhere~~ replace base64 image data

#### Picasso v2
1. Replace entire script with attached value
```js
    try {
      // let _0x1f582d = pako.deflate(JSON.stringify(_0x56a357));
      // const _0xb2b917 = _arrayBufferToBase64(_0x1f582d);
      const _0xb2b917 = "base64_data_goes here"
      const _0x3577d3 = _0x1cd1c9.width / _0x2845ef;
      const _0x1ac094 = _0x1cd1c9.height / _0x2845ef;
      _0x1cd1c9.width = "width_goes_here"
      _0x1cd1c9.height = "height_goes_here"
      $.ajax({
        type: "POST",
        url: "/gimmicks/canvas/2",
        data: {
          comp: _0xb2b917,
          dims: {
            w: _0x1cd1c9.width,
            h: _0x1cd1c9.height,
            r: _0x2845ef
          }
        },
```
2. Host it in own localhost with CORS
3. Replace source script with own one
```js
(function() {
    'use strict';
	
    // took me three hours for this code
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeName === 'SCRIPT' && node.src === 'https://straw.page/min/?g=drawm&n=88') {
                        node.src = 'http://127.0.0.1:5000/draw-runtime.js';
                        console.log('Script replaced successfully');
                    }
                });
            }
        });
    });

    observer.observe(document, { childList: true, subtree: true });
})();
```
4. Go to their strawpage, put any temporary drawing, send.

#### Picasso v3 - No approach yet.
