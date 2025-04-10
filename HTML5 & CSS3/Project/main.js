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
var ourBlog_body_card = document.getElementsByClassName("ourBlog-body-card")
window.onscroll = function () {
   
   if (scrollY > 230) {
    header.classList.add("fixed-bar");

    offers[0].classList.add("fade-in-left")
    offers[1].classList.add("fade-in-up")
    offers[2].classList.add("fade-in-right")
    offers[3].classList.add("fade-in-left")
    offers[4].classList.add("fade-in-up")
    offers[5].classList.add("fade-in-right")

  }else if(scrollY < 230){
    header.classList.remove("fixed-bar");
  }
  if (scrollY > 650){
    Service_card[0].classList.add("fade-in-left")
    Service_card[1].classList.add("fade-in-up")
    Service_card[2].classList.add("fade-in-up")
    Service_card[3].classList.add("fade-in-right")
  }

  if (scrollY > 1500){
    ourBlog_body_card[0].classList.add("fade-in-left")
    ourBlog_body_card[1].classList.add("fade-in-up")
    ourBlog_body_card[2].classList.add("fade-in-right")
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

