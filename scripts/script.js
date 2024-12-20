$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
  
  // Scrolling animations.
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
          $(this).addClass("slide-up");
        }
    });

    $(".scale-anim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
          $(this).addClass("scale");
        }
    });
  });

  // Back to Top
  $(window).scroll(function(){
      if ($(this).scrollTop() > 1) {
          $('.dmtop').css({bottom:"25px"});
      } else {
          $('.dmtop').css({bottom:"-100px"});
      }
  });
  $('.dmtop').click(function(){
      $('html, body').animate({scrollTop: '0px'}, 800);
      return false;
  });

// Set the modal carousel images on click.
$('div[data-target="#myModal"]').click(function(){

    // Delete existing html.
    $('.carousel-inner').html("");

    // Add images.
    var images = $(this).find('img');
    images.each(function(index){
      var imageSource = $(this).attr('src');
      $('.carousel-inner').append(
          '<div class="item">' +
              '<img src="' + imageSource + '"' + 'alt="...">' +
            '</div>'
      );
    });

    // First item active.
    $('.carousel-inner .item').first().addClass('active');

    // Make sure we start at index 0.
    $('.carousel').carousel(0);
    
    return true;
  });

  $('#video-modal').on('show.bs.modal', function (e) {
    var div = $(e.relatedTarget) // Div that triggered the modal
    var videoSrc = div.data('video') // Extract source url from data-* attributes
    var video = $('video')[0];
    video.src = videoSrc; 
    video.load();
    video.play();
  });

  // Reset video playback on carousel close.
  $('#video-modal').on('hide.bs.modal', function (e) {
    var video = $('video')[0];
    video.pause();
    video.currentTime = 0;
    video.load();
  }); 

})
