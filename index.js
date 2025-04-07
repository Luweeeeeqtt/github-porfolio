const toggleButton = document.getElementById('menu-toggle');
const navbarList = document.getElementById('navbar').querySelector('ul');

toggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('show');
});
