const header = document.querySelector('.header');
const menuitems = document.querySelectorAll('.item-link');
const topbutton = document.querySelector(".scrolltop");
const openmenu = document.querySelector('.mobile-open');
const closenmenu = document.querySelector('.mobile-close');
const menumodal = document.querySelector('.header-nav');
const mobilemenu = document.querySelector('.navbar');


window.onscroll = function() {scrollFunction()};

function openMenu() {
    openmenu.style.display = 'none';
    closenmenu.style.display = 'block';
    menumodal.classList.add('menu-active');
    mobilemenu.classList.add('menufly');
}

function closeMenu() {
    openmenu.style.display = 'block';
    closenmenu.style.display = 'none';
    mobilemenu.classList.remove('menufly');
    menumodal.classList.remove('menu-active');
}

openmenu.addEventListener('click', openMenu);
closenmenu.addEventListener('click', closeMenu);


function scrollFunction () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add('whitebg');
        topbutton.style.display = "block";
        for (const menuitem of menuitems) {
        menuitem.classList.add('item-link-scroll');
        }
        
    }
    else {
        header.classList.remove('whitebg');
        topbutton.style.display = "none";
        for (const menuitem of menuitems) {
            menuitem.classList.remove('item-link-scroll');
        }
    }
}

