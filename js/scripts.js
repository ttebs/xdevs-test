var featured_list_height = 0;

$(function(){

	$(".hamburger").click(function(){
		$('.nav.mobile').toggleClass('active');
		$(this).toggleClass('is-active');
	});

	var inview = new Waypoint.Inview({
	  element: $('.header')[0],
	  exited: function(direction) {
	    	$('.header.sticky').addClass('active');
	  }
	});

	var inview = new Waypoint.Inview({
	  element: $('.banner__container--left')[0],
	  entered: function(direction) {
	    	$('.header.sticky').removeClass('active');
	  }
	})

});

$(window).on('load', function(){
	var article_height = $('.article').height();
	$('.article__container--left').height(article_height);

	$('.featured__list--content').each(function(){
		if($(this).height() > featured_list_height) {
			featured_list_height = $(this).height();
		}		
	});

	$('.featured__list--content').height(featured_list_height);
});