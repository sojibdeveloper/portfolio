/* -------------------------------------------------------------------
 * Template Name         : Langona - Business Agency HTML Template
 * Theme Author Name     : Yucel Yilmaz
 * Created Date          : 28 April 2020
 * Version               : 1.0
------------------------------------------------------------------- */
/* -------------------------------------------------------------------
   All Functions                               
   ------------------------ /
 * 01.Preloader
 * 02.Wow Js
 * 03.Navbar
 * 04.Magnific Popup
 * 05.Isotopğe Gallery
 * 06.CounterUp
 * 07.Owl Carousel
 * 08.Pricing Table
 * 09.Background Image
 * 10.Skills Progress
 * 11.Contact Form
 * 12.Ripples Effect
------------------------------------------------------------------- */

$( document ).ready( function() {
    // All Functions
    langonaPreloader();
    langonaNavbar();
    langonaWowJs();
    langonaScrollIt();
    langonaIsotopeGallery();
    langonaCounterUp();
    langonaOwlCarousel();
    langonaBgImgPath();
    langonaContactForm();
});

/* -------------------------------------------------------------------
 * 01.Preloader
------------------------------------------------------------------- */
function langonaPreloader() {
    "use-strict";

    // Variables
    let preloaderWrap = $( '#preloader-wrap' );
    let loaderInner = preloaderWrap.find( '.preloader-inner' );

   $( window ).ready(function(){
       loaderInner.fadeOut(); 
       preloaderWrap.delay(350).fadeOut( 'slow' );
   });   
}

/* -------------------------------------------------------------------
 * 02.Wow Js
------------------------------------------------------------------- */
function langonaWowJs() {
    "use-strict";

    new WOW().init();
}

/* -------------------------------------------------------------------
 * 03.ScrollIt
------------------------------------------------------------------- */
function langonaScrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
    });
}

/* -------------------------------------------------------------------
 * 03.Navbar
------------------------------------------------------------------- */
function langonaNavbar() {
    "use-strict";

    // Variables
    let header          = $( '.header' );
    let logoTransparent = $( '.logo-transparent' );
    let scrollTopBtn    = $( '.scroll-top-btn' );
    let logoNormal      = $( '.logo-normal' );
    let windowWidth     = $( window ).innerWidth();
    let scrollTop       = $( window ).scrollTop();
    let $dropdown       = $( '.dropdown' );
    let $dropdownToggle = $( '.dropdown-toggle' );
    let $dropdownMenu   = $('.dropdown-menu');
    let showClass       = 'show';

    // When Window On Scroll
    $( window ).on( 'scroll', function(){
        let scrollTop = $( this ).scrollTop();

        if( scrollTop > 85 ) {
            logoTransparent.hide();
            logoNormal.show();
            header.addClass( 'header-shrink' );
            scrollTopBtn.addClass( 'active' );
        }else {
            logoTransparent.show();
            logoNormal.hide();
            header.removeClass( 'header-shrink' );
            scrollTopBtn.removeClass( 'active' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if( scrollTop > 85 ) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass( 'header-shrink' );
        scrollTopBtn.addClass( 'active' );
    }else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass( 'header-shrink' );
        scrollTopBtn.removeClass( 'active' );
    }

    // Window On Resize Hover Dropdown
    $( window ).on( 'resize', function() {
        let windowWidth  = $( this ).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $( this ).hasClass(showClass);
                    if( hasShowClass!==true ){
                        $( this ).addClass(showClass);
                        $( this ).find($dropdownToggle).attr( 'aria-expanded', 'true' );
                        $( this ).find($dropdownMenu).addClass(showClass);
                    }
                },
                function() {
                    $( this ).removeClass(showClass);
                    $( this ).find($dropdownToggle).attr("aria-expanded", "false");
                    $( this ).find($dropdownMenu).removeClass(showClass);
                }
            );
        }else {
            $dropdown.off( 'mouseenter mouseleave' );
            header.find( '.main-menu' ).collapse( 'hide' );
        }
    });
    // The same process is done without page scroll to prevent errors.
    if ( windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $( this );

                var hasShowClass  = $this.hasClass(showClass);

                if( hasShowClass!==true ){
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr( 'aria-expanded', 'true');
                    $this.find($dropdownMenu).addClass(showClass);
                }
            },
            function() {
                const $this = $( this );
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", 'false');
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    }else {
        $dropdown.off( 'mouseenter mouseleave' );
    }
}

/* ------------------------------------------------------------------- */
/* 05.Isotope Gallery
/* ------------------------------------------------------------------- */
function langonaIsotopeGallery() {
    "use-strict";

    // Variables 
    let portfolioFilterBtn     = $( '.portfolio-filter > a' );
    let portfolioGalleryWrap   = $( '.portfolio-gallery' );

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on( 'click', function() {
        portfolioFilterBtn.removeClass( 'current' );
        $( this ).addClass( 'current' );
    });

    portfolioGalleryWrap.imagesLoaded( function() {
        let grid = $( '.portfolio-gallery' ).isotope({
            itemSelector: '.glry-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.glry-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on( 'click', function() {
            let filterValue = $( this ).attr( 'data-gallery-filter' );
            grid.isotope({
                filter: filterValue
            });
            portfolioFilterBtn.removeClass( 'current' );
            $( this ).addClass( 'current' );
        });
    });
}
/* ------------------------------------------------------------------- */
/* 06.CounterUp
/* ------------------------------------------------------------------- */

function langonaCounterUp() {
    "use-strict";

    // Variables
    let counterItem = $( '.counter' );

    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}

/* ------------------------------------------------------------------- */
/* 07.Owl Carousel
/* ------------------------------------------------------------------- */
function langonaOwlCarousel() {
    "use-strict";

    // Variables
    let clientsSlider       = $( '.our-clients-slider' );
    let heroSlider          = $( '.hero-slider' );

    // Clients Slider
    clientsSlider.owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots: false,
        navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    heroSlider.owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 600,
        autoplayHoverPause:true,
        navText: [ "<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'><i>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items: 1
            }
        }
    });
}

/* ------------------------------------------------------------------- */
/* 09.Background Image
/* ------------------------------------------------------------------- */
function langonaBgImgPath(){
    "use-scrict";

    // Variables
    let dataBgItem         = $( '*[data-bg-image-path]' );

    dataBgItem.each( function() {
        let imgPath        = $( this ).attr( 'data-bg-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });
}

function langonaContactForm(){
    "use-scrict";

    //  Validate Input Variables
    let formControl     = $( '.contact-form-control' );
    let contactForm     = $( '#contactForm' );

    // Added AutoComplete Attribute Turned Off
    formControl.attr( 'autocomplete', 'off' );

    // Form On Submit
    contactForm.on("submit", function(event) {
        //  Variables 
        var name            = $("#contactName").val().trim(),
            email           = $("#contactEmail").val().trim(),
            message         = $("#contactMessage").val().trim(),
            validateEmail   = $('#contactEmail').portjobEmailValidate();

        // Check empty fields
        if( name==='' || email==='' || message==='' ){
            if( $('div.empty-form').css("display") == "none" ){
                $('div.empty-form').stop().slideDown(500).delay(5000).slideUp(500);
            }else {
                return false;
            }
        } else if ( !validateEmail===true ) {
            if( $('div.email-invalid').css("display") == "none" ){
                $('div.email-invalid').stop().slideDown(500).delay(5000).slideUp(500);
            }else {
                return false;
            }
        } else {
            // Once the information entered is verified, the mail form is sent. 
            $(this).find(':submit').append('<span id="btn-loader" class="fas fa-spinner fa-pulse ml-3"></span>');
            $(this).find(':submit').attr('disabled','true');
            $.ajax({
                url: "phpmailer/send_mail.php?mail=request",
                data: {
                    contact_name:name,
                    contact_email:email,
                    contact_message:message
                },
                type: "POST",
                success: function(response) {
                    contactForm[0].reset();
                    contactForm.find(':submit').removeAttr('disabled');
                    $(".success-form").html(response).slideDown(500).delay(5000).slideUp(500);  
                    contactForm.find(':submit').find("span#btn-loader").fadeOut();
                }
            });
        }
        event.preventDefault();
    });
}