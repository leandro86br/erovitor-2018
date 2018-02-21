$( document ).ready(function() {

/* NAVIGATION VISIBLE ON SCROLL
*/
mainNav();

$(window).scroll(function () {
    mainNav();
});

function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 200){
        $('nav').removeClass('padding-nav')
    } 
    
    else {
        $('nav').addClass('padding-nav')
    } 
}


/* NAVBAR-COLLAPSE CLOSE ON NAV-LINK CLICK
*/

$(document).click(function(e) {
	if (!$(e.target).is('.navbar-collapse')) {
    	$('.collapse').collapse('hide');	    
    }
});


/* TOOLTIP
*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/* ONE PAGE SCROLL
*/

onePage();

function onePage(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 1000);
      }
  });
}
    
});