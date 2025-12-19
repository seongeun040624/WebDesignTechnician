$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().hide();
    });


    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let slideWidth = 800;
    let slideCount = sliders.length;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function slideMove(){
        index++;
        slider.animate({left: -index * slideWidth +"px"}, 400, function(){
            if(index === slideCount){
                slider.css({left: "0px"});
                index=0;
            }
        });
    };
    setInterval(slideMove, 3000);


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });

    //banner
    let slider1 = $('.banner ul');
    let sliders1 = $('.banner ul li');
    let slideHeight = 145;
    let slideCount1 = sliders.length;
    let index1 = 0;

    slider1.append(sliders1.eq(0).clone());

    function slideMove1(){
        index1++;
        slider1.animate({top: -index * slideHeight +"px"}, 400, function(){
            if(index1 === slideCount1){
                slider1.css({top: "0px"});
                index1=0;
            }
        });
    };
    setInterval(slideMove1, 3000);
});