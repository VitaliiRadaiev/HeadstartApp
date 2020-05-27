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


	let videoSlider = document.querySelector('.videos_slider');

	videoSlider.onclick = (event) => {
		if(event.target.dataset.youtubeurl) { 
			modalVideo(event.target.dataset.youtubeurl);
		}
	}

	let whatsHotSlider = document.querySelector('.whatsHot_slider');

	whatsHotSlider.onclick = (event) => {
		if(event.target.dataset.showpopup) {
			let imgSrc = event.target.dataset.imgsrc;
			let title = event.target.dataset.title;
			let fullText = event.target.dataset.fulltext;
			whatsHotFullScreen(imgSrc, title, fullText);
		}
	}

	function whatsHotFullScreen(imgSrc, title, text) {
		let body = document.body;
		let div = document.createElement('div');
		div.className = 'whatsHot-fullScreen';
		div.innerHTML = `
			<div class="whatsHot-fullScreen_wrap">
			  <div class="whatsHot-fullScreen_box">
			    <div class="whatsHot-fullScreen_box_close" data-button="closeWhatshotFullScreen"></div>
			    <div class="whatsHot-fullScreen_box_image">
			      <img src="${imgSrc}">
			    </div>
			    <div class="whatsHot-fullScreen_box_text-content">
			      <div class="whatsHot-fullScreen_box_title">
			        <h3>${title}</h3>
			      </div>
			      <div class="whatsHot-fullScreen_box_text">
			        <p>
			        	${text}
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
		`;

		body.append(div);
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
			let modalVideo = document.querySelector('.modal-video');
			modalVideo.remove();
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
		} else if(event.target.dataset.button == 'closeWhatshotFullScreen') {
			let whatsHotFullScreen = document.querySelector('.whatsHot-fullScreen');
			whatsHotFullScreen.remove();
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


