$(function(){
    //slider
    $('.slider ul li:gt(0)').hide(); //great than? 0보다 큰 애들 하이드

    setInterval(function(){
        $('.slider ul li:first-child').fadeOut().next('li').fadeIn().end().appendTo('.slider ul');
    }, 3000);

    //popup
    $('.click').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
})