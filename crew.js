const carousel = document.querySelector('.carousel');
const carouselTrack = carousel.querySelector('.carousel-track');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const dots = carousel.querySelectorAll('.dot');
let currentIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

function goToSlide(index) {
  carouselItems[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  carouselItems[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}


var carousell = document.getElementById('carousel');
  var carousellItems = carousell.getElementsByClassName('carousel-item');
  var currentSlide = 0;

  function showSlide(slideIndex) {
    for (var i = 0; i < carouselItems.length; i++) {
      carousellItems[i].style.display = 'none';
    }
    carousellItems[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= carousellItems.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000);