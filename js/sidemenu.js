$(function() {
    let snb_nav = $('.sub > ul > li');

    snb_nav.on('mouseover focusin', function() {
        let y = $(this).offset().top; //.offset() 요소 - 위치값, 여기서는 top의 위치

        $(this).find('.snb > ul').css('top', y - 13);
        $(this).siblings('ul').children('.sub').removeAttr('style'); 
        //경우의 수를 막기 위한 레이아웃 변형 방지
        $(this).siblings('li').removeClass('on');
        $(this).addClass('on')
    });

    sub_nav.on('mouseleave', function() {
        $(this).removeClass('on');
    })
});