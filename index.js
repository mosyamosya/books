(function main() {
  'use strict';

  const home = document.getElementById('home-button');
  const leftMenu = document.getElementById('left-menu');
  home.addEventListener('click', () => {
    leftMenu.className = leftMenu.className === 'opend' ? 'closed' : 'opend';
  });
}());
