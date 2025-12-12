$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $('.bg').stop().slideDown();
        $('#nav>ul>li').find('ul').stop().slideDown();
    }, function(){
        $('.bg').stop().slideUp();
        $('#nav>ul>li').find('ul').stop().slideUp();
    });


    //imgslider /fade in out 효과를 넣을 땐 display 적용 x
    let sliders = $('.imgslider ul li');
    let slideCount = sliders.length;
    let index = 0;

    sliders.css({
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: '100%'
    });
    sliders.eq(0).css('opacity', 1);

    function slideMove(){
        let current = index;
        index++;

        if(index===slideCount){
            index=0;
        };

        sliders.eq(current).stop().animate({opacity: '0'}, 500);
        sliders.eq(index).stop().animate({opacity: '1'}, 500);
    };
    setInterval(slideMove, 3000);


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
})