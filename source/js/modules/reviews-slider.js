const initReviewsSlider = () => {
  const sliderReviews = document.querySelector('[data-swiper="reviews"]');
  const buttonPrev = document.querySelector('[data-button="prev-reviews"]');
  const buttonNext = document.querySelector('[data-button="next-reviews"]');

  let mySwiperReviews = new window.Swiper(sliderReviews, {
    // Настройки слайдера
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
      slidesPerView: 1,
    },
  });
  return mySwiperReviews;
};
export { initReviewsSlider };

