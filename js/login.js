
window.addEventListener('scroll', () => {
    /* btnTop */
    let btnTop = document.querySelector('.btnTop'), /* button : btnTop */
    i = window.scrollY; /* 윈도우 스크롤 양 */ 
    if ( i > 0) {
      btnTop.style.display = 'block'
      btnTop.style.bottom = i + 80 + 'px'
    } else if ( i <= 0) {
      btnTop.style.display = 'none'
    }
    /* btnTop 활성화 */
    btnTop.addEventListener('click', (e)=> {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'})
    })
})

/* 로그인 영역 */
let loginDelete = document.querySelector('.loginDelete')
let pwdDelete = document.querySelector('.pwdDelete')
let loginInput = document.querySelector('.loginInput')
let pwdInput = document.querySelector('.pwdInput')

loginInput.addEventListener('keyup', ()=> {
  if (loginInput.value == '') {
    loginDelete.style.display = 'none'
  } else if (loginInput.value !== '') {
    loginDelete.style.display = 'inline-block'
    loginDelete.addEventListener('click', ()=> {
      loginDelete.style.display = 'none'
      loginInput.value = null
    })
  }
})
pwdInput.addEventListener('keyup', ()=> {
  if (pwdInput.value == '') {
    pwdDelete.style.display = 'none'
  } else if (pwdInput.value !== '') {
    pwdDelete.style.display = 'inline-block'
    pwdDelete.addEventListener('click', ()=> {
      pwdDelete.style.display = 'none'
      pwdInput.value = null
    })
  }
})
$(function() {
  $('.Input-wrap').children('input').on('focus', function() {
    $(this).parent().addClass('focus')
  })
  $('.Input-wrap').children('input').on('focusout', function() {
    $(this).parent().removeClass('focus')
  })
  
})


/* 카카오로그인 */
/* e4308e1d0e274f1b882fab2e5f95a599 */
window.Kakao.init("e4308e1d0e274f1b882fab2e5f95a599");
  function kakaoLogin() {
      window.Kakao.Auth.loginForm ({
          scope: 'profile_nickname, profile_image, account_email, gender',
          success: function(authObj) {
              //console.log(authObj)
              window.kakao.API.request({
                  url: '/v2/user/me',
                  success: res => {
                      const kakao_account = res.kakao_account;
                      //console.log(kakao_account)
                  }
              })
          }
      })
  }