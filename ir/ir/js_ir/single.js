$(function(){
	var whatsShow = $('#whatsShow');	
	    hideNav = $('#hideNav');
	    slider = $('aside#sideNav');
	    bars = $('span#bars');
	    bar1 = $('span#bars i:first');
	    bar2 = bar1.next();
	    bar3 = bar2.next();

	    	    function slideNav() {
	        hideNav.click(function() {

	            if (!slider.hasClass('open')) {
	                setTimeout(function() {
	                    slider.css({ transform: 'translateX(0%)', boxShadow: '22px -8px 13px 12px rgba(45,33,31,.5)' });
	                    bar1.css({ top: 10 + 'px', left: 15 + 'px', transform: 'rotate(45deg)' });
	                    bar2.css({ left: 17 + 'px', transform: 'rotate(-45deg)' });
	                    bar3.css({ opacity: '0' });
	                    setTimeout(function() {
	                        slider.addClass('open');
	                    }, 10);
	                }, 10);

	            } else {
	                setTimeout(function() {
	                    slider.css({ transform: '', boxShadow: '' });
	                    bar1.css({ top: '', right: '', transform: '' });
	                    bar2.css({ left: '', transform: '' });
	                    bar3.css({ opacity: '' });
	                    setTimeout(function() {
	                        slider.removeClass('open');
	                    }, 10);
	                }, 10);
	            }


	        });
	    }

	    slideNav();


});