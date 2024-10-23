document.addEventListener('copy', function(e){
    e.preventDefault();
})

document.addEventListener('cut', function(e){
    e.preventDefault();
})
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}