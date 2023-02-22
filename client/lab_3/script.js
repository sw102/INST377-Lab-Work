let slidePosition = 0;

const slides = document.querySelectorAll('.carousel_item');

const slidesArray = Array.from(slides);

const totalSlides = slidesArray.length;

function updateSlidePosition() {

  slidesArray.forEach((slide) => {
    slide.classList.remove('visible');
    slide.classList.add('hidden');
  })
  console.log(slidePosition)
  slides[slidePosition].classList.add('visible');
}

function moveToNextSlide() {

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  updateSlidePosition(); // this is how you call a function within a function
}
function moveToPrevSlide() {

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition -= 1;
  }
  updateSlidePosition();
}


document.querySelector('.next') // Get the appropriate element (<button class="next">)
  .addEventListener('click', () => { // set an event listener on it - when it's clicked, do this callback function
    console.log('clicked next'); // let's tell the client console we made it to this point in the script
    moveToNextSlide(); // call the function above to handle this
  });


document.querySelector('.prev') // Get the appropriate element (<button class="next">)
  .addEventListener('click', () => { // set an event listener on it - when it's clicked, do this callback function
    console.log('clicked prev'); // let's tell the client console we made it to this point in the script
    moveToPrevSlide(); // call the function above to handle this
  });