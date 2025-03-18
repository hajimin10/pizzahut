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

    //대상을 변수에 저장
    const $tabMenu = $(".tab-menu li");
    const $tabItem = $(".tab-item");

    console.log($tabMenu, $tabItem);

    //준비작업
    tabAction(0);
    // $tabItem.hide();
    // $tabItem.eq(0).show();

    // $tabMenu.removeClass("active");
    // $tabMenu.eq(0).addClass("active");

    //탭메뉴를 클릭하면
    $tabMenu.on("click", function (e) {
        //a의 기본동작(링크 이동)을 막기
        e.preventDefault();

        //인덱스를 구하기: index()
        const idx = $(this).index();

        tabAction(idx);

        // //모든 탭 아이템을 숨기고
        // $tabItem.hide();

        // //인덱스 적용하기: eq(인덱스)
        // //클릭한 탭 메뉴에 해당하는 탭 아이템을 보여줌
        // $tabItem.eq(idx).show();

        // //모든 탭 메뉴에서 활성화 클래스를 제거하고
        // $tabMenu.removeClass("active");

        // //클릭한 탭 메뉴에 활성화 클래스 추가
        // $tabMenu.eq(idx).addClass("active");
    });

    //3초에 한 번씩 탭이 전환
    // setInterval(동작,시간)
    // let num = 0;
    // setInterval(() => {
    //     if (num < $tabMenu.length - 1) {
    //         num++;
    //     } else {
    //         num = 0;
    //     }
    //     tabAction(num);
    // }, 3000);

    // setInterval(() => {
    //     num = (num + 1) % $tabMenu.length;
    //     tabAction(num);
    // }, 1000);

    //중복된 동작을 함수로 정의
    function tabAction(index) {
        $tabItem.hide();
        $tabItem.eq(index).show();

        $tabMenu.removeClass("active");
        $tabMenu.eq(index).addClass("active");
    }

    $(".tab-menu li a").click(function (e) {
        e.preventDefault();

        // 모든 탭에서 active 클래스 제거
        $(".tab-menu li").removeClass("active");
        $(".tab-item").hide();

        // 클릭한 탭에 active 클래스 추가
        $(this).parent().addClass("active");

        // 해당하는 콘텐츠 보이기
        var target = $(this).attr("href");
        $(target).show();
    });

    // 초기 상태 설정 (첫 번째 탭 활성화)
    $(".tab-menu li:first-child").addClass("active");
    $(".tab-item").hide();
    $(".tab-item:first").show();
});
