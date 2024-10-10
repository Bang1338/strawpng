// ==UserScript==
// @name         StrawPNG Hookah
// @namespace    SPNG-HOOK
// @version      1.0
// @description  Replace JavaScript, duh.
// @match        *://*.straw.page/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

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