$(function(){
    //nav
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });

    //slider
    let current = 0;
    let slide = $('.slider ul li');

    setInterval(function(){
        let prev = slide.eq(current);
        move(prev, 1, 0);

        current++;

        if(current == slide.length){current=0;}

        let next = slide.eq(current);
        move(next, 0, 1);
    }, 3000)

    function move(tg, start, end){
        tg.css('opacity', start).stop().animate({opacity:end}, 500)
    }

    //popup
    $('.click').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
})