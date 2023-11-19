const initJurySlider = () => {
  const swiperWrapper = document.querySelector('.swiper-container');
  const buttonPrev = document.querySelector('.jury__prev');
  const buttonNext = document.querySelector('.jury__next');
  const slides = document.querySelectorAll('[data-slide]');
  const slidesArray = [...slides];

  slidesArray.forEach((slide) =>{
    slide.setAttribute('tabindex', '0');
  });

  var mySwiper = new window.Swiper(swiperWrapper, {
    // Настройки слайдера
    loop: true,
    navigation: {
      nextEl: buttonPrev,
      prevEl: buttonNext,
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
  return mySwiper;
}
export {initJurySlider};

