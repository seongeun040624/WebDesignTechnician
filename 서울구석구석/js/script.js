$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop(true, true).slideDown();
    }, function(){
        $(this).find('ul').stop(true, true).slideUp();
    })


    //imgslider
    let slider = $('.imgslider ul');
    let sliders = $('.imgslider ul li');
    let slideWidth = $('.imgslider').outerWidth(); //이부분필기,,,
    let slideCount = sliders.length;
    let index = 0;

    slider.append(sliders.eq(0).clone());

    function slideMove(){
        index++;
        slider.animate({left: -index * slideWidth +"px"}, 300, function(){
            if(index===slideCount){
                slider.css('left', '0px');
                index=0;
            }
        });
    }
    setInterval(slideMove, 3000)


    //popup
    $('.open').click(function(e){
        e.preventDefault();
        $('.popup').show();
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('.popup').hide();
    });
})