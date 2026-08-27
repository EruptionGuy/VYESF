// --- CAROUSEL ---
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const carouselContainer = document.querySelector('.carousel-container');

const INTERVAL_TIME = 4000;
let slideInterval;

const updateSlide = (targetSlide) => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const moveToNextSlide = () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const nextSlide = currentSlide.nextElementSibling || slides[0]; 
    updateSlide(nextSlide);
};

const moveToPrevSlide = () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; 
    updateSlide(prevSlide);
};

const startTimer = () => {
    slideInterval = setInterval(moveToNextSlide, INTERVAL_TIME);
};

const resetTimer = () => {
    clearInterval(slideInterval);
    startTimer();
};

// Event Listeners for Buttons
nextButton.addEventListener('click', () => {
    moveToNextSlide();
    resetTimer();
});

prevButton.addEventListener('click', () => {
    moveToPrevSlide();
    resetTimer();
});

// Pause/Resume on Hover
carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
carouselContainer.addEventListener('mouseleave', startTimer);

// Initialize Auto-Scroll
startTimer();


// --- SCROLL REVEAL ---
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Toggle 'active' based on whether the element is in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
};

// Observer options: triggers when the element enters the viewport
const revealOptions = {
    root: null, // uses the browser viewport
    threshold: 0.15 // triggers when ~15% of the element is visible
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Target all .reveal elements and start observing them
document.querySelectorAll('.reveal').forEach(element => {
    revealObserver.observe(element);
});