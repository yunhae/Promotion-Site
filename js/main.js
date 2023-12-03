window.onload = function(){
  
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

  $(window).scroll(function(){
    // 1-4페이지 글자 페이드인
    if($(this).scrollTop() >= $('#page01').offset().top -3) {
      $('#page01 .title').fadeIn(1300)
      $('#page01 p').animate({opacity: 1},2000)
      $('#page01 .bt_view').delay(400).animate({opacity: 1},1300)
    } else {
      // $('#page01').children().fadeOut(500)
    }
    if($(this).scrollTop() >= $('#page02').offset().top -3) {
      $('#page02 .title').fadeIn(1300)
      $('#page02 p').animate({opacity: 1},2000)
      $('#page02 .bt_view').delay(400).animate({opacity: 1},1300)
    } 
    if($(this).scrollTop() >= $('#page03').offset().top -3) {
      $('#page03 .title').fadeIn(1300)
      $('#page03 p').animate({opacity: 1},2000)
      $('#page03 .bt_view').delay(400).animate({opacity: 1},1300)
      
    }
    if($(this).scrollTop() >= $('#page04').offset().top -3) {
      $('#page04 .title').fadeIn(1300)
      $('#page04 p').animate({opacity: 1},2000)
      $('#page04 .bt_view').delay(400).animate({opacity: 1},1300)
    } 

    //5-7페이지 글자 슬라이드인
    if($(this).scrollTop() >= $('#page05').offset().top -2) {
      $('#page05 p:first-child').animate({ left: '0'},3000)
      $('#page05 p:nth-child(2)').animate({ right: '0'},3000).animate({ right: '0'},1000).animate({ right: '100vw'},1500).animate({ right: '100vw'},3000)
      $('#page05 p:last-child').animate({ left: '0'},3000).animate({ left: '0'},1000).animate({ left: '100vw'},1500).animate({ left: '100vw'},3000)
      $('#page05 .page_intro').delay(5000).fadeOut(1000)
      $('#page05 .page_infor').delay(6000).fadeIn(500)
      $('#page05 .page_infor h2').delay(5500).fadeIn(1000)
      $('#page05 .page_infor h4').delay(6000).fadeIn(1000)
      
    }
    if($(this).scrollTop() >= $('#page06').offset().top -2) {
      $('#page06 p:first-child').animate({ left: '0'},3000).animate({ left: '0'},1000).animate({ left: '-100vw'},1500).animate({ left: '-100vw'},3000)
      $('#page06 p:nth-child(2)').animate({ right: '0'},3000)
      $('#page06 p:last-child').animate({ left: '0'},3000).animate({ left: '0'},1000).animate({ left: '100vw'},1500).animate({ left: '100vw'},3000)
      $('#page06 .page_intro').delay(5000).fadeOut(1000)
      $('#page06 .page_infor').delay(6000).fadeIn(500)
      $('#page06 .page_infor h2').delay(5500).fadeIn(1000)
      $('#page06 .page_infor h4').delay(6500).fadeIn(1000)
    }
    if($(this).scrollTop() >= $('#page07').offset().top -2) {
      $('#page07 p:first-child').animate({ left: '0'},3000).animate({ left: '0'},1000).animate({ left: '-100vw'},1500).animate({ left: '-100vw'},3000)
      $('#page07 p:nth-child(2)').animate({ right: '0'},3000).animate({ left: '0'},1000).animate({ left: '100vw'},1500).animate({ left: '100vw'},3000)
      $('#page07 p:last-child').animate({ left: '0'},3000)
      $('#page07 .page_intro').delay(5000).fadeOut(1000)
      $('#page07 .page_infor').delay(6000).fadeIn(500)
      $('#page07 .page_infor h2').delay(5500).animate({opacity: 1},1000)
      $('#page07 .page_infor h4').delay(6500).animate({opacity: 1},1000)
    }

    if($(this).scrollTop() >= $('#page08').offset().top -2) {
      $('#page08 .meier img').fadeIn(1500)
      $('#page08 .title').animate({opacity: 1},1300)
      $('#page08 .profile').delay(1000).animate({opacity: 1},1300)
      $('#page08 .awards').delay(2000).animate({opacity: 1},1500)
      $('#page08 .top_bt img').delay(3000).fadeIn(1500)
    }
    
  })
  if(matchMedia("screen and (min-width: 769px").matches) {
    $('#page08 .meier img').attr('src','./images/MEIER1.jpg')
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
