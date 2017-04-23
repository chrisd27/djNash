

var waypoint = new Waypoint({
  element: document.getElementById('services'),
  handler: function() {
    console.log('services triggered')
  }
});

var waypoint = new Waypoint({
  element: document.getElementById('portfolio'),
  handler: function() {
    console.log('portfolio triggered')
  }
});

var setCarouselRightValue = function(){
  var imageWidth = $('.carousel-inner div').innerWidth();
   $('.carousel-inner').css('right', Math.abs(imageWidth)*2);
}

var slideCarousel = function(direction){
  var slideWidth = $('.carousel-inner div').innerWidth();
  var currentRight = $('.carousel-inner').css('right');
  currentRight = parseInt(currentRight.substring(currentRight.length - 2, 0));

  

  if(direction == 'right' || direction == undefined){
    $( ".carousel-inner" ).animate({
      right: currentRight + slideWidth,
    }, 300, function() {
      var right = $( ".carousel-inner" ).css('right');
      right = parseInt(right.substring(right.length - 2, 0));
      if(right >= slideWidth * 2){
        $( ".carousel-inner div" ).last().after($( ".carousel-inner div" ).first());
        right = right - slideWidth;
        $( ".carousel-inner" ).css('right', right);
      }
      
    });
  } else if(direction == 'left'){

    $( ".carousel-inner" ).animate({
      right: currentRight - slideWidth,
    }, 300, function() {
      var right = $( ".carousel-inner" ).css('right');
      right = parseInt(right.substring(right.length - 2, 0));
      if(right <= Math.abs(slideWidth)*2){
         $( ".carousel-inner div" ).first().before($( ".carousel-inner div" ).last());
        right = right + slideWidth;
        $( ".carousel-inner" ).css('right', right);
      }
    });
  }
}

$(document).ready(function(){
  setCarouselRightValue();
  var autoCarousel = setInterval(function(){
    slideCarousel();
  }, 2000);
});

$('.left.carousel-control').click(function(){
  slideCarousel('left');
})

$('.right.carousel-control').click(function(){
  slideCarousel('right');
})

$(function () {
    $('#homepage-gallery').jpictura({ layout: { itemSpacing: 0, justifyLastRow: true, idealRowHeight: 200 } });
});

$('.viewMore p').click(function(){
  if($(this).hasClass('open')){
    if($(this).text().indexOf('Testimonials') > -1){
      $(this).text('VIEW MORE Testimonials');
    } else {
      $(this).text('VIEW MORE PHOTOS');
    }
    $(this).removeClass('open');
    $(this).parent().prev().removeClass('removeMaxHeight');

  } else {
    if($(this).text().indexOf('Testimonials') > -1){
      $(this).text('VIEW LESS Testimonials');
    } else {
      $(this).text('VIEW LESS PHOTOS');
    }
    $(this).addClass('open');
    
    $(this).parent().prev().addClass('removeMaxHeight');
  }
  


  
});

$(window).on('scroll', function(){
 // if(window.innerWidth < 780){
    if($(window).scrollTop() > 200){
      $('#mainNav').css('background-color', 'black');
    } else {
      $('#mainNav').css('background-color', 'transparent');
    }
  //} else {
  //  $('#mainNav').css('background-color', 'black');
  //}
});
//$('#myCarousel')

// var waypoint = new Waypoint({
//   element: document.getElementById('about'),
//   handler: function() {
//     console.log('about triggered')
//   }
// });

// var waypoint = new Waypoint({
//   element: document.getElementById('basic-waypoint'),
//   handler: function() {
//     notify('Basic waypoint triggered')
//   }
// });