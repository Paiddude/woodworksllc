jQuery(document).ready(function($) {
		
		$(".fade-up").removeClass("fade-up").attr("data-aos","fade-up");
		AOS.init();
		
		$('a[href*=\\#]:not([href=\\#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').delay( 10 ).animate({
					scrollTop: target.offset().top - 100
				}, 600);
				return false;
		  	}
			}
		});
		
		$('#us-map path').click(function(){
			//alert( $(this).attr('id') );
			$('.locations').removeClass('show');
			$( '#' + $(this).attr('id')+'-location' ).addClass('show');
			return false;
		});
		$('.locations').click(function(){
			$('.locations').removeClass('show');
		});

});