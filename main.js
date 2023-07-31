// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page Carousel Slide 1

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  }); 

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

  // Hide wishlist items

  $(".first-btn").click(function(){
    $(".minus-first").remove();
    

  })
  $(".second-btn").click(function(){
    $(".minus-second").remove();
  })
  $(".third-btn").click(function(){
    $(".minus-third").remove();
  })