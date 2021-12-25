const header = document.querySelector('.header');
const menuitems = document.querySelectorAll('.item-link');
const topbutton = document.querySelector(".scrolltop");
const openmenu = document.querySelector('.mobile-open');
const closenmenu = document.querySelector('.mobile-close');
const menumodal = document.querySelector('.header-nav');
const mobilemenu = document.querySelector('.navbar');
const mobileItems = document.querySelectorAll('.menu-item');

mobileItems.forEach(item => {
    item.addEventListener('click', function(e){
        console.log(e)
        console.log(this)
        this.querySelector('.sub-menu').classList.toggle('sub-menu-open');
        console.log(this.querySelector('a').querySelector('i'))
        this.querySelector('a').querySelector('i').classList.toggle('fa-angle-right');
        this.querySelector('a').querySelector('i').classList.toggle('fa-angle-down');
    })
})


window.addEventListener('scroll', function() {
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
});

function openMenu() {
    openmenu.style.display = 'none';
    closenmenu.style.display = 'block';
    menumodal.classList.toggle('menu-active');
    mobilemenu.classList.toggle('menufly');
}

function closeMenu() {
    openmenu.style.display = 'block';
    closenmenu.style.display = 'none';
    mobilemenu.classList.toggle('menufly');
    menumodal.classList.toggle('menu-active');
}

mobilemenu.addEventListener('click', function(e) {
    e.stopPropagation();
})

openmenu.addEventListener('click', openMenu);
closenmenu.addEventListener('click', closeMenu);
menumodal.addEventListener('click',closeMenu);



