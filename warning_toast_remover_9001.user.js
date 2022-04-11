// ==UserScript==
// @name         Warning Toast Remover 9001
// @match        https://ylilauta.org/*
// @grant        none
// ==/UserScript==
(function() {
    "use strict"

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    delay(1000).then(() => {
        const toasts = document.querySelectorAll('.toast-root');
        toasts.forEach(toast => toast.remove());
        console.log("Warning toast removed! t. WTR9001");
    });

})()
