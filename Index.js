document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.toggle('show');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.remove('show');
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselExampleIndicators");
    const prevButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");

    function updateButtonStyles() {
        const activeItem = carousel.querySelector(".carousel-item.active");
        const allItems = [...carousel.querySelectorAll(".carousel-item")];
        const activeIndex = allItems.indexOf(activeItem);

        prevButton.classList.toggle("disabled", activeIndex === 0);
        nextButton.classList.toggle("disabled", activeIndex === allItems.length - 1);
    }

    carousel.addEventListener("slid.bs.carousel", updateButtonStyles);
    updateButtonStyles();
});
