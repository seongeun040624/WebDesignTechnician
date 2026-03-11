$(function(){
    //nav slide
    $('nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });

    //main slide
    let current = 0;
    let slide = $('main ul li');

    setInterval(function(){
        let prev = slide.eq(current);
        move(prev, 0, '-100%');
        current ++;
        if(current == slide.length){
            current=0;
        }
        
        let next = slide.eq(current);
        move(next, '100%', 0);
    }, 3000)
    function move(tg, start, end){
        tg.css('top', start).stop().animate({top: end}, 500)
    }

    //popup
    $('.open').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
});