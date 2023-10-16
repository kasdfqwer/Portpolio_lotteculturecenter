window.addEventListener('scroll', () => {
    /* btnTop */
    let btnTop = document.querySelector('.btnTop'), /* button : btnTop */
        contATop = document.querySelector('.tab-mapArea').offsetTop
    i = window.scrollY; /* 윈도우 스크롤 양 */ 
    console.log(i)
    console.log(contATop)
    if ( i > 0) {
      btnTop.style.display = 'block'
      if ( i  > contATop - 140) {
        btnTop.style.bottom = i - contATop + 200 + 'px'
      } else {
        btnTop.style.bottom = 60 + 'px'
      }
    } else if ( i <= 0) {
      btnTop.style.display = 'none'
    }
    /* btnTop 활성화 */
    btnTop.addEventListener('click', (e)=> {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'})
    })
})

/* 탭 기눙 */
$(function() {
  let tab = $('.topFilter a');

  tab.on('click', function() {
    let idx = $(this).index();
    let tabImg = $('.tab-imgArea').children().eq(idx)
    let tabAddress = $('.tab-address').children().eq(idx)
    let tabMap = $('.tab-mapW').children().eq(idx)

    $(this).addClass('on').siblings().removeClass('on')
    tabImg.addClass('on').siblings().removeClass('on')
    tabAddress.addClass('on').siblings().removeClass('on')
    tabMap.addClass('on').siblings().removeClass('on')
  })
})