$(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true
      });
  });
  $(document).ready(function(){
    $('.tricks-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
  });

  $(document).ready(function(){
    $('.rooms-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });
  });

  

  window.addEventListener('scroll', function() {
      pageYOffset > 150 ? header.classList.add('visible'):header.classList.remove('visible')
    //document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });

 
 