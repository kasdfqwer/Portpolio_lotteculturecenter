/* swiper */
var swiper = new Swiper(".mainSlide .swiper-container", {
    autoplay:
    {
        delay: 2500,
        disableOnInteraction: false,
        loop: true,
        loopAdditionalSlides: 1
      },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".slideBox1 > .swiper-container", {

    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".slideBox2 > .swiper-container", {

    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const progressLine = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var Eventswiper = new Swiper(".eventSlide", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 650,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".all-box .progres-box .swiper-pagination",
    clickable: true,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return (
          '<span class="current">' + (current) + '</span>' + '<span class="total">' + (total) + '</span>'
      );
  }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressLine.style.setProperty("--progress", 1 - progress);
    }
  }
});

$(function() {
  $('.swiperbtn').on('click', function() {
    //console.log('asdf')
    if ($(this).hasClass('pause') == true) {
      Eventswiper.autoplay.stop();
      $(this).removeClass('pause').addClass('play')
    } else if ($(this).hasClass('play') == true) {
      $(this).removeClass('play').addClass('pause')
      Eventswiper.autoplay.start();
    }
  })
})



window.addEventListener('scroll', () => {
      let mainCategoryLeftTop = document.querySelector('.mainCategory').offsetTop, /* 메인카테고리 높이 값 */
      mainCategoryLeft = document.querySelector('.mainCategory'), /* 메인카테고리 변수 저장 */
      i = window.scrollY; /* 윈도우 스크롤 양 */
      if ( i > mainCategoryLeftTop) {
        mainCategoryLeft.style.position = 'sticky'
      }

      /* btnTop */
      let btnTop = document.querySelector('.btnTop') /* button : btnTop */

      let newsAreaBottom = document.querySelector('.newsContents').offsetTop - 600
      //console.log(newsAreaBottom)
      //console.log(i)
      if ( i > 0) {
        btnTop.style.display = 'block'
        if ( i > newsAreaBottom) {
          btnTop.style.bottom = i - newsAreaBottom + 'px'
        } else if ( i < newsAreaBottom) {
          btnTop.style.bottom = '40px'
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





