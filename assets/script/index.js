'use strict';
 
const darkModeButton = document.querySelector('.button');
darkModeButton.addEventListener('click', function() {
    const body = document.querySelector('body');
    body.style = '.dark-mode'
});