$(function(){
    //nav
    $("nav > ul > li").mouseover(function(){
        $(".sub, .bg").stop().fadeIn();
    });
    $("nav > ul > li").mouseout(function(){
        $(".sub, .bg").stop().fadeOut();
    });


    //imgslider
    $('.imgslider li:gt(0)').hide();
    setInterval(function(){
        $('.imgslider li:first-child').fadeOut()
        .next('li').fadeIn().end()
        .appendTo('.imgslider ul')
    }, 3000);


    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
})