
var navlinks= document.getElementById('navLinks');
function showMenu(){
  navLinks.style.right="0";
  navLinks.style.display="block"



}
function hideMenu(){
  navLinks.style.display="none";

}


//for Veg page slide show
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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



// show and hide information


function FunctionOne() {

  var x = document.getElementById("DivOne");
  var y = document.getElementById("DivTwo");
  var z = document.getElementById("DivThree");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

  } else {
    x.style.display = "none";
  }
}


function FunctionTwo() {
  var x = document.getElementById("DivOne");
  var y = document.getElementById("DivTwo");
  var z = document.getElementById("DivThree");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function FunctionThree() {
  var x = document.getElementById("DivOne");
  var y = document.getElementById("DivTwo");
  var z = document.getElementById("DivThree");
  if (z.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}



