const miniMenu = document.querySelector('[data-menu]')
function apareceMenu() {
    const top = window.pageYOffset;
    if (top > 500) {
        miniMenu.classList.add('icons_opacity');
    } else {
        miniMenu.classList.remove('icons_opacity');
    }
}
function inicio() {
    alert("Image is loaded");
  }
window.addEventListener('scroll', apareceMenu);
