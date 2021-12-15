$('.slick-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.pre'),
    nextArrow: $('.next'),
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: false,
    speed: 2500,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
    ]
});

$('.partner-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.pre'),
    nextArrow: $('.next'),
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    variableWidth: false,
    speed: 2000,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 541,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
    ]
});