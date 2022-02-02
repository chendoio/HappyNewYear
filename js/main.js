const navBar = document.querySelector('.navigation');
const menuBar = document.querySelector('.menuBar');
const menuBarOn = document.querySelector('.menuBarOn');

menuBar.addEventListener('click', open);

function open() {
    if(navBar.classList.contains('open')){
        navBar.classList.remove('open');
        menuBarOn.setAttribute('src', 'img/menuBarOn.svg');
    } else {
        navBar.classList.add('open');
        setTimeout(() => {
            menuBarOn.setAttribute('src', 'img/menuBar.svg');
        }, 150);
    }
}