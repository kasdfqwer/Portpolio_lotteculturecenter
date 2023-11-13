$(function() {
    /* 검색창 */
    $('.search').click(function() {
        $('.searchArea').slideDown();
        $('.black').css('display', 'block');
        $('body').css('overflow', 'hidden');
    })
    $('.btnClose').click(function() {
        $('.searchArea').slideUp();
        $('.black').css('display', 'none');
        $('body').css('overflow', 'inherit');
    })

    /* 서브메뉴 */
    let tab = $('header .menu > li');
    let subMenu = $('.subMenu');

    let subLi = $('.subList > li');
    let imgBox = $('.imgArea');

    tab.on('mouseover', function() {
        $('header').css('background', '#fff');
        let idx = $(this).index();
        let subMenuList = subMenu.children('.subBox').eq(idx);
        subMenu.stop().slideDown();
        subMenuList.addClass('on').find('li').on('mouseover', function() {
          $(this).siblings().addClass('opacity').on('mouseover', function() {
            $(this).removeClass('opacity').siblings().addClass('opacity');
          })
        

          let idxx = $(this).index();
          let imgList = $(this).parent('.subList').siblings(imgBox).children('img').eq(idxx);

          imgList.css('display', 'block',);
          imgList.siblings().css('display', 'none');
        })
        subMenuList.siblings().removeClass('on');
    })
    subMenu.on('mouseleave', function() {
        subMenu.stop().slideUp(function() {
          $('header').css('background', '');
        })
    })

    /* 메인메뉴 */
    let lastScrollTop = 0;
    const delta = 15;
  
    $(window).scroll(function(event) {
      const st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta) return;
      if((st > lastScrollTop) && (lastScrollTop > 5)) {
        $('header nav').addClass('up')
      } else {
        $('header nav').removeClass('up').addClass('upIng')
        if (st <= 20) {
          $('header nav').removeClass('upIng')
        }
      };
      lastScrollTop = st;
    })



    /* 카테고리 */
    $('.btnOpen').on('click', function() {
        $('btnOpen > span').removeClass('btnTitle')
        $('btnOpen > span').addClass('btnTitleRotate')
      })

      let btnOpen = $('.btnOpen')
      let listBox = $('.listBox')
      btnOpen.on('click', function() {
        $(this).toggleClass('rotate')
        listBox.slideToggle()
      })

      /* affiliateList */
      $('.link > a').on('mouseover', function() {
        $(this).parent().siblings().addClass('opacity')
        $(this).parent().removeClass('opacity')
       })
       $('.link > a').on('mouseleave', function() {
         $('.link').removeClass('opacity')
       })

       /* 강좌검색 */
       $('.searchClass').on('click', function() {
        let searchType = $('.search-type > h2'),
            typeArea = $('.typeArea'),
            imgArea = $('.imgArea'),
            listP = $('.listW > p'),
            searchClose = $('.class-search .btnClose');
    
        $('.class-search').fadeIn('100');
        searchType.on('mouseover', function() {
          let idx = $(this).index();
          let typeAreaIdx = typeArea.children('.typeW').eq(idx);
          let imgAreaIdx = imgArea.children('.imgW').eq(idx);
          $(this).addClass('bold').siblings().removeClass('bold');
          typeAreaIdx.addClass('flex').siblings().removeClass('flex');
          imgAreaIdx.addClass('on').siblings().removeClass('on');
    
          listP.on('mouseover', function() {
            $(this).removeClass('light').siblings().addClass('light');
            $(this).parent().parent().siblings().children('div').children('p').addClass('light');
            $(this).on('mouseleave', function() {
              $(this).siblings().removeClass('light');
              $(this).parent().parent().siblings().children('div').children('p').removeClass('light');
            })
          })
        })
        searchClose.on('click', function() {
          $('.class-search').fadeOut('100');
        })
    })
})

/*  affiliateList  */
  let relevantOpen = document.querySelector('.relevantSite'),
    affiliateList = document.querySelector('.affiliateList'),
    relevantClose = document.querySelector('.btnClose_affiliate');

  relevantOpen.addEventListener('click', (e) => {
      e.preventDefault();
    affiliateList.style.display = 'flex'
  })
  relevantClose.addEventListener('click', (e) => {
    e.preventDefault();
    affiliateList.style.display = 'none'
  })