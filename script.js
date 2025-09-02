const menuIcon = document.querySelector('.menu-icon'), header = document.querySelector('header');

function displayStyleLoad(list, slide) {
  list.forEach(item => item.style.display = 'none');

  list[slide].style.display = 'block';
}

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active')

  header.classList.toggle('header--mobile')
});

// ARROWS

const sliderArrows = document.querySelector('.slider-arrows');

const slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item');

const prev = sliderArrows.querySelector('.slider-arrows__arrow--left');

const next = sliderArrows.querySelector('.slider-arrows__arrow--right');

let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

// prev.addEventListener('click', showSlideArrows(1))

function showSlideArrows(n=0) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slidesArrows.length - 1;
  }
  
  if (slideIndex >= slidesArrows.length) {
    slideIndex = 0;
  }

  displayStyleLoad(slidesArrows, slideIndex)

  // slidesArrows.forEach(item => item.style.display = 'none');
  // slidesArrows[slideIndex].style.display = 'block';
};

showSlideArrows();

// ТОЧКИ

const sliderDots = document.querySelector('.slider-dots'), slidesDots = sliderDots.querySelectorAll('.slider-dots__item'), wrapperDots = sliderDots.querySelector('.slider-dots__nav');

console.log(slidesDots);

const dots = [];

for (let i=0; i < slidesDots.length; i++) {
  // console.log(i);
  const dot = document.createElement('button');
  console.log(dot);

  dot.dataset.slideTo = i;

  dot.classList.add('slider-dots__nav-item');
  if (i == 0) dot.classList.add('slider-dots__nav-item--active');

  if (i != 0) slidesDots[i].style.display = 'none';
  dot.addEventListener('click', showSlideDots)

  wrapperDots.append(dot);
  dots.push(dot);
};

function showSlideDots(event) {
  // console.log(event.target);

  const slideTo = event.target.dataset.slideTo;

  displayStyleLoad(slidesDots, slideTo)

  // slidesDots.forEach(item => item.style.display = 'none');
  // slidesDots[slideTo].style.display = 'block';

  // console.log(dots);
  dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
  event.target.classList.add('slider-dots__nav-item--active') /* Активная точка */
};