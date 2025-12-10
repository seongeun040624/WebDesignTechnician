$(function(){
    //메뉴
    $('#nav>ul>li').hover(function(){
        $('.bg').stop().slideDown(500);
        $('#nav>ul>li').find('ul').stop().slideDown(500);
    }, function(){
        $('.bg').stop().slideUp(500);
        $('#nav>ul>li').find('ul').stop().slideUp(500);
    })


    //메인이미지슬라이더
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let sliderWidth = 1200;
    let slideCount = sliders.length;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function moveSlide(){
        index++;
        slider.animate({left: -index * sliderWidth + "px"}, 600, function(){
            if(index===slideCount){
                slider.css("left", "0px");
                index = 0;
            }
        })
    }
    setInterval(moveSlide, 3000);


    //팝업창
    $('.open').click(function(e){
        e.preventDefault();
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });

});