(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-down"></i>'
        ],
    });


    // attractions carousel
    $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    //Effect zoom img
    $(window).on('scroll', function() {
        $('.zoom-image').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var windowHeight = $(window).height();

            // console.log(topOfWindow);
            
            if (topOfWindow > 0 && topOfWindow < 500) {
                // Aplica el zoom cuando la imagen está visible
                $(this).css('transform', 'scale(1.1)');
            } else {
                // Restablece el zoom cuando la imagen ya no es visible
                $(this).css('transform', 'scale(1)');
            }
        });


    });

    // ? 
    var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();


    var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


})(jQuery);


// Send email - EmailJs
const btn = document.getElementById('button');

// Validation Contact
document.getElementById('form').addEventListener('submit', function(event) {

    // Send email - EmailJs
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_l2sf6zr';

    // Validation Contact
    let name = document.getElementById('name').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validación de que los campos no estén en blanco
    if (name === "" || phoneNumber === "" || email === "" || message === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, complete todos los campos.',
        });
        event.preventDefault(); // Evita que se envíe el formulario
        return;
    }

    // Validación de que el campo 'phoneNumber' solo contenga números
    if (!/^\d+$/.test(phoneNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Formato incorrecto',
            text: 'El campo "Número de Teléfono" solo debe contener números.',
        });
        event.preventDefault(); // Evita que se envíe el formulario
        return;
    }

    // Send email - EmailJs
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Mensaje Enviado',
            //     text: 'Gracias por contactarnos , en breve se contactaron contigo.',
            // });

            // Si todas las validaciones son correctas, muestra un mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado',
                text: 'El formulario se ha enviado correctamente.',
            }).then(() => {
                // Limpiar los campos del formulario
                document.getElementById('form').reset();
            });

        }, (err) => {
            // btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});




