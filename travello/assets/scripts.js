
    let forestImg = document.querySelector('.forest-img'),
        skyImg = document.querySelector('.sky-img'),
        peopleImg = document.querySelector('.people-img'),
        feedbackBg = document.querySelector('.feedback')
        startX = -100,
        w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;

        
  
      document.querySelector('.hero').addEventListener('mousemove', function(evt){
        
        //console.log(evt.clientX)
        //var posY = Math.round(evt.clientY / h * startY)
        //console.log(posX)
        //console.log(w * 0.43 - evt.clientX / w );
        forestImg.style.left = Math.round(evt.clientX / w * (-5)) + 'px' ;// 300/1425*-20
        skyImg.style.right = Math.round(evt.clientX / w * (-70)) + 'px';
        peopleImg.style.left = Math.round(w * 0.43 - evt.clientX / w * (-20)) + 'px';
        peopleImg.style.bottom = Math.round(evt.clientY / h * (-50)) + 'px';

    })

    document.querySelector('.feedback').addEventListener('mousemove',function(evt) {
        console.log(Math.round(evt.clientX / w * (-70)) + 'px' + Math.round(evt.clientY / h * (-100)) + 'px')
        feedbackBg.style.backgroundPosition = Math.round(evt.clientX / w * (-10)) + 'px ' + Math.round(evt.clientY / h * (-10)) + 'px';
    })

    document.querySelector('.footer').addEventListener('mousemove',function(evt) {
        console.log(Math.round(evt.clientX / w * (-70)) + 'px' + Math.round(evt.clientY / h * (-100)) + 'px')
        document.querySelector('.footer__sun').style.left = Math.round(evt.clientX / w * (-5)) + 'px' ;// 300/1425*-20
        
        document.querySelector('.footer__forest-one').style.right = Math.round(evt.clientX / w * (-10)) + 'px';
        document.querySelector('.footer__forest-two').style.left = Math.round(evt.clientX / w * (-20) ) + 'px';
        document.querySelector('.footer__forest-two').style.top = Math.round(evt.clientY / h * (-10) + 65) + 'px';
    })
    window.addEventListener('scroll', function() {
        pageYOffset > 150 ? document.querySelector('.header').classList.add('visible'):document.querySelector('.header').classList.remove('visible')
      //document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    });

    const swiper1 = new Swiper('.flash-deals__slider', {
        // Optional parameters
        slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
      });


var swiper2 = new Swiper('.partners-slider', {
    spaceBetween: 30,
    slidesPerView: 6,
    loop: true,
    cssMode: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    
});

const swiper3 = new Swiper('.curated-slider', {
    // Optional parameters
    slidesPerView: 2,
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  });