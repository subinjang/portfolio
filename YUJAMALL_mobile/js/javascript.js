// menu
$(function(){
    var burger = $('.menu-trigger');

    burger.each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active-' + (index + 1));
        })
    });

    var h = 0;

    $(burger).on("click", function () {
        if (h == 0) {
                $('.ham-con').animate({
                    left: '0',
                    opacity: 1
                }, 500);
                $(this).addClass('active-1');
                h++;
            } else if (h == 1) {
                $('.ham-con').animate({
                    right: '-80%',
                    opacity: 0
                }, 500);
                $(this).removeClass('active-1');
                h--;
            }
            $(window).scroll(function() {
                sct = $(window).scrollTop();
            if(sct>30){
            $('.ham-con').css({
                opacity: 0,
                right :'-20%'
            }, 500);
            $(burger).removeClass('active-1');
            h=0;
            }
        });
    })

});

// chart
$(function(){
    const ctx = document.getElementById('myChart');

    Chart.defaults.font.size = 14;
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [{
            label: '# of Votes',
            data: [760, 620, 420, 590, 440, 630, 380],
            borderWidth: 1,
            borderColor: '#e76b3f',
            pointBackgroundColor : '#fff',
            pointBorderWidth : 2,
            pointRadius : 3,
            pointHoverBorderWidth : 2,
            pointHoverRadius : 3,
        }]
        },
        options: {
            maintainAspectRatio :false,
            plugins:{
                legend: {
                    display: false
                },
            },
            scales: {
                x : {
                    grid : {
                        color : '#fff'
                    }
                },
                y : {
                    min: 0,
                    max: 1000,
                    ticks: {
                        stepSize: 200
                    }
                }
            }
        }
    });
});

// tabs
$(document).ready(function(){
  
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
});

// check
$(document).ready(function(){
  
    $('.check-group button').click(function(){
  
      $('.check-group button').removeClass('on');
  
      $(this).addClass('on');
    })
  
});

// calendat - 3개월 전
$(function(){
    const dateInput = document.getElementById('dateStart');
    
    // Using the visitor's timezone
    dateInput.value = formatDate();

    console.log(formatDate());

    function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
    }

    function formatDate(date = new Date()) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() - 2),
        padTo2Digits(date.getDate()),
    ].join('-');
    }
});

// calendar - 오늘날짜
$(function(){
    const dateInput = document.getElementById('dateEnd');
    
    // Using the visitor's timezone
    dateInput.value = formatDate();

    console.log(formatDate());

    function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
    }

    function formatDate(date = new Date()) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
    }
});

// top 버튼
$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('#back-to-top').show();
	} else{
		$('#back-to-top').hide();
	}
});
$('#back-to-top').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});
