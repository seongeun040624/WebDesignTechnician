$(function(){
    //nav
    $('.nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });


    //slider
    let current = 0;
    let slider = $('.slider ul li');

    setInterval(function(){
        let prev = slider.eq(current);

        move(prev, 0, '100%');
        current ++;
        if(current == slider.length){
            current = 0;
        }

        let next = slider.eq(current);
        move(next, '-100%', 0);
    }, 3000)

    function move (tg, start, end){
        tg.css('top', start).stop().animate({top: end}, 500)
    }


    //popup
    $('.click').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
    
});