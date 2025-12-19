$(function(){

    // 변수선언
    let now = 0

    // 전체 슬라이드 이미지 숨기기
    $('.slide li').hide()
    // 지금 슬라이드 보이기
    $('.slide li').eq(now).show()
    
    // 상단 슬라이드 3초마다 페이드아웃-인
    setInterval(function(){
        
        if(now<2){

            $('.slide li').eq(now).fadeOut()
            $('.slide li').eq(now+1).fadeIn()

            now=now+1

        }else{

            $('.slide li').eq(now).fadeOut()
            $('.slide li').eq(0).fadeIn()

            now=0

        }

    },3000) /* 상단슬라이드 끝. */

    // 탭 선택
    $('.tab h2').click(function(){
        $('.tab section').removeClass('on')
        $(this).parent().addClass('on')
    })


    // 배너 슬라이드

    let now2 = 1
    
    setInterval(function(){

        if(now2<3){

            $('.sec-bnr ul').animate({
                top : ((-1)*now2*100)+"%"
            })
            now2=now2+1

        }else{

            $('.sec-bnr ul').animate({
                top : '0'
            })

            now2=1

        }

    },3000)
    
    // 모달창 열기
    $('.sec-bbs li:first-child').click(function(){
        $('#modal').show()
    })
    
    // 모달창 닫기
    $('#modal input').click(function(){
        $('#modal').hide()
    })


})  /* 준비이벤트 끝 */