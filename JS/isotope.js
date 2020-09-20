$(document).ready(function () {
  // inist Isotope
  var $grid = $('.work-projects').isotope({
    //option
  });
  //filter items on button click
  $('.work-btn-group').on('click', 'button', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  // layout Isotop after each image loads
  $grid.imagesLoaded().progress(function(){
    $grid.isotope('layout');
  });
});
