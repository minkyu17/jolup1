(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

const restaurants = [
    {
        name: "다레젤라또 연남점",
        location: "서울 마포구 동교로38길 35 지1층 1호",
        price: "컵/콘 100g = 4,500원, 컵/콘 130g = 5,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1115566217?placePath=?entry=pll&from=nx&fromNxList=true&n_ad_group_type=10&n_query=%EC%84%9C%EC%9A%B8%EC%A0%A4%EB%9D%BC%EB%98%90%EB%A7%9B%EC%A7%91&c=17.64,0,0,0,dh"
    },
    {
        name: "펠앤콜",
        location: "서울 마포구 와우산로 39-21",
        price: "컵/콘 100g = 4,500원, 컵/콘 130g = 5,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1115566217?placePath=?entry=pll&from=nx&fromNxList=true&n_ad_group_type=10&n_query=%EC%84%9C%EC%9A%B8%EC%A0%A4%EB%9D%BC%EB%98%90%EB%A7%9B%EC%A7%91&c=17.64,0,0,0,dh"
    },
    {
        name: "피에트라",
        location: "서울 마포구 성미산로23길 62 1층",
        price: "젤라또 = 변동, 반려견 전용 망고 젤라또 = 3,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1741866041?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dbmp%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2584%259C%25EC%259A%25B8%25EC%25A0%25A4%25EB%259D%25BC%25EB%2598%2590%25EB%25A7%259B%25EC%25A7%2591"
    },
    {
        name: "아가젤라또 서초교대점",
        location: "서울 서초구 서초중앙로 110 1층 103호",
        price: "젤라또 컵 120g(2가지맛) = 6,000원, 3가지 맛 200g = 22,000원, 4가지 맛 700g = 28,000원, 6가지 맛 1000g = 42,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1149506640?c=10.00,0,0,3,dh&placePath=%3Fentry%253Dbmp"
    },
    {
        name: "당도",
        location: "서울 송파구 올림픽로 240 롯데월드 SM-B1F-17",
        price: "컵/콘(2가지 맛) = 5,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1268717405?c=10.00,0,0,3,dh&placePath=%3Fentry%253Dbmp"
    },
    {
        name: "러셔스 스쿱스",
        location: "서울 종로구 대학로 128 1층",
        price: "러셔스 스쿱 = 4,000원, 더블 러셔스 스쿱스 = 7,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1603165072?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dbmp"
    },
    {
        name: "녹기 전에",
        location: "서울 마포구 백범로 127-24",
        price: "두 가지 맛 = 5,000원, 3가지 맛(포장) = 18,000원, 4가지 맛(포장) = 26,000원, 6가지 맛(포장) = 32,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/815032618?placePath=?entry=pll&from=nx&fromNxList=true&c=10.00,0,0,0,dh"
    },
    {
        name: "젤라떼리아 도도",
        location: "서울 송파구 백제고분로41길 21-24 1층 코너",
        price: "1인용 작은 컵 = 5,000원, 1인용 큰 컵 = 7,000원, 포장(소) = 14,000원, 포장(중) = 22,000원, 포장(대) = 32,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1985732438?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "아이스크림 소사이어티",
        location: "서울 용산구 한남대로20길 47",
        price: "2가지 맛 = 7,000원, 3가지 맛 = 12,000원, 4가지 맛 = 17,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1760264926?c=9.65,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라토니",
        location: "서울 마포구 독막로2길 12 b동 1층 좌측",
        price: "컵 = 5,000원<br/>M 사이즈 = 20,000원<br/>L 사이즈 = 25,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1065987122?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "우유니아이스크림",
        location: "서울 강남구 압구정로8길 5",
        price: "1스쿱 = 4,200원, 1.5스쿱 = 6,2000원, 3스쿱 = 12,200원, 4.5스쿱 = 18,200원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/38269944?c=9.65,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "콜드레시피",
        location: "서울 서대문구 연희로11라길 2",
        price: "싱글 = 4,500원, 더블(s) = 5,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/32581553?c=9.84,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "솔리드웍스 아이스크림",
        location: "서울 서대문구 이화여대길 88-3 1층",
        price: "1~2가지 맛(cup) = 4,300원, 2가지 맛(S) = 12,000원, 3가지 맛(M) = 16,000원, 4가지 맛(L) = 23,000원, 6가지 맛(XL) = 30,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/173918089?c=9.84,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "당도",
        location: "서울 성동구 왕십리로 80",
        price: "컵/콘(2가지 맛) = 5,500원, 그라니타 = 5,500원, 포장박스(3가지 맛) = 22,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1594521371?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "코코너즘랩",
        location: "서울 중구 퇴계로4길 6 B1",
        price: "싱글 = 3,800원, 더블 = 6,700원, 투고박스 = 13,600원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1292478212?c=15.57,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "당도",
        location: "서울 마포구 포은로 106",
        price: "컵/콘(2가지 맛) = 5,500원, 포장박스(3가지 맛) = 22,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/898151104?c=17.47,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "스쿠퍼젤라또 경복궁점",
        location: "서울 종로구 지하문로7길 10 1층",
        price: "컵/콘 = 5,500원, 포장 비꼴로 두가지 맛 = 15,500원, 포장 메디오 세가지 맛 = 21,000원, 포장 그란데 네가지 맛 = 30,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1553059011?c=17.47,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라띠젤라띠 파미에스테이션점",
        location: "서울 서초구 신반포로 176 센트럴시티 파미에 스테이션 1충",
        price: "컵/콘(2가지 맛) = 5,500원, 투고박스 3가지 맛 = 19,000원, 투고박스 4가지 맛(650g) = 27,000원, 투고박스 4가지 맛(900g) = 37,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/36324317?c=17.47,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "무던",
        location: "서울 종로구 성균관로4길 3",
        price: "컵/콘 = 6,500원, 투고박스 XS = 20,000원, 투고박스 S = 27,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1912032850?c=17.47,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "더마틴",
        location: "서울 종로구 지하문로 54-1",
        price: "컵(2가지 맛) = 8,000원, 포장(3~4가지 맛) S = 28,000원, 포장 M = 34,000원, 포장 L = 40,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1669953487?c=17.47,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "지파시 롯데월드몰점",
        location: "서울 송파구 올림픽로 300 롯데월드몰 지하1층",
        price: "1가지 맛 = 5,000원, 2가지 맛 = 6,000원, 3가지 맛 = 8,000원, 4가지 맛(포장) = 14,000원, 5가지 맛(포장) = 19,500원, 패밀리박스(4가지 맛) = 19,000원, 파티박스(6가지 맛) = 28,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1983164033?c=17.28,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "아이스걸크림보이 마곡점",
        location: "서울 강서구 마곡중앙6로 65 108호",
        price: "박스 SMALL(3가지 맛) = 19,000원, 박스 LARGE(4가지 맛) = 26,000원, 박스 SMALL 1+1 = 37,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1863975184?c=17.28,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라또민구",
        location: "서울 마포구 와우산로21길 14 1층",
        price: "컵/콘 = 4,800원, 캐리어(S) = 18,000원, 캐리어(M) = 26,000원, 캐리어(L) = 35,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1358826601?c=9.44,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "말라카이트",
        location: "서울 용산구 원효로97길 13 1층",
        price: "컵(2가지 맛) = 5,000원, 미디엄 박스(3가지 맛) = 16,000원, 라지 박스(4가지 맛) = 21,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1448071002?c=9.44,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "에쎄레젤라또",
        location: "서울 중구 명동길 74 명동성당 B104호",
        price: "우노컵(1가지 맛) = 5,500원, 두에컵(2가지 맛) = 6,500원, 노이컵(3가지 맛) = 13,000원, 비꼴로 포장(3가지 맛) = 22,000원, 메디오 포장(3,4가지 맛) = 29,000원, 그란데 포장(4가지 맛) = 39,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/36998139?c=9.44,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "키키젤라또",
        location: "서울 동장구 동작대로1길 39 1층",
        price: "컵(2가지 맛) = 5,000원, Small Box(3가지 맛) = 19,000원, Large Box(4가지 맛) = 28,000원, Everyday Box(6가지 맛) = 28,000원, Party Box(6가지 맛) = 36,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1857416135?c=9.44,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라잇",
        location: "서울 마포구 동교로 210 태전빌딩 1층 건물 뒷편",
        price: "컵 = 4,500원, 더블 = 12,900원, 트리플 = 17,900원, 쿼터 = 26,900원, 빅쿼터 = 34,900원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1090276318?c=9.44,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "구스따레일젤라또",
        location: "서울 송파구 송파대로48길 37 상가동 103호",
        price: "컵(1가지 맛) = 4,500원, 컵(2가지 맛) = 5,000원, 메디아 M size(3가지 맛) = 15,000원, 그란데 L size(3가지 맛) = 20,000원, 몰토 그란데 XL size(4가지 맛) = 26,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1986975073?c=9.25,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "조선젤라또",
        location: "서울 종로구 돈화문로11나길 31-14",
        price: "컵,콘 = 4,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1539451060?c=9.25,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "알키미아 선촌본점",
        location: "서울 종로구 옥인길 59-1 1층",
        price: "컵(1가지 맛) = 5,500원, 컵(2가지 맛) = 7,500원, 1박스 포장 = 19,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1465930106?c=9.25,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "벌스데이",
        location: "서울 송파구 백제고분로45길 4-21 1층",
        price: "컵 = 5,000원, 3가지 맛 박스 = 18,000원, 4가지 맛 박스 = 24,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1200562503?c=9.25,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "글레이셔박",
        location: "서울 성동구 서울숲2길 9",
        price: "컵(2가지 맛) = 6,000원, 컵(3가지 맛) = 8,000원, 콘(2가지 맛) = 7,000원, 콘(3가지 맛) = 9,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1936568550?c=9.25,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "누볼라",
        location: "서울 서초구 강남대로53길 12 솔라티움시티 3층 307호",
        price: "컵 = 6,000원, Small = 22,000원, Medium = 31,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1605348456?c=9.25,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "디어 젤라또",
        location: "서울 강남구 역삼로64길 22 1층",
        price: "컵(2가지 맛) = 3,900원<br/>콘(2가지 맛) = 4,900원<br/>스몰 박스(3가지 맛) = 16,000원<br/>미디엄 박스(4가지 맛) = 23,000원<br/>라지 박스(6가지 맛) = 31,000원<br/>테이스티 박스(6가지 맛) = 30,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1232310413?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "glt젤라또",
        location: "서울 마포구 양화로23길 10-8",
        price: "컵(1가지 맛) = 4,500원, 컵/콘(2가지 맛) = 5,500원, 박스 M(3가지 맛) = 20,000원, 박스 L(4가지 맛) = 29,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1051540017?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "펠리치따",
        location: "서울 관악구 남부순환로 1922 청동빌딩 별관 1층",
        price: "젤라또 350cc(4가지 맛) = 12,900원, 젤라또 500cc(4가지 맛) = 16,900원, 젤라또 750cc(4가지 맛) = 21,900원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/37341571?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "you are my gelato",
        location: "서울 영등포구 도림로 425 1층",
        price: "STANDARD CUP = 5,000원, PREMIUM CUP = 6,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1440205543?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젠제로",
        location: "서울 강남구 선릉로126길 14 예우빌딩 1층",
        price: "소 포장(3가지 맛) = 25,000원, 중 포장(4가지 맛) = 34,000원, 대 포장(4가지 맛) = 46,000원, 고메박스(6컵) = 44,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1714404667?c=9.81,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "오로시젤라또 여의도점",
        location: "서울 영등포구 여의대방로69길 19 힐스테이트 여의도파인루체 1층 101호",
        price: "컵(2가지 맛) = 5,500원, 콘(2가지 맛) = 6,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1195046314?c=9.81,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "쿱 coop",
        location: "서울 용산구 새창로12길3 1층",
        price: "컵(2가지 맛) = 5,000원, 포장 M(3가지 맛) = 17,000원, 포장 L(4가지 맛) = 22,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1400052766?c=9.81,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "나이스크림",
        location: "서울 양천구 목동서로 295 우림필유 1층 101-1호",
        price: "Small(3가지 맛) = 19,000원, Medium(4가지 맛) = 28,000원, Big A(4가지 맛) = 35,000원, Big B(6가지 맛) = 35,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1186618770?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라또투유",
        location: "서울 성동구 성수이로7길 1",
        price: "한가지 맛(100ml) = 3,800원, 두가지 맛(200ml) = 5,800원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1247801780?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "나이스망원",
        location: "서울 마포구 희우정로10길 15 상가 107호",
        price: "Small(3가지 맛) = 19,000, Medium(4가지 맛) = 28,000원, Big(6가지 맛) = 35,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1287839428?c=9.63,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "푸욱 젤라또",
        location: "서울 노원구 상계로9가길 23 1층",
        price: "S Box(2가지 맛) = 16,000원, M Box(3~4가지 맛) = 21,000원, L Box(4~6가지 맛) = 29,000원, 푸욱 Set(1컵 1가지 맛씩 총 5컵) = 21,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1698109964?c=9.63,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "다녹",
        location: "서울 마포구 백범로 152 101동 1층 14호",
        price: "한 컵(2가지 맛) = 5,000원, 콘(2가지 맛) = 5,500원, 스몰박스(3가지 맛) = 17,000원, 미디움박스(4가지 맛) = 23,000원, 라지박스(6가지 맛) = 30,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1716349204?c=9.63,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "두옹즈",
        location: "서울 강서구 양천로30길 67 1층 105호",
        price: "한컵(2가지 맛) = 4,500원, 미디움(3가지 맛) = 17,000원, 라지(4가지 맛) = 25,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1068138683?c=9.63,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "부엉이젤라또",
        location: "서울 광진구 능동로8길 19 1층",
        price: "1컵(1가지 맛) = 6,000원. 1컵(2가지 맛) = 7,000원. 1컵(믹흐 1가지 맛) = 7,000원. M 사이즈(2가지 맛) = 20,000원. M 사이즈(3가지 맛) = 21,000원. L 사이즈(3가지 맛) = 32,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1440637282?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "아마당",
        location: "서울 강남구 도곡로77길 8 102호",
        price: "S 피콜로(2가지 맛) = 18,500원, M 메디아(3가지 맛) = 24,500원, S 피콜로 트윈(1+1) set(4가지 맛) = 34,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1972068295?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "페르케노",
        location: "서울 서초구 잠원로 37-48 뉴코아아울렛 강남점 1관 지하 1층",
        price: "싱글포크(1가지 맛) = 3,900원, 더블피콜라(2가지 맛) = 4,900원, 트리플메디아(3가지 맛) = 5,900원, S 포장(3가지 맛) = 15,900원, M 포장(4가지 맛) = 19,900원, L 포장(5가지 맛) = 22,900원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/37463918?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "탕고",
        location: "서울 강남구 압구정로 224",
        price: "컵(2가지 맛) = 7,500원, tub M(3가지 맛) = 24,000원, tub L(4가지 맛) = 36,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1451616375?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "델리에또",
        location: "서울 서초구 신반포로 176 신세계 센트럴시티 1층 쉐이크쉑과 스타벅스 중간 매장",
        price: "싱골라 컵(1가지 맛) = 5,500원, 생과일 토핑 젤라또(1가지 맛) = 7,500원, 메디아(3가지 맛) = 16,000원, 그란데(4가지 맛) = 20,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1718582962?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "갸띠또 젤라또",
        location: "서울 노원구 한글비석로 264 그랜드프라자 104호",
        price: "S Box(2가지 맛) = 17,000원, M Box(3가지 맛) = 23,000원, L Box(4가지 맛) = 32,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1740379876?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "오딸레",
        location: "서울 강남구 남부순환로359길 31 1층",
        price: "컵(2가지 맛) = 5,000원, 포장 박스(3가지 맛) = 18,000원, 포장 박스(4가지 맛) = 26,000원, 포장 박스(6가지 맛) = 32,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1259729586?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "세띠엠므 현대백화점무역센터점",
        location: "서울 강남구 테헤란로 517 현대백화점무역센터점 지하 1층",
        price: "싱글 = 4,600원<br/>더블 = 6,500원, 트리플 = 8,500원, 파인트 = 17,000원, 쿼터 = 22,600원, 패밀리 = 29,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/36720870?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라또비",
        location: "서울 동작구 동작대로11길 87 1층",
        price: "컵(2가지 맛) = 4,500원, 포장(2가지 맛) = 15,000원, 포장(3가지 맛) = 20,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1967169501?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라떼리아모멘토",
        location: "서울 서초구 사임당로 158 리더스원상가 지하 1층 117호",
        price: "컵(2가지 맛) = 4,500원, 포장 소(2가지 맛) = 16,000원, 포장 중(3가지 맛) = 22,000원, 포장 대(4가지 맛) = 31,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1437983424?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "따빠디또",
        location: "서울 관악구 행운1길 79",
        price: "컵(2가지 맛) = 6,000원, 포장 소(3가지 맛) = 19,000원, 포장 대(6가지 맛) = 35,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1379895365?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "에밀리아젤라또 등촌역점",
        location: "서울 강서구 공항대로67길 29-26 1층",
        price: "삐꼴라 콘/컵(1가지 맛) = 4,500원, 메디아 콘/컵(2가지 맛) = 5,500원, 그란데(2가지 맛) = 7,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1054189571?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "카페 앤 젤라또",
        location: "서울 강남구 가로수길 69 하이스트리트이탈리아 1층",
        price: "피스타치오 미니컵 = 4,500원, 초콜라또 미니컵 = 4,500원, 제주녹차 미니컵 = 4,500원, 제주감귤 미니컵 = 4,500원, 트리플베리 미니컵 = 4,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1907658046?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "테디아이스크림",
        location: "서울 강남구 도산대로53길 17 1층 1-2호",
        price: "싱글컵(2가지 맛) = 4,800원, 중 포장(3가지 맛) = 20,000원, 대 포장(4가지 맛) = 27,000원, 테디 박스 A = 30,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1214050288?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "구스띠모 종각타워8점",
        location: "서울 종로구 종로5길 7 지하106호",
        price: "컵/콘(1가지 맛) = 5,400원, 뽀꼬 포장(4가지 맛) = 25,000원, 삐꼴로 포장(5가지 맛) = 30,000원, 그란데 포장(6가지 맛) = 35,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/37157530?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "젤라트리",
        location: "서울 구로구 경인로 433-1",
        price: "싱글 = 3,000원, 더블 = 5,500원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/33067979?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    },
    {
        name: "코타티 해방촌",
        location: "서울 용산구 신흥로12길 7",
        price: "스탠다드 = 6,000원, 프리미엄 = 7,000원, 포장(2가지 맛) = 20,000원, 포장(4가지 맛) = 32,000원",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%A0%A4%EB%9D%BC%EB%98%90%20%EB%A7%9B%EC%A7%91/place/1499075152?c=10.00,0,0,0,dh&placePath=%3Fentry%253Dpll"
    }
    // 다른 음식점 데이터도 추가 가능
];

// 검색 함수
function searchRestaurants(keyword) {
    // 검색 결과를 담을 배열
    const searchResults = restaurants.filter(restaurant => {
        // 음식점 이름과 위치에서 검색어가 포함된 항목 찾기
        return restaurant.name.includes(keyword) || restaurant.location.includes(keyword);
    });
    return searchResults;
}

// 검색 버튼 클릭 이벤트 처리
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = searchRestaurants(searchInput);
    displaySearchResults(searchResults);
});

// 검색 결과를 화면에 표시하는 함수
function displaySearchResults(results) {
    const serviceCarousel = document.querySelector('.service-carousel');
    // 이전 검색 결과 지우기
    serviceCarousel.innerHTML = '';

    // 검색 결과를 화면에 추가
    results.forEach(restaurant => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <div class="service-img mx-auto">
                <img class="rounded-circle w-100 h-100 bg-light p-3" src="img/다레젤라또 연남점.jpg" style="object-fit: cover;">
            </div>
            <div class="position-relative text-center bg-light rounded p-4 pb-5" style="margin-top: -75px; height:440px;">
                <h5 class="font-weight-semi-bold mt-5 mb-3 pt-5">${restaurant.name}</h5>
                <p>위치 : ${restaurant.location}<br/><br/>가격 : ${restaurant.price}</p>
                <a href="${restaurant.link}" class="border-bottom border-secondary text-decoration-none text-secondary" target="_blank" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">위치</a>
            </div>
        `;
        serviceCarousel.appendChild(serviceItem);
    });
}