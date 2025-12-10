$(function(){

    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });

    //imgslide
    let slider = $('.mainslider ul');
    let sliders = $('.mainslider ul li');
    let slideCount = sliders.length;
    let slideWidth = 1300; // 이게 최선인듯ㅜㅜ
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function moveSlide(){
        index++;
        slider.animate({left: -index * slideWidth + "px"}, 600, function(){
            if(index===slideCount){
                slider.css("left", "0px")
                index = 0;
            }
        });

    }
    setInterval(moveSlide, 3000);

});