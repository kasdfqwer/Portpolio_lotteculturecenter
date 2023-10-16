window.addEventListener('scroll', () => {
    /* btnTop */
    let btnTop = document.querySelector('.btnTop'), /* button : btnTop */
        contAI = document.querySelector('.contA').offsetHeight
        wrapI = document.querySelector('#wrap').offsetHeight
    i = window.scrollY; /* 윈도우 스크롤 양 */ 
    console.log(i)
    console.log(contAI)
    console.log(wrapI)
    console.log(wrapI - contAI)
    if ( i > 0) {
      btnTop.style.display = 'block'
      if ( i > wrapI - contAI - 100) {
        btnTop.style.bottom = (i - (wrapI - contAI)) + 260 + 'px'
      } else {
        btnTop.style.bottom = 80 + 'px'
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