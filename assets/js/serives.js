
var lightGallery = function (){
    if(($('#animated-thumbnails').length > 0)){
        $('#animated-thumbnails').lightGallery({
            selector : '.lightimg',
            loop:true,
            thumbnail:true,
            exThumbImage: 'data-exthumbimage',
            licenseKey: '0000-0000-0000-0000'
        });
    }
}	
lightGallery();

const black = '#000', white = '#fff';

const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const planchoice = document.querySelector('.plan-choice');

monthly.addEventListener('click', function(){
    monthly.style.color = black;
    yearly.style.color = white;
    planchoice.classList.add('choice-year');
    planchoice.classList.remove('choice-month');

});

yearly.addEventListener('click', function(){
    yearly.style.color = black;
    monthly.style.color = white;
    planchoice.classList.remove('choice-year');
    planchoice.classList.add('choice-month')
});

