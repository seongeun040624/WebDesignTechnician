$(function(){
    //메뉴
    $('#nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });


    //슬라이드

    $('.imgslider li:gt(0)').hide();
    setInterval(function(){
        $('.imgslider li:first-child').fadeOut().next('li').fadeIn().end().appendTo('.imgslider ul')
    },3000);


    //tab
    $('.tabs>ul>li').click(function(e){
        e.preventDefault();
        $('.tabs>ul>li').removeClass('active');
        $(this).addClass('active');

        let i = $(this).index();
        $('.tabContent>div').hide();
        $('.tabContent>div').eq(i).show();
    });


    //popup
    $('.click').click(function(e){
        e.preventDefault();
        $('.modalWrap').show();
    });
    $('.close').click(function(){
        $('.modalWrap').hide();

    });
     
});