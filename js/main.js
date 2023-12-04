window.onload = function(){
  //SWIPER
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      //슬라이드 변경시 텍스트 페이드인
      slideChangeTransitionStart: function() {
        let title = $('.swiper-slide-active .building_txt .title')
        let txt_p = $('.swiper-slide-active .building_txt>p')
        let view = $('.swiper-slide-active .building_txt div p')
        title.animate({opacity: 1},1000)
        txt_p.delay(500).animate({opacity: 1},1000)
        view.delay(1000).animate({opacity: 1},1000)
      }
    }
  });

  $(function(){
    // FULL PAGE
    $('.full_page').mousewheel(function(event, delta){
      if(delta > 0) { //마우스를 위로 굴렸다면
        let prev = $(this).prev().offset().top;
        $('html, body').stop().animate({
          scrollTop: prev
        },1500)
      } else if (delta < 0) {
        let next = $(this).next().offset().top;
        $('html, body').stop().animate({
          scrollTop: next
        }, 1500)
      }
    })
  })
  //TOP버튼 SCROLLTO
  $('.top_bt').click(function(e){
    e.preventDefault()
    $(window).scrollTo({top:0,left:0},2000)
  })
  $('.header p').click(function(e){
    e.preventDefault()
    $(window).scrollTo({top:0,left:0},2000)
  })
  

  $(window).scroll(function(){
    // // swiper 첫페이지 글자 페이드인
    if($(this).scrollTop() >= $('#building').offset().top) {
      $('.swiper01 .building_txt h2').animate({opacity: 1},1000)
      $('.swiper01 .building_txt>p').delay(500).animate({opacity: 1},1000)
      $('.swiper01 .building_txt div p').delay(1000).animate({opacity: 1},1000)
    }


    //5-7페이지 글자 슬라이드인
    if($(this).scrollTop() >= $('#page05').offset().top -0) {
      $('#page05 p').fadeIn(1500)
      $('#page05 p:nth-child(2)').animate({ right: '100vw'},1500)
      $('#page05 p:last-child').animate({ left: '100vw'},1500)
      $('#page05 .page_intro').delay(2500).fadeOut(500)
      $('#page05 .page_infor').delay(3000).fadeIn(1000)
      $('#page05 .page_infor h2').delay(3500).fadeIn(1000)
      $('#page05 .page_infor h4').delay(4000).fadeIn(1000)

    }
    if($(this).scrollTop() >= $('#page06').offset().top -300) {
      $('#page06 p').fadeIn(1500)
      $('#page06 p:first-child').animate({ left: '100vw'},1500)
      $('#page06 p:last-child').animate({ right: '100vw'},1500)
      $('#page06 .page_intro').delay(2500).fadeOut(500)
      $('#page06 .page_infor').delay(3000).fadeIn(1000)
      $('#page06 .page_infor h2').delay(3500).fadeIn(1000)
      $('#page06 .page_infor h4').delay(4000).fadeIn(1000)
    }
    if($(this).scrollTop() >= $('#page07').offset().top -300) {
      $('#page07 p').fadeIn(1500)
      $('#page07 p:first-child').animate({ left: '100vw'},1500)
      $('#page07 p:nth-child(2)').animate({ right: '100vw'},1500)
      $('#page07 .page_intro').delay(2500).fadeOut(500)
      $('#page07 .page_infor').delay(3000).fadeIn(1000)
      $('#page07 .page_infor h2').delay(3500).animate({opacity: 1},1000)
      $('#page07 .page_infor h4').delay(4000).animate({opacity: 1},1000)
    }

    if($(this).scrollTop() >= $('#page08').offset().top -5) {
      $('#page08 .meier img').fadeIn(1500)
      $('#page08 .title').animate({opacity: 1},1300)
      $('#page08 .profile').delay(1000).animate({opacity: 1},1300)
      $('#page08 .awards').delay(2000).animate({opacity: 1},1500)
      $('#page08 .top_bt img').delay(3000).fadeIn(1500)
    }
    
  })
  if(matchMedia("screen and (min-width: 769px").matches) {
    $('#page08 .meier img').attr('src','./images/MEIER1.jpg')
    $('.building_img2').mouseenter(function(){
      $('.building_img2 img').animate({opacity: 0.5},200)
      $('.bt_view').animate({opecity: 1},200)
      $('.building_img2').mouseleave(function(){
        $('.bt_view').animate({opecity: 0},200)
        $('.building_img2 img').delay(300).animate({opacity: 1},200)
      })
    })
    $('.bt_view').mouseenter(function(){
      $('.building_img2 img').animate({opacity: 0.5})
      $('.bt_view').mouseleave(function(){
        $('.bt_view').animate({opecity: 0})
      })
    })
  }

// COLORBOX
  // 주빌리교회 컬러박스
  $(".view_popup1").colorbox({
    rel:'view_popup1', 
    slideshow:true,
    maxWidth: '95%',
    title: false,
    fadeOut: 500
  });
  //게티센터 컬러박스
  $(".view_popup2").colorbox({
    rel:'view_popup2', 
    slideshow:true,
    maxWidth: '95%',
    title: false,
    fadeOut: 500
  });
  //하이뮤지엄 컬러박스
  $(".view_popup3").colorbox({
    rel:'view_popup3', 
    slideshow:true,
    maxWidth: '95%',
    title: false,
    fadeOut: 500
  });
  //옥스퍼드저택 컬러박스
  $(".view_popup4").colorbox({
    rel:'view_popup4', 
    slideshow:true,
    maxWidth: '95%',
    title: false,
    fadeOut: 500
  });

}
