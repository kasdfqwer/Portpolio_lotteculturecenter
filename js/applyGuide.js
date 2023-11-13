window.addEventListener('scroll', () => {
    /* btnTop */
    let btnTop = document.querySelector('.btnTop'), /* button : btnTop */
        contATop = document.querySelector('.contArea').offsetTop
    i = window.scrollY; /* 윈도우 스크롤 양 */ 
    //console.log(i)
    //console.log(contATop)
    if ( i > 0) {
      btnTop.style.display = 'block'
      if ( i + 150 > contATop) {
        btnTop.style.bottom = i - contATop + 250 + 'px'
      } else {
        btnTop.style.bottom = '40px'
      }
    } else {
      btnTop.style.display = 'none'
    }
    /* btnTop 활성화 */
    btnTop.addEventListener('click', (e)=> {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'})
    })
})

/* 아코디언 */
$(function() {
  $('.list').on('click', function() {
      $(this).next('.hideContW').stop().slideToggle('swing');
      $(this).parent().toggleClass('on')     
  })
})