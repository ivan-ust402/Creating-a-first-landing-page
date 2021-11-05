var btn = document.getElementById('btn');
var counterVal = 0;

btn.onclick = function () {
    ++counterVal;
    if (counterVal == 1) {
        document.querySelector(".intro").innerHTML = "Вы можете создавать такие же лэндинги, пройдя курсы от команды WayUp";
        var button = document.querySelector('.btn')
        button.classList.add('green');
        document.getElementById('btn').innerHTML = "На сайт WAYUP";
    }
    if (counterVal == 2) {
        document.getElementById('btn').setAttribute("href","https://wayup.in/")
    }
    
}

$(function() {
	// $(window).scroll(function() {
	// 	$('#logo').each(function() {
	// 		var imagePos = $(this).offset().top

	// 		var topOfWindow = $(window).scrollTop()
	// 		if (imagePos < topOfWindow+650) {
	// 			$(this).addClass('animate__animated animate__fadeInDown')
	// 		}
	// 	})
	// })

	// $(window).scroll(function() {
	// 	$('.getFreeTime').each(function() {
	// 		var imagePos = $(this).offset().top

	// 		var topOfWindow = $(window).scrollTop()
	// 		if (imagePos < topOfWindow+650) {
	// 			$(this).addClass('fadeInLeft')
	// 		}
	// 	})
	// })

	// $(window).scroll(function() {
	// 	$('.getTrip').each(function() {
	// 		var imagePos = $(this).offset().top

	// 		var topOfWindow = $(window).scrollTop()
	// 		if (imagePos < topOfWindow+650) {
	// 			$(this).addClass('fadeInUp')
	// 		}
	// 	})
	// })

	// $(window).scroll(function() {
	// 	$('.getWorth').each(function() {
	// 		var imagePos = $(this).offset().top

	// 		var topOfWindow = $(window).scrollTop()
	// 		if (imagePos < topOfWindow+650) {
	// 			$(this).addClass('fadeInRight')
	// 		}
	// 	})
	// })

	// $(window).scroll(function() {
	// 	$('#ticketToTheFuture .section-title').each(function() {
	// 		var imagePos = $(this).offset().top

	// 		var topOfWindow = $(window).scrollTop()
	// 		if (imagePos < topOfWindow+650) {
	// 			$(this).addClass('fadeInDown')
	// 		}
	// 	})
	// })

	// $(window).scroll(function() {
	// 	$('.form').each(function() {
	// 		var imagePos = $(this).offset().top

	// 		var topOfWindow = $(window).scrollTop()
	// 		if (imagePos < topOfWindow+650) {
	// 			$(this).addClass('fadeInDown')
	// 		}
	// 	})
	// })

})
