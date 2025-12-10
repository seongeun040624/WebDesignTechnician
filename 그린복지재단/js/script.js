$(function(){
    //nav
    $('#nav').hover(function(){
        $('.bg').stop().slideDown(300);
        $('#nav>ul>li').find('ul').stop().slideDown(300);
    }, function(){
        $('.bg').stop().slideUp(300);
        $('#nav>ul>li').find('ul').stop().slideUp(300);
    });

    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let slideWidth = 1200;
    let slidecount = sliders.length;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function moveSlide(){
        index++;
        slider.animate({left: -index* slideWidth +"px"}, 500, function(){
            if(index===slidecount){
                slider.css('left', '0px');
                index=0;
            };
        })
    };
    setInterval(moveSlide, 3000);

    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
    
});