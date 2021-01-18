
// stick navigation
$(document).ready(function() {
  $('.js--feature-section').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky')
    }else {
      $('nav').removeClass('sticky');
    }
  },{
    offset: '60px;'
  });


  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window') 
  // }, {
  //   offset: '25%'
  // })

  
  // smooth scroll navigation
  $('nav a').on('click', function(e) {    
    if(this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 800); //scrolling speed
    }
    
  });

  /* Scroll on buttons */
  $('.js--scroll-to-plans').on('click', function(e) {    
    if(this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 800); //scrolling speed
    }  
  });

  $('.js--scroll-to-start').on('click', function(e) {    
    if(this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 800); //scrolling speed
    }  
  });

  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated animate__fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated animate__pulse');
  }, {
    offset: '50%'
  });


});
