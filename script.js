 // Carousel
 const track = document.querySelector('.carousel-track');
 const slides = Array.from(track.children);
 const nextButton = document.querySelector('.next-btn');
 const prevButton = document.querySelector('.prev-btn');

 const updateSlide = (currentSlide, targetSlide) => {
     currentSlide.classList.remove('current-slide');
     targetSlide.classList.add('current-slide');
 };

 const moveToNextSlide = () => {
     const currentSlide = track.querySelector('.current-slide');
     let nextSlide = currentSlide.nextElementSibling;
     
     if (!nextSlide) {
         nextSlide = slides[0]; // Loop back to the first slide
     }
     updateSlide(currentSlide, nextSlide);
 };

 const moveToPrevSlide = () => {
     const currentSlide = track.querySelector('.current-slide');
     let prevSlide = currentSlide.previousElementSibling;
     
     if (!prevSlide) {
         prevSlide = slides[slides.length - 1]; // Loop back to the last slide
     }
     updateSlide(currentSlide, prevSlide);
 };

 // When clicked left/prev button
 prevButton.addEventListener('click', () => {
     moveToPrevSlide();
     resetTimer(); // Reset the auto-scroll timer on user interaction
 });

 // When clicked right/next button
 nextButton.addEventListener('click', () => {
     moveToNextSlide();
     resetTimer(); // Reset the auto-scroll timer on user interaction
 });

 // Set up automatic sliding interval (e.g., every 4000ms = 4 seconds)
 let slideInterval = setInterval(moveToNextSlide, 4000);

 const resetTimer = () => {
     clearInterval(slideInterval);
     slideInterval = setInterval(moveToNextSlide, 4000);
 };

 // Optional: Pause auto-scrolling when the user hovers over the carousel container
 const carouselContainer = document.querySelector('.carousel-container');
 carouselContainer.addEventListener('mouseenter', () => {
     clearInterval(slideInterval);
 });

 carouselContainer.addEventListener('mouseleave', () => {
     slideInterval = setInterval(moveToNextSlide, 4000);
 });


 
 // Reveal
 function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();