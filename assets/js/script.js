/* nav scroll */
/* ----------------------------------------------------------------------------------------------------- */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500);
        return false;
      }
    }
  });
});
/* carousel  */
/* ----------------------------------------------------------------------------------------------------- */
/* animate.css  */
/* ----------------------------------------------------------------------------------------------------- */
jQuery(document).ready(function() {
  jQuery('.post').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
    offset: 100
  });
});
jQuery(document).ready(function() {
  jQuery('.post1').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated1 slideInLeft', // Class to add to the elements when they are visible
    offset: 100
  });
});
jQuery(document).ready(function() {
  jQuery('.post2').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated zoomInUp', // Class to add to the elements when they are visible
    offset: 100
  });
});
jQuery(document).ready(function() {
  jQuery('.post3').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated slideInLeft', // Class to add to the elements when they are visible
    offset: 100
  });
});
jQuery(document).ready(function() {
  jQuery('.post4').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
    offset: 100
  });
});
jQuery(document).ready(function() {
  jQuery('.post5').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated rubberBand', // Class to add to the elements when they are visible
    offset: 100
  });
});
jQuery(document).ready(function() {
  jQuery('.post6').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated1 pulse', // Class to add to the elements when they are visible
    offset: 100
  });
});
