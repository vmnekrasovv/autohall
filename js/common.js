$(document).ready(function() {

	var waypoint = new Waypoint({
	  element: document.getElementById('thing'),
	  handler: function(direction) {
	  	let
			topLine 	  = $('.header__top-line'),
			topLineFix    = 'header__top-line_fixed';

			if(direction == 'down') {
				topLine.addClass(topLineFix);
			} else if(direction == 'up'){
				topLine.removeClass(topLineFix);
				
				/*topLine.addClass('header__top-line_up');
				topLine.removeClass('header__top-line_up');*/
			}
		}
	});


	/*$('.home-items').on('mousewheel', function(event) {
   	 console.log(event.deltaX, event.deltaY, event.deltaFactor);
	});*/


	$('.main-cats__item-wrap').click(function(){
		$(this).siblings().removeClass('active').find('ul').hide();
		$(this).addClass('active').find('ul').toggle();
	});

	
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));


	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	
	Fancybox.bind("[data-fancybox]", {
  		// Your custom options
	});

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});


	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// $.fancybox.close(); // из старой версии фанси
			}, 1000);
		});
		return false;
	});
	
});

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

$('.parallax-window').parallax({
	imageSrc: 'img/optimize/header_bg.webp',
	speed: .7,
});