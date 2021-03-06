(function($) {
	"use strict";

	//Color-Theme
	$(document).on("click", "a[data-theme]", function() {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	
	// ______________Full screen
	$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})
	
	// ______________ PAGE LOADING
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})
	
	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$(document).on("click", "#back-to-top", function(e) {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	
	// ______________ COVER IMAGE
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});
	
	// ______________ RATING STAR
	// var ratingOptions = {
	// 	selectors: {
	// 		starsSelector: '.rating-stars',
	// 		starSelector: '.rating-star',
	// 		starActiveClass: 'is--active',
	// 		starHoverClass: 'is--hover',
	// 		starNoHoverClass: 'is--no-hover',
	// 		targetFormElementSelector: '.rating-value'
	// 	}
	// };
	// $(".rating-stars").ratingStars(ratingOptions);
	
	// ______________ mCustomScrollbar
	$(".vscroll").mCustomScrollbar();
	$(".app-sidebar").mCustomScrollbar({
		theme:"minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	$(".sidebar-right1").mCustomScrollbar({
		theme:"minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	
	$(".sidebar-right").mCustomScrollbar({
		theme:"minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	
	$(".notifications-menu").mCustomScrollbar({
		theme:"minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	$(".message-menu").mCustomScrollbar({
		theme:"minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	$(".highlight").mCustomScrollbar({
		theme:"minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	
	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(119, 119, 142, 0.2)',
				lineCap: 'round'
			});
		});
	}

	// ______________ CARD
	const DIV_CARD = 'div.card';
	
	// ______________ TOOLTIP
	$('[data-toggle="tooltip"]').tooltip();
	
	// ______________ POPOVER
	$('[data-toggle="popover"]').popover({
		html: true
	});
	
	// ______________ FUNCTION FOR REMOVE CARD
	$(document).on('click', '[data-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});
	
	
	// ______________ FUNCTIONS FOR COLLAPSED CARD
	$(document).on('click', '[data-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	// ______________ CARD FULL SCREEN
	$(document).on('click', '[data-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	// ______________Active Class
	$(".app-sidebar a").each(function() {
	  var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) { 
			$(this).addClass("active");
			$(this).parent().addClass("active"); // add active to li of the current link
			$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
			$(this).parent().parent().prev().click(); // click the item to make it drop
		}
	});

	/*----BarChartEchart----*/
	var financeChart = document.getElementById('finance-chart');
	if (financeChart) {
		var echartBar = echarts.init(financeChart, {
			color: ['#0774f8', '#d43f8d'],
			categoryAxis: {
				axisLine: {
					lineStyle: {
						color: '#77778e'
					}
				},
				splitLine: {
					lineStyle: {
						color: ['rgba(119, 119, 142, 0.2)']
					}
				}
			},
			grid: {
				x: 40,
				y: 20,
				x2: 40,
				y2: 20
			},
			valueAxis: {
				axisLine: {
					lineStyle: {
						color: '#77778e'
					}
				},
				splitArea: {
					show: false,
					areaStyle: {
						color: ['rgba(255,255,255,0.1)']
					}
				},
				splitLine: {
					lineStyle: {
						color: ['rgba(119, 119, 142, 0.2)']
					}
				}
			},
		});
		echartBar.setOption({
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['Revenue', 'Expenses']
			},
			toolbox: {
				show: false
			},
			calculable: false,
			xAxis: [{
				type: 'category',
				data: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: '',
				type: 'bar',
				data: [30.0, 42.3, 60.2, 70.3, 60.8, 19.8, 27.8, 85.63, 52.63, 14.25, 63.25, 12.32],
				markPoint: {
					data: [{
						type: 'max',
						name: ''
					}, {
						type: 'min',
						name: ''
					}]
				},
				markLine: {
					data: [{
						type: 'average',
						name: ''
					}]
				}
			}, {
				name: ' Expenses',
				type: 'bar',
				data: [16.6, 40.9, 50.0, 16.4, 28.7, 80.7, 178.6, 188.2, 48.7, 18.8, 6.0, 2.3],
				markPoint: {
					data: [{
						name: 'Purchased Price',
						value: 182.2,
						xAxis: 7,
						yAxis: 183,
					}, {
						name: 'Purchased Price',
						value: 2.3,
						xAxis: 11,
						yAxis: 3
					}]
				},
				markLine: {
					data: [{
						type: 'average',
						name: ''
					}]
				}
			}]
		});
	}

	/*----set-amount----*/
	(() => {
		const $parent = $('.set-amount');

		if (!$parent.length) return;

		$parent.each(function() {
			const $input = $(this).find('.amount-input');
			const $btnLess = $(this).find('.btn-less');
			const $btnMore = $(this).find('.btn-more');

			$input.on('change keyup input click', checkValue);

			$btnLess.on('click', () => increment($input));

			$btnMore.on('click', () => decrement($input));
		});

		function increment($el) {
			let count = parseInt($el.val()) - 1;
			count = count < 1 ? 0 : count;
			$el.val(count);
		}

		function decrement($el) {
			$el.val(parseInt($el.val()) + 1);
		}

		function checkValue(e) {
			if (e.target.value.match(/[^0-9]/g)) {
				e.target.value = e.target.value.replace(/[^0-9]/g, '');
			}
		}
	})();

	/*----disabled links----*/
	(() => {
		const $links = $('[data-disabled-link]');

		$links.on('click', e => e.preventDefault());
	})();
	
	// ______________ Styles ______________//
	
	
	//$('body').addClass('transparent-mode');//
	
	//$('body').addClass('sidemenu-bgimage');//
	
	//$('body').addClass('color-menu');//
	
	//$('body').addClass('light-menu');//
	
	//$('body').addClass('dark-menu');//
	
	//$('body').addClass('gradient-menu');//
	
	//$('body').addClass('light-hor-header');//
	
	//$('body').addClass('color-hor-header');//
	
	//$('body').addClass('gradient-hor-header');//
	
	//$('body').addClass('color-hor-menu');//
	
	//$('body').addClass('light-hor-menu');//
	
	//$('body').addClass('gradient-hor-menu');//
	
	//$('body').addClass('dark-hor-menu');//
	
})(jQuery);
