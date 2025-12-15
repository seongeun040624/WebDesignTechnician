$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $('.bg').stop().slideDown(500);
        $('#nav>ul>li').find('ul').stop().slideDown(500);
    }, function(){
        $('.bg').stop().slideUp(500);
        $('#nav>ul>li').find('ul').stop().slideUp(500);
    });

    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let sliderCount = sliders.length;
    let slideWidth = 1200;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function slideMove(){
        index++;
        slider.animate({left : -index * slideWidth + "px"}, 600, 
            function(){
                if(index===sliderCount){
                    slider.css('left', '0px');
                    index = 0;
                };
            });
    };
    setInterval(slideMove, 3000);


    //tabs
    $('.titles>ul>li').click(function(e){
        e.preventDefault();
        $('.titles>ul>li').removeClass('active');
        $(this).addClass('active');

        let i = $(this).index();
        $('.tabContent>div').hide();
        $('.tabContent>div').eq(i).show();
    });


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
});