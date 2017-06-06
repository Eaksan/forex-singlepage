	if ($(window).width() < 1240) {
		$(function(){
			$('.b-menu').appendTo('.b-menu-drop')
		})
        $('.b-header-menu').css('min-height', ($(window).innerHeight() - $('.b-header').outerHeight(true) + 5) + 'px');
	    $('.b-mobile-menu .menu-icon').click(function(){
    	    $('.b-header-menu').toggleClass('open').fadeToggle('1000');
            $(this).toggleClass('active');
	    });
        $('.b-heaeder-drop a').click(function(){
	    	$(this).next().slideToggle();
            $(this).toggleClass('active');
        });
	}

	if ($(window).width() <= 999) {
		$(function(){
			$('.b-search').appendTo('.b-interesting-container .b-title')
		})
	 }

     $('.b-heaeder-drop').click(function(event){
         $(this).toggleClass('active').siblings().removeClass('active');
         $('.b-menu-drop').removeClass('active');
         $('.b-menu').slideUp();
         event.preventDefault();
     });

     $('.b-menu-drop').click(function(){
         $('.b-menu').slideToggle();
         $('.b-heaeder-drop').removeClass('active');
         $(this).toggleClass('active');
     });
