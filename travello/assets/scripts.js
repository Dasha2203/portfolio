
let forestImg = document.querySelector('.forest-img'),
    skyImg = document.querySelector('.sky-img'),
    peopleImg = document.querySelector('.people-img'),
    feedbackBg = document.querySelector('.feedback')
    startX = -100,
    w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;

        
  
document.querySelector('.hero').addEventListener('mousemove', function(evt){
  
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
    
    document.querySelector('.footer__sun').style.left = Math.round(evt.clientX / w * (-5)) + 'px' ;
    document.querySelector('.footer__forest-one').style.right = Math.round(evt.clientX / w * (-10)) + 'px';
    document.querySelector('.footer__forest-two').style.left = Math.round(evt.clientX / w * (-20) ) + 'px';
    
    if (document.documentElement.clientWidth > 1350) {
      document.querySelector('.footer__forest-two').style.top = Math.round(evt.clientY / h * (-10) + 65) + 'px';
    } else if (document.documentElement.clientWidth <= 1350) {
      document.querySelector('.footer__forest-two').style.top = Math.round(evt.clientY / h * (-10) + 100) + 'px';
    } else if (document.documentElement.clientWidth <= 1300) {
      document.querySelector('.footer__forest-two').style.top = Math.round(evt.clientY / h * (-10) + 280) + 'px';
    }
})
window.addEventListener('scroll', function() {
    pageYOffset > 150 ? document.querySelector('.header').classList.add('visible'):document.querySelector('.header').classList.remove('visible')
  
});

const swiper1 = new Swiper('.flash-deals__slider', {
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
});

const swiper3 = new Swiper('.curated-slider', {
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

// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = {value: array[i], rest: list};
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   console.log(list)
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepand(value, list) {
//   return {
//     value,
//     rest: list
//   }
// }

// console.log(prepand(10,prepand(20,null)))


