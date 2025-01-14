AOS.init();

const newslSlider = new Swiper(".news-slider", {
    loop: true,

    // autoplay: true,
    speed: 1000,
    slidesPerView: 4, //한 번에 보여줄 슬라이드 갯수
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: ".news-slider-wrap .swiper-pagination",
        clickable: true, //페이지네이션 클릭 가능하게
    },

    // Navigation arrows
    navigation: {
        nextEl: ".news-slider-wrap .btn-next",
        prevEl: ".news-slider-wrap .btn-prev",
    },
});
