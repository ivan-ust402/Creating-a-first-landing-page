var btn = document.getElementById('btn');
var counterVal = 0;

btn.onclick = function () {
    ++counterVal;
    if (counterVal == 1) {
        document.querySelector(".intro").innerHTML = "Вы можете создавать такие же лэндинги, пройдя курс от команды WayUp";
        var button = document.querySelector('.btn')
        button.classList.add('green');
        document.getElementById('btn').innerHTML = "На сайт WAYUP";
    }
    if (counterVal == 2) {
        document.getElementById('btn').setAttribute("href","https://wayup.in/")
    }
    
}

$(function() {
	$(window).scroll(function() {
		$('#learn .section-title').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 450) {  //по дефолту было 650
				$(this).addClass('animate__fadeInDown')
			}
		})
	})

    $(window).scroll(function() {
		$('.skill-knowledge').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 500) {
				$(this).addClass('animate__fadeInLeft')
			}
		})
	})

    $(window).scroll(function() {
		$('.skill-free').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 500) {
				$(this).addClass('animate__fadeInUp')
			}
		})
	})

    $(window).scroll(function() {
		$('.skill-change').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 500) {
				$(this).addClass('animate__fadeInRight')
			}
		})
	})

    $(window).scroll(function() {
		$('#mail .section-title').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 650) {
				$(this).addClass('animate__fadeInDown')
			}
		})
	})

    $(window).scroll(function() {
		$('.input').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 650) {
				$(this).addClass('animate__fadeInLeft')
			}
		})
	})

    $(window).scroll(function() {
		$('.btn-form').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 650) {
				$(this).addClass('animate__fadeInRight')
			}
		})
	})

    $(window).scroll(function() {
		$('.credits').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 850) {
				$(this).addClass('animate__fadeIn')
			}
		})
	})

})
