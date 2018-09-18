// Validation form

var userName = document.querySelector("input[name=name]");
var userEmail = document.querySelector("input[name=email]");

function check() {
    var valueName = document.querySelector("input[name=name]").value;
    var valueEmail = document.querySelector("input[name=email]").value;
    var regexpName = /^[A-Z]{1}[a-z]+$/g;
    var regexpEmail = /[0-9a-z.-]+@[0-9a-z-]+\.[a-z]{2}/g;
    var count = 0;

    function validName() {
        if (regexpName.test(valueName)) {
            userName.style.border = '2px solid green';
        } else {
            userName.style.border = '2px solid #FF0000';
            count++;
        };
    }

    function validEmail() {
        if (regexpEmail.test(valueEmail)) {
            userEmail.style.border = '2px solid green';
        } else {
            userEmail.style.border = '2px solid #FF0000';
            count++;
        };
    }

    validName();
    validEmail();

    if (count == 0) {
        alert("Confirm");
        window.location.reload();
    }
}


// Slider

$(function() {
			
				var Page = (function() {

					var $nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init();
	
			});