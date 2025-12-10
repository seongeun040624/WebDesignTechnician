$(function(){
    $('#nav>ul>li').hover(function(){
        //$('#nav>ul>li>ul').stop().slideDown(); //마우스를 올렷을 때
        $(this).find('ul').stop().slideDown();
    },function(){
        //$('#nav>ul>li>ul').stop().slideUp(); //마우스가 떨어졋을 때
         $(this).find('ul').stop().slideUp();
    });
});


//()는 조건문, {}는 실행문, []는 배열에 사용


//mainslider영역
/* $(function(){
    let slideCount = $('#mainslider ul li').length; //3개 length > 개수
    let currentIndex = 0; //현재 슬라이드 인덱스/ 숫자를 0,1,2 순서로 세기 때문에 0 입력

    function slideMove(){
        currentIndex++; //하나씩 증가
        if(currentIndex==slideCount){ //current~와 slide~가 값이 같으면
            currentIndex=0; // current~를 0으로 다시 되돌림
        }
        let moveY = -currentIndex*300+"px"; //-300 -600
        $('#mainslider ul').animate({top:moveY}, 500);
    }
    setInterval(slideMove, 3000)
}); */


$(function () {

    let $slider = $("#mainslider ul");
    let $slides = $("#mainslider ul li");
    let slideHeight = 300;
    let slideCount = $slides.length;
    let index = 0;

    // **첫번째 슬라이드를 복제해서 마지막에 추가**
    $slider.append($slides.eq(0).clone()); // 0,1,2 다음에 밑에 다시 0이 복제되어 들어옴

    function moveSlide() {
        index++;

        $slider.animate({ top: -index * slideHeight + "px" }, 600, function () {

            // 마지막(복제본)까지 왔다면
            if (index === slideCount) {
                $slider.css("top", "0px");  // 순간적으로 원위치
                index = 0;                  // 다시 첫 슬라이드부터 시작
            }
        });
    }

    setInterval(moveSlide, 3000);


    //탭기능
    $('.tabs ul li').click(function(e){
        e.preventDefault();
        $('.tabs ul li').removeClass("active");
        $(this).addClass("active");

        let i = $(this).index();
        //console.log(i)

        $('.tabContent>div').hide();
        $('.tabContent>div').eq(i).show();
    });


    //팝업창
    $('.popup').click(function(){
        $('.modal').show();
    });
    $('.close').click(function(){
        $('.modal').hide();
    });


});
