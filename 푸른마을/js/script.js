$(function(){
    //nav 투댑스 위아래로 호버하면 닫히는데
    $('#nav>ul').hover(function(){
        $('.bg').show().stop().animate({width:'100%'}, 300);
        $(this).find('ul').css('display', 'flex').show(300);

    }, function(){
        $('.bg').stop().animate({width:0}, 300);
        $(this).find('ul').css('display', 'none').hide(300);
    });


    //imgslider
    let sliders = $('.imgslider ul li');
    let slideCount = sliders.length;
    let index = 0;

    sliders.css({
        position: 'absolute',
        top: 0, left:0,
        opacity:0
    });
    sliders.eq(0).css('opacity', 1);

    function slideMove(){
        let currentI = index;
        index++;

        if(index===slideCount){
            index=0;
        }
        sliders.eq(currentI).stop().animate({opacity:0}, 500);
        sliders.eq(index).stop().animate({opacity:1}, 500);
    };
    setInterval(slideMove, 3000);


    //popup
    $('.open').click(function(e){
        e.preventDefault();
        $('.popup').show();
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('.popup').hide();
    });

    //tabs
    $('.tab>ul>li>a').click(function(e){
        e.preventDefault();
        $('.tab>ul>li>a').removeClass('on');
        $(this).addClass('on');

        let i = $(this).parent().index();
        $('.tabContent>div').hide();
        $('.tabContent>div').eq(i).show();
    });

    

})