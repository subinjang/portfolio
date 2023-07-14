// menu
$(document).ready(function(){
  
    $('.sidebar-menu > .menu-item > a').click(function(){
        
        if($(this).hasClass('on')){

            $('.sidebar-menu > .menu-item > a').removeClass('on').siblings('ol').slideUp();
        } else {
            
            $('.sidebar-menu > .menu-item > a').removeClass('on');
            $(this).addClass('on').siblings('ol').slideDown();
        }
    })
});

$(document).ready(function(){
  
    $('.ham-btn').click(function(){

        if($(this).hasClass('on')){

            $('.ham-btn').removeClass('on').closest('.sidebar').removeClass('is-compact');
        } else {

            $('.ham-btn').removeClass('on');
            $(this).addClass('on').closest('.sidebar').addClass('is-compact');
        }
    })
});
 
// ft select
$(function(){
    const btn = document.querySelector('.btn-select');
    const list = document.querySelector('.option-list');
    btn.addEventListener('click', () => {
        btn.classList.toggle('on');
    });
    list.addEventListener('click', (event) => {
        if (event.target.nodeName === "BUTTON") {
            btn.innerText = event.target.innerText;
            btn.classList.remove('on');
        }
    });
});