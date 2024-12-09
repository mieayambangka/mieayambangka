// Mengaktifkan tombol hamburger pada layar kecil
const navbarToggle = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navbarToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // Menampilkan atau menyembunyikan menu
});
