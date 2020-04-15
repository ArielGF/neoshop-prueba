/**
 * TODO: Desarrollar el código del slider
 */

 $('.js-slider').slick({
 	autoplay: true,
 	dots: false,
 	dotsClass: "slider__dots",
 	fade: true,
 	prevArrow: "<span class='slider__prev'><i class='fa fa-chevron-left'></i></span>",
 	nextArrow: "<span class='slider__next'><i class='fa fa-chevron-right'></i></span>",
 	responsive: [
	 	{
	 		breakpoint: 1200,
	 		settings: {
	 			arrows: false,
	 			dots: true,
	 		}
	 	}
 	]
 });

/**
 * TODO: Desarrollar el código para cargar productos por Ajax



 */


/** Igualar el alto de los productos (por fila) para evitar que se descoloquen y mantener
la posición de los botones si algún producto tiene un título muy largo. Se refresca cada vez que
redimensionamos la ventana */

 $('.js-matchHeight--product-caption').matchHeight();


