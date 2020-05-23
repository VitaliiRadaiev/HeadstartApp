$(function(){

	$('.header_slider').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span class="icon-caret-left"></span></div>',
		nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span class="icon-caret-right"></span></div>',
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		responsive: [
		  {
		    breakpoint: 769,
		    settings: {
		      slidesToShow: 5,
		      slidesToScroll: 1,
		      arrows: true,
		    }
		  },
		  {
		    breakpoint: 577,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 1,
		      arrows: true,
		    }
		  },
		]
	});

	$('.whatsHot_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span class="icon-caret-left"></span></div>',
		nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span class="icon-caret-right"></span></div>',
		responsive: [
		  {
		    breakpoint: 1024,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  },
		]
	});

	$('.videos_slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span class="icon-caret-left"></span></div>',
		nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span class="icon-caret-right"></span></div>',
		responsive: [
		  {
		    breakpoint: 1024,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 576,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  },
		]
	});

	$('.social_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span class="icon-caret-left"></span></div>',
		nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span class="icon-caret-right"></span></div>',
		responsive: [
		  {
		    breakpoint: 1025,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  },
		  ]
	});


	let el = document.querySelector('.videos_slider');

	el.onclick = (event) => {
		if(event.target.dataset.youtubeurl) {
			modalVideo(event.target.dataset.youtubeurl);
		}
	}

	function modalVideo(url) {
		let body = document.body;
		let div = document.createElement('div');
		div.className = 'modal-video';
		div.fullScreenBool = false;
		div.innerHTML = `
			<div class="modal-video_buttons">
			  <span class="icon-crop_16_9 modal-video_button-fullScreen modal-button" data-button="fullScreen"></span>
			  <span class="icon-clear modal-video_button-close modal-button" data-button="close"></span>
			</div>
			<div class="modal-video_iframe-wrap">
			  
			  <iframe width="100%" height="100%" src="${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		`

		body.append(div);
	}

	document.body.onclick = (event) => {
		if(event.target.dataset.button == 'close') {
			let el = document.querySelector('.modal-video');
			el.remove();
		} else if(event.target.dataset.button == 'fullScreen') {
			let modal = document.querySelector('.modal-video');
			if(!modal.fullScreenBool) {
				let html = document.documentElement;
				fullScreen(html);
				modal.fullScreenBool = true;
				modal.style.backgroundColor = 'rgba(30,30,30,1)';
			} else if(modal.fullScreenBool) {
				fullScreenCancel();
				modal.fullScreenBool = false;
				modal.style.backgroundColor = 'rgba(30,30,30,0.87)';
			}
		}
	}
	

	function fullScreen(element) {
	  if(element.requestFullscreen) {
	    element.requestFullscreen();
	  } else if(element.webkitrequestFullscreen) {
	    element.webkitRequestFullscreen();
	  } else if(element.mozRequestFullscreen) {
	    element.mozRequestFullScreen();
	  }
	}

	function fullScreenCancel() {
		if(document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if(document.mozCancelFulScrenn) {
			document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}

	let mainVideoPlayer = document.querySelector('.resoftables_video_player');

	mainVideoPlayer.onclick = () => {

		let videoWrap = document.querySelector('.resoftables_video');
		
		videoWrap.innerHTML = `<iframe width="100%" height="100%" src="${videoWrap.dataset.youtubeurl}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	}

	
});


