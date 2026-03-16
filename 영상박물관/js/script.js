$(function(){
    //nav
    $('nav>.main>li').hover(function(){
        $(this).find('ul').stop().show();
    }, function(){
        $(this).find('ul').stop().hide();
    });

    //slide
    let current = 0;
    let slide = $('.slider ul li');

    setInterval(function(){
        let prev = slide.eq(current);
        move(prev, 1, 0);

        current++;
        if(current == slide.length){current=0;}

        let next = slide.eq(current);
        move(next, 0, 1);
    }, 3000);

    function move(tg, start, end){
        tg.css('opacity', start).stop().animate({opacity:end}, 500);
    }

    //popup
    $('.open').click(function(e){
        e.preventDefault();
        $('.popup').show();
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('.popup').hide();
    });
});