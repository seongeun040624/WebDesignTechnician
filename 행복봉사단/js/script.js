$(function(){
    //nav
    $('#nav>ul.main>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });

    //slider
    let current = 0;
    let slide = $('.slider ul li');

    setInterval(function(){
        let prev = slide.eq(current);
        move(prev, 0, '-100%');
        current++;

        if(current == slide.length){current=0;}

        let next = slide.eq(current);
        move(next, '100%', 0);
    }, 3000)

    function move(tg, start, end){
        tg.css('top', start).stop().animate({top:end}, 500)
    }

    //tab
    $('.tabs ul li').click(function(e){
        e.preventDefault();
        $('.tabs ul li').removeClass('active');
        $(this).addClass('active');

        let i = $(this).index();

        $('.tabContents>div').hide();
        $('.tabContents>div').eq(i).show();
    });

    //popup
    $('.click').click(function(){
        $('.pop').show();
    });
    $('.close').click(function(){
        $('.pop').hide();
    });
})