const header = document.querySelector('.header');
const menuitems = document.querySelectorAll('.item-link');
const topbutton = document.querySelector(".scrolltop");
window.onscroll = function() {scrollFunction()};

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

