$(function(){
    //nav
    $('#nav').hover(function(){
        $('nav>ul>li>ul').stop().css('display', 'flex');
    }, function(){
        $('nav>ul>li>ul').stop().css('display', 'none');
    });

    //slide
    let current = 0;
    let slide = $('.slider ul li');

    setInterval(function(){
        let prev = slide.eq(current);
        move(prev, 0, '-100%');

        current++;

        if(current == slide.length){current = 0;}
        
        let next = slide.eq(current);
        move(next, '100%', 0);
    }, 3000);

    function move (tg, start, end){
        tg.css('top', start).stop().animate({top:end}, 500)
    }

    //popup
    $('.click').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
})