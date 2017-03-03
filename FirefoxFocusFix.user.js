// ==UserScript==
// @name         Firefox Focus Fix
// @namespace    http://tinygiant.io
// @version      1.0.0.2
// @description  Fixes the recent change implemented by Firefox which places the caret at the end of the text on focus instead of the beginning
// @author       @TinyGiant
// @include      /^https?:\/\/(.*\.)?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)/
// @grant        none
// ==/UserScript==

document.body.appendChild(document.createElement('script')).textContent = `(function() {
    const oldfocus = HTMLElement.prototype.focus;
    
    HTMLElement.prototype.focus = function() {
        oldfocus.call(this);
        if (/wmd-input/.test(this.className))
            if (this.selectionEnd === this.selectionStart)
                this.selectionEnd = 0;
    };
})()`;
