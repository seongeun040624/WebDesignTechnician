$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').show();
    }, function(){
        $(this).find('ul').hide();
    });


    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let slideCount = sliders.length;
    let slideWidth = 800;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function slideMove(){
        index++;
        slider.animate({left: -index * slideWidth +"px"}, 500, function(){
            if(index===slideCount){
                slider.css({left: "0px"})
                index=0;
            };
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