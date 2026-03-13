$(function(){
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
    }, 3000);

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, 500)
    }

    //tab
    $('.tab li').click(function(e){
        e.preventDefault();
        $('.tab li').removeClass('active');
        $(this).addClass('active');

        let i = $(this).index();

        $('.tabContent>div').hide();
        $('.tabContent>div').eq(i).show();
    });
    
    //popup
    $('.click').click(function(e){
        e.preventDefault();
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
});