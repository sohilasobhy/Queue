document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    document.body.classList.add('show');
    menu.classList.toggle('show');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    document.body.classList.remove('show');
    menu.classList.remove('show');

});
$(document).ready(function () {
    var isRtl = $('html').attr('dir') === 'rtl';

    $('.slider').slick({
        dots: true,
        rtl: isRtl,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: isRtl
            ? "<button class='prev'><svg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.499512 3.93823H7.34514L4.20076 0.793857L4.99951 0.000732422L9.49951 4.50073L4.99951 9.00073L4.20639 8.20761L7.34514 5.06323H0.499512V3.93823Z' fill='#BBC3CF'/></svg></button>"
            : "<button class='prev'><svg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 0.000732422L5.79312 0.793857L2.65438 3.93823H9.5V5.06323H2.65438L5.79312 8.20761L5 9.00073L0.5 4.50073L5 0.000732422Z' fill='#BBC3CF'/></svg></button>",
        nextArrow: isRtl
            ? "<button class='next'><svg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 0.000732422L5.79312 0.793857L2.65438 3.93823H9.5V5.06323H2.65438L5.79312 8.20761L5 9.00073L0.5 4.50073L5 0.000732422Z' fill='white'/></svg></button>"
            : "<button class='next'><svg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.499512 3.93823H7.34514L4.20076 0.793857L4.99951 0.000732422L9.49951 4.50073L4.99951 9.00073L4.20639 8.20761L7.34514 5.06323H0.499512V3.93823Z' fill='white'/></svg></button>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
        ]
    });
});












