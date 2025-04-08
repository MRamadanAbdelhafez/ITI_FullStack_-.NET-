var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {

  setTimeout(function () {
    preloader.style.transition = "opacity .3s ease"
    preloader.style.opacity = "0"
    setTimeout(function () {
      preloader.style.display = "none"

    }, 400)
  }, 1000)
}
var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var Service_card = document.getElementsByClassName("ourService-body-card")

window.onscroll = function () {
  if (scrollY > 420) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards"
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards"

  }
  else {
    header.classList.remove("fixed-bar");
  }
  if (scrollY > 2066){
    Service_card[0].style.animation = "fadeInUp 1.5s forwards"
    Service_card[1].style.animation = "fadeInUp 1.5s 0.4s forwards"
    Service_card[2].style.animation = "fadeInUp 1.5s 0.8s forwards"
    Service_card[3].style.animation = "fadeInUp 1.5s 1.2s forwards"
  }

}
const track = document.querySelector('.quote-track');
const slides = document.querySelectorAll('.quote-content');
const nextBtn = document.querySelector('.next-slide');
const prevBtn = document.querySelector('.prev-slide');

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;

  prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
}

updateSlidePosition();

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

