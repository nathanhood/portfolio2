// $('html, body').hide();
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    // $('html, body').fadeIn('slow');
    initCarousel();
    $('.fa-chevron-left').click(switchBackFrame);
    $('.fa-chevron-right').click(switchForwardFrame);
  }

  var carouselTimer;

  function initCarousel(){
    clearInterval(carouselTimer);

    carouselTimer = setInterval(function(){
      if ($('.active').attr('class').contains('one')) {
        switchFrame('one', 'two', $('.nothing'));
      } else if ($('.active').attr('class').contains('two')) {
        switchFrame('two', 'three', $('.nothing'));
      } else if ($('.active').attr('class').contains('three')) {
        switchFrame('three', 'one', $('.nothing'));
      }
    }, 8000);
  }

  function switchFrame(initialClass, finalClass, element){
    $(element).unbind();
    $(`.dot.${finalClass}`).addClass('active');
    $(`.dot.${initialClass}`).removeClass('active');
    $(`.carousel.${initialClass}`).finish().fadeOut(700, function(){
      $(`.carousel.${finalClass}`).finish().fadeIn(700, function(){
        if (element.hasClass('fa-chevron-right')) {
          $(element).bind('click', switchForwardFrame);
        } else if (element.hasClass('fa-chevron-left')) {
          $(element).bind('click', switchBackFrame);
        }
      });
    });
  }

  function switchBackFrame(event){
    event.preventDefault();
    if ($('.active').attr('class').contains('one')) {
      switchFrame('one', 'three', $(this));
    } else if ($('.active').attr('class').contains('two')) {
      switchFrame('two', 'one', $(this));
    } else if ($('.active').attr('class').contains('three')) {
      switchFrame('three', 'two', $(this));
    }
    clearInterval(carouselTimer);
  }

  function switchForwardFrame(event){
    event.preventDefault();
    if ($('.active').attr('class').contains('one')) {
      switchFrame('one', 'two', $(this));
    } else if ($('.active').attr('class').contains('two')) {
      switchFrame('two', 'three', $(this));
    } else if ($('.active').attr('class').contains('three')) {
      switchFrame('three', 'one', $(this));
    }
    clearInterval(carouselTimer);
  }

})();
