/* === DARK MODE === */
const toggleButton = document.getElementById('darkModeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
});

/* Header */
function blurHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* === CAROUSEL === */
const images = document.querySelector('.carousel-images');
const totalSlides = images.children.length;
let index = 0;
const indicatorsContainer = document.querySelector('.carousel-indicators');

for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => moveToSlide(i));
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.indicator');
function updateIndicators() {
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
}

function moveToSlide(n) {
    index = (n + totalSlides) % totalSlides;
    images.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
}

document.getElementById('prev').addEventListener('click', () => moveToSlide(index - 1));
document.getElementById('next').addEventListener('click', () => moveToSlide(index + 1));

function autoSlide() {
    moveToSlide(index + 1);
}
let interval = setInterval(autoSlide, 5000);

document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(interval));
document.querySelector('.carousel').addEventListener('mouseleave', () => interval = setInterval(autoSlide, 5000));

    

/* === MODAL === */
let currentStep = 1;

function openModal() {
  document.getElementById("registerModal").style.display = "flex";
  showStep(1);
}

function closeModal() {
  document.getElementById("registerModal").style.display = "none";
}

function nextStep(step) {
  currentStep = step;
  showStep(step);
}

function showStep(step) {
  document.querySelectorAll(".step").forEach((el) => {
    el.classList.remove("active");
  });
  document.querySelector(`.step-${step}`).classList.add("active");
}
