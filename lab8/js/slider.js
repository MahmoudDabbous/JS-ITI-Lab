let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function updateSlider(newCurrentSlide) {
    slides[currentSlide].classList.toggle('active');
    currentSlide = newCurrentSlide;
    slides[currentSlide].classList.toggle('active');
}

function nextSlide() {
    const newCurrentSlide = (currentSlide + 1) % slides.length;
    updateSlider(newCurrentSlide);
}

function prevSlide() {
    const newCurrentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider(newCurrentSlide);
}

setInterval(nextSlide, 3000);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
