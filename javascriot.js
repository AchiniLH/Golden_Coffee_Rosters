// Simulating no internet connection
function search() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popupbut').style.display = 'block';
}
// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupbut').style.display = 'none';
}

// function submitOrder() {
    // alert("Your order is placed");
// }

//ABout us Page - Image Carousal

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousalImage");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


