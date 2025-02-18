document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.toggle('show');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.remove('show');
});
$(document).ready(function () {
    var isRtl = $('html').attr('dir') === 'rtl'; // Check the direction of the page
    $('.slider').slick({
        rtl: isRtl,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
});

