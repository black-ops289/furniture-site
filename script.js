const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav')
btn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
const cartCount = document.querySelector('#cart-count');
const buyButtons = document.querySelectorAll('.photo button');
let count = Number(localStorage.getItem('cartCount')) || 0;
cartCount.textContent = count;
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    localStorage.setItem('cartCount', count);
  });
});