
jQuery(document).ready(function($) {
	//main slider

	$('.slider-holder').slick({
	    dots: false,
	    infinite: true,
	    arrows:false,
	    //speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    //prevArrow: $(".slide-m-prev"),
      	//nextArrow: $(".slide-m-next")
  });

	$('.slider_holder_arrows').slick({
	    dots: false,
	    infinite: true,
	    arrows:true,
	    //speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    prevArrow: $(".slide-m-prev"),
      	nextArrow: $(".slide-m-next"),
      	asNavFor: '.slider-holder'
  });

});	
