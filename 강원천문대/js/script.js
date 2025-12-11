$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });


    //imgslider -> 이미지 슬라이드 효과
    /* let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let sliderCount = sliders.length;
    let sliderWidth = 1200;
    let index = 0;

    sliders.append(sliders.eq(0).clone());

    function slideMove(){
        index++;
        slider.animate({left : -index * sliderWidth + "px"}, 500, function(){
            if(index === sliderCount){
                slider.css('left', '0px');
                index = 0;
            }
        })
    }
    setInterval(slideMove, 3000); */

    //이미지 fade in out 효과
    let slider = $('.imgslider ul li');
    let sliderCount = slider.length;
    let index = 0;

    // 모든 이미지 겹치기 + 첫 번째만 보이기
    slider.css({
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
    });
    slider.eq(0).css("opacity", 1);

    function slideMove() {
        let current = index;
        index++;

        if (index === sliderCount) {
            index = 0;
        }

        // 현재 이미지 fadeOut, 다음 이미지 fadeIn
        slider.eq(current).stop().animate({opacity: 0}, 500);
        slider.eq(index).stop().animate({opacity: 1}, 500);
    }

    setInterval(slideMove, 3000);


    //tabs
    $('.tabs ul li').click(function(e){
        e.preventDefault();
        $('.tabs ul li').removeClass("active");
        $(this).addClass("active");

        let i = $(this).index();
        $('.tabContents>div').hide();
        $('.tabContents>div').eq(i).show();
    });


    //popup
    $('.open').click(function(e){
        e.preventDefault();
        $('.popup').show();
    })
    $('.close').click(function(e){
        e.preventDefault();
        $('.popup').hide();
    })
    
})