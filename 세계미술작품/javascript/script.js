$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(400);
    }, function(){
        $(this).find('ul').stop().slideUp(400);
    });

    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let slideHeight = 300;
    let slideCount = sliders.length;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function slideMove(){
        index++;
        slider.animate({top: -index * slideHeight +"px"}, 600, function(){
            if(index===slideCount){
                slider.css('top','0px');
                index=0;
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
})