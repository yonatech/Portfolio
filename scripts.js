const SideMenu = document.querySelector('#sidem')

function OpenMenu(){
    SideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    SideMenu.style.transform = 'translateX(16rem)';
}