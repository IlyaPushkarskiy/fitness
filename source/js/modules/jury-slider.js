const initJurySlider = () => {
  const sliderJury = document.querySelector('[data-swiper="jury"]');
  const buttonPrev = document.querySelector('[data-button="prev-jury"]');
  const buttonNext = document.querySelector('[data-button="next-jury"]');

  let mySwiper = new window.Swiper(sliderJury, {
    // Настройки слайдера
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 32,
        initialSlide: 2,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
    },
  });
  return mySwiper;
};
export {initJurySlider};

