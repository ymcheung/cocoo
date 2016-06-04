$(document).foundation();

// var email_input = document.getElementsByClassName('to__subscribe');
// var ob_cursor = document.getElementsByClassName('is__cursor');

var header_nav = new ScrollMagic.Controller();

// Document Ready
document.addEventListener('DOMContentLoaded', function() 
{

	var tl_header = new TimelineLite()
			.from("header", .75, {y: -100})
			.to("header", .75, {opacity: 1}, '-=.75');

	

	// email_input.focus = function()
	// {
	// 	// console.log('test');
	// 	ob_cursor.className += 'paused';
	// }

if (document.documentElement.clientWidth > 640) 
	{
		// ScrollMagic參數設定 (scene_header)
		var scene_header = new ScrollMagic.Scene
		({
			triggerElement: ".is__current",
			triggerHook: 0.1,
			duration: 0,
			reverse: true
		})

		// 呼叫 Timeline
		.setTween(tl_header)
		// Debug Mode
		.addIndicators({name: "header(desk)"} )
		// 啟動 Scrollmagic
		.addTo(header_nav);
	}
	else 
	{
		// ScrollMagic參數設定 (scene_header)
		var scene_header = new ScrollMagic.Scene
		({
			triggerElement: ".is__buttons",
			triggerHook: 0.4,
			duration: 0,
			reverse: true
		})

		// 呼叫 Timeline
		.setTween(tl_header)
		// Debug Mode
		.addIndicators({name: "header"} )
		// 啟動 Scrollmagic
		.addTo(header_nav);
	}


	

});