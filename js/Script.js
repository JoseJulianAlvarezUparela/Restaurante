const MiMenu = document.querySelector('.Navegation');
const MenuBtn = document.getElementById('toggleMenu');
const Enlaces = MiMenu.getElementsByTagName('a');

MenuBtn.addEventListener('click', () => {
    MiMenu.classList.toggle('nav-show');
});

for (let i = 0; i < Enlaces.length; i++) {
    Enlaces[i].addEventListener('click', () => {
        MiMenu.classList.remove('nav-show');
    });
}



document.querySelector('.expand-button').addEventListener('click', function() {
    document.querySelector('.left').classList.toggle('expanded');
});


function toggleMenu() {
    var menu = document.querySelector('.left');
    var brasil = document.getElementById('Brasil');
    menu.classList.toggle('expanded');
    brasil.classList.toggle('hidden');
}