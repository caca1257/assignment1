function gandalfDes() {
    var x = document.getElementById('gandalf');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function starDes() {
    var x = document.getElementById('star');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function sushiDes() {
    var x = document.getElementById('sushi');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

//credited to http://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
	
var myVideo = document.getElementById('thevideo');

myVideo.addEventListener("mouseover", playVid);

myVideo.addEventListener("mouseout", pauseVid);

function playVid(){
	myVideo.play();
	
}

function pauseVid(){
	myVideo.pause();
}

// var vid = document.getElementById("two");

// vid.addEventListener("mouseenter", playVid);

// vid.addEventListener("mouseout", pauseVid);

// function playVid(){
// 	vid.play();

// }

// function pauseVid(){
// 	vid.pause();
// }


