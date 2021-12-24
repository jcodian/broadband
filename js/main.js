(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});


	/*=========================
	testimony-slider
	===========================*/
	$('.testimony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
	});

	/*=========================
	product-slider
	===========================*/
	$('.product-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});
	$('.gallery-item a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});


	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	var holder = $('.header-holder')	
	var megaMenu = $('.megamenu')
	
	wind.on('load', function () {
		holder.css('height', sticky.height())
		if (window.matchMedia("(max-width: 767px)").matches) {		
			megaMenu.css('height', 'calc(100vh - ' + sticky.height() + 'px)')
		}
	});
	wind.on('resize', function () {
		holder.css('height', sticky.height())
		if (window.matchMedia("(max-width: 767px)").matches) {		
			megaMenu.css('height', 'calc(100vh - ' + sticky.height() + 'px)')
		}
	});

	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	// applyLergestheight
	window.addEventListener('load',()=>{
		applyLergestheight(document.querySelectorAll('.plan-item'))
	})
	window.addEventListener('resize',()=>{
		applyLergestheight(document.querySelectorAll('.plan-item'))
	})
	function applyLergestheight(items) {
		const itemheight = []
		items.forEach(item => {
			itemheight.push(item.getBoundingClientRect().height)
		});
		items.forEach(item => {
			item.style.height = Math.max.apply(null, itemheight) + 'px'
		});
	}

	
   // niceSelect
   $("select").niceSelect();

	// skrollr activation
	var s = skrollr.init({
		forceHeight: false,
		smoothScrollingDuration: 500,
	});
	if (s.isMobile()) {
			s.destroy();
	}

	// custom tab
	tabFunc(document.querySelectorAll('.plan-link li'), document.querySelectorAll('.plan-tab'))
	tabFunc(document.querySelectorAll('.faq-link li'), document.querySelectorAll('.faq-tab'))

	function tabFunc(tabLinks, tabs) {
		tabLinks.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
					tabs[i].classList.remove('active')
				}
				link.classList.add('active')
				tabs[index].classList.add('active')
			})
		});
	}

	tabFunc2(document.querySelectorAll('.plan-mobile-link'), document.querySelectorAll('.plan-tab'))
	tabFunc2(document.querySelectorAll('.faq-mobile-link'), document.querySelectorAll('.faq-tab'))
	function tabFunc2(tabLinks, tabs) {
		tabLinks.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				if (link.classList.contains('active')) {
					for (let i = 0; i < tabLinks.length; i++) {
						tabLinks[i].classList.remove('active')
						tabs[i].classList.remove('active')
					}
				}else{
					for (let i = 0; i < tabLinks.length; i++) {
						tabLinks[i].classList.remove('active')
						tabs[i].classList.remove('active')
					}
					link.classList.add('active')
					tabs[index].classList.add('active')
				}
			})
		});
	}


	// MEGAMENU
	const humbergerBar = document.querySelectorAll('.humberger-bar')
	humbergerBar.forEach(btn => {
		let megamenu = document.querySelector('.megamenu')

		btn.addEventListener('click', ()=>{
			btn.classList.toggle('active')
			megamenu.classList.toggle('active')		
		})

		window.addEventListener('click', (e)=>{
			if (!e.target.closest('.megamenu') && !e.target.closest('.humberger-bar')) {
				megamenu.classList.remove('active')	
				btn.classList.remove('active')
			}
		})
	});



	
})(jQuery);