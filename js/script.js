AOS.init();

const newslSlider = new Swiper(".news-slider", {
    loop: true,

    // autoplay: true,
    speed: 1000,
    slidesPerView: 2, //한 번에 보여줄 슬라이드 갯수
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

    /* 반응형 */
    breakpoints: {
        /* 768px 이상일 때 슬라이드 갯수 3개 */
        768: {
            slidesPerView: 4,
        },
    },
});

// 버튼 요소 가져오기
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 스크롤 이벤트 감지
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        // 스크롤이 300px 이상 내려가면 버튼 표시
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
    } else {
        // 그렇지 않으면 버튼 숨김
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
    }
});

// 버튼 클릭 이벤트
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드럽게 스크롤
    });
});
