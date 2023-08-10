let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.opacity = "0";
  slides[slideIndex - 1].style.display = "block";
  
  fadeIn(slides[slideIndex - 1]);
  
  setTimeout(function () {
    fadeOut(slides[slideIndex - 1]);
    setTimeout(showSlides, 3000); // Adjust the time as needed
  }, 4500); 
}

function fadeIn(element) {
  element.style.transition = "opacity 2s ease-in-out";
  element.style.opacity = "1";
}

function fadeOut(element) {
  element.style.transition = "opacity 2s ease-in-out";
  element.style.opacity = "0";
}
