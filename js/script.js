document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    console.log(AOS);

    const newsSlider = new Swiper(".news-slider", {
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
    const scrollToTopBtn = $("#scrollToTopBtn");

    const $header = $("#header"); // 헤더 선택
    const $menu = $(".gnb > li"); // 메뉴 선택
    const $subMenu = $(".submenu"); // 서브메뉴 선택
    const $window = $(window); // 윈도우 객체
    const duration = 300; // 애니메이션 지속 시간

    let lastScrollTop = 0; // 마지막 스크롤 위치 저장 변수
    // 메뉴 영역에 마우스가 들어오면
    $menu.on("mouseenter", function () {
        $subMenu.stop().slideDown(duration); // 서브메뉴 슬라이드 다운
        $(this).addClass("on");
        $header.addClass("active");
    });

    // 메뉴 영역에서 마우스가 나가면
    $menu.on("mouseleave", function () {
        $subMenu.stop().slideUp(duration); // 서브메뉴 슬라이드 업
        $menu.removeClass("on");
        $header.removeClass("active");
    });

    // 마우스 휠을 조작했을 때
    $window.on("wheel", (e) => {
        if (e.originalEvent.deltaY < 0) {
            // 휠을 올렸을 때 header가 보임(hide클래스 삭제)
            $header.removeClass("hide");
        } else {
            // 휠을 내렸을 때 header가 숨김(hide클래스 추가)
            $header.addClass("hide");
        }
    });

    // 스크롤 이벤트가 일어나면
    $window.on("scroll", () => {
        const scrollTop = $window.scrollTop();

        // 스크롤한 값이 저장된(마지막에 위치했던) 스크롤 값보다 작다면
        if (scrollTop < lastScrollTop) {
            $header.removeClass("hide");
        } else {
            $header.addClass("hide");
        }

        // 마지막 스크롤 값을 갱신
        lastScrollTop = scrollTop;

        if (scrollTop > 300) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });
});
