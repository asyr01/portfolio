const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// length of all divs within the .right-slide container
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// Sets left slide to the correct position
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// sliderHeight is dynamic, changes according to device
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex++;
    // Back to the beginning of slides
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    // Back to the last slide
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(+${
    activeSlideIndex * sliderHeight
  }px)`;
};
