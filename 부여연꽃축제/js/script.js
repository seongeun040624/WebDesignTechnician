$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });


    //imgslider
    /* let slider = $('.imgslider ul'); */
    let sliders = $('.imgslider ul li');
    let slideCount = sliders.length;
    let index = 0;

    sliders.css({
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
    });
    sliders.eq(0).css('opacity', 1);
    
    function slideMove(){
        let current = index;
        index++;

        if(index===slideCount){
            index=0;
        }
        sliders.eq(current).stop().animate({opacity: 0}, 500);
        sliders.eq(index).stop().animate({opacity: 1}, 500);
    }
    setInterval(slideMove, 3000);


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
})