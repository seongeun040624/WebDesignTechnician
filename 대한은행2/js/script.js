$(function(){
    //nav
    $('#nav').hover(function(){
        $('.bg').stop().slideDown();
        $('#nav>ul>li>ul').stop().slideDown();
    }, function(){
        $('.bg').stop().slideUp();
        $('#nav>ul>li>ul').stop().slideUp();
    });

    //slide
    let current = 0;
    let slide = $('.slide ul li');

    setInterval(function(){
        let prev = slide.eq(current);
        move(prev, 0, '-100%');

        current++;

        if(current == slide.length){current=0}

        let next = slide.eq(current);
        move(next, '100%', 0);
    }, 3000);

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, 500)
    }

    //tab
    $('.tab ul li').click(function(e){
        e.preventDefault();
        $('.tab ul li').removeClass('active');
        $(this).addClass('active');

        let i = $(this).index();

        $('.tabContents>div').hide();
        $('.tabContents>div').eq(i).show();
    });

    //popup
    $('.click').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
});