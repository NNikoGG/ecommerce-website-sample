// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

// Array of background images for the header
var headerBackgroundImages = [
  'url(https://github.com/NNikoGG/ecommerce-website-sample/blob/master/images/perfume-banner-1.jpg?raw=true)',
  'url(https://github.com/NNikoGG/ecommerce-website-sample/blob/master/images/perfume-banner-2.jpg?raw=true)',
  // Add more image URLs as needed
];

// Function to update the header's background image
function updateHeaderBackground(index) {
  document.getElementById('header').style.backgroundImage = headerBackgroundImages[index];
}

// Event listener for carousel slide change
document.querySelector('#header.carousel').addEventListener('slide.bs.carousel', function (event) {
  var nextSlideIndex = event.to; // 'to' is the index of the next slide
  updateHeaderBackground(nextSlideIndex);
});

// Initial background image setup
updateHeaderBackground(0); // Set the initial background image for the header

