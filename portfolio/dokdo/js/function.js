
$(document).ready(function(){

    const $aside = $("aside");
    const $header = $("header");
    const $mnu = $('header>nav>.gnb>li>a');
    const $indicator = $('section#home > .slides > .slides-pagination > li > a');
    let idx = 0;
    let arrTopVal = [];

    function pageAni(topVal){
        $('html, body').stop().animate({scrollTop:topVal});
    }

    $(window).on('load resize', function(){
        
        $("#home").height($(window).height());
        
        console.log("현재 메뉴의 개수 : "+$mnu.size());
        
        for(let i=0;i<$mnu.size();i++){
            arrTopVal[i] = $("section").eq(i).offset().top;
        }
    });
    
    console.log(arrTopVal);

    $mnu.on('click', function(evt){
        idx = $mnu.index(this);
        pageAni(arrTopVal[idx]);
        evt.preventDefault();
    });

    $(window).on('scroll', function(){

        let scrollTop = $(this).scrollTop();

        if(scrollTop>150){
            $aside.fadeIn();
        }else{
            $aside.fadeOut();
        }

        if(scrollTop>$(this).height()){
            $header.addClass('h-fixed');
        }else{
            $header.removeClass('h-fixed');
        }

        // 메뉴 활성화 표시
        for(let i=0;i<$mnu.size();i++){
            if(scrollTop>=arrTopVal[i]){
                $mnu.eq(i).parent().addClass('on');
                $mnu.eq(i).parent().siblings().removeClass('on');
            }else if(scrollTop<arrTopVal[0]){
                $mnu.parent().removeClass('on');
            }
        }

    });

    //로고에 대한 클릭이벤트 구문
    $(".logo, aside").on('click', function(evt){
        evt.preventDefault();
        pageAni(0);
    });

    $(window).on('load', function(){
        pageAni(0);
    });

    // 인디케이터에 대한 클릭이벤트 구문
    $indicator.on('click', function(){
     idx = $indicator.index(this);
     console.log(idx);
     
     $indicator.eq(idx).parent().addClass('on').siblings().removeClass('on');
     
    if (idx < 5) {
    idx++;
    } else {
    idx = 0;
    };

    console.log('num=' + idx);

    // $('section#home > .slides > .slides-container > li > img').attr('src', "images/bg_home_" + idx + ".jpg").animate();
    $('#imgDokdo').attr('src', "images/bg_home_" + idx + ".jpg");

 });

 $('section#news > .more').on('click', function(evt){
    evt.preventDefault();
 });

 $('section#photo > .photo-gallery > span > a').on('click', function(evt){
    evt.preventDefault();
 });

 $('section#news > .news-1 > span > a').on('click', function(evt){
    evt.preventDefault();
 });

 $('section#news > .news-2 > span > a').on('click', function(evt){
    evt.preventDefault();
 });

});