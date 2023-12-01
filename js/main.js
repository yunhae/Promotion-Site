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

  $('.full_page h1').mouseenter(function(){
    $(this).css('color','yellow')
  })

}
