$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $('.bg').stop().slideDown();
        $('#nav>ul>li>ul').stop().slideDown();
    }, function(){
        $('.bg').stop().slideUp();
        $('#nav>ul>li>ul').stop().slideUp();
    });


    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let slideWidth = 1200;
    let slideCount = sliders.length;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function slideMove(){
        index ++;
        slider.animate({left: -index * slideWidth + "px"}, 500, function(){
            if(index===slideCount){
                slider.css('left', '0px');
                index = 0;
            }
        });
    }
    setInterval(slideMove, 3000);


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
});