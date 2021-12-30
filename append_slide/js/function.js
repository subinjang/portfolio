$(function(){
  /*
  시작하자마자 몇초가 지나면 두번째 슬라이드가 왼쪽으로 이동한다.
  이동이 끝나면 첫번째 슬라이드를 맨마지막으로 이동시킨다.
  이 과정을 setInterval()로 반복한다.
  */
  setInterval(function(){
      
    const $container = $('.slides-container');
    const $slides = $('.slides li');          
    const $first = $slides.eq(0);
    const $second = $slides.eq(1);

    $second.animate({left:0},1000,function(){

      $first.css({left:700});
      $first.appendTo($container);
    });

  },2000);

})