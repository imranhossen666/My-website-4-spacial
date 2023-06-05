var mode = document.querySelector(".button")
var body = document.querySelector("body")
var allHead0 = document.querySelectorAll(".a-text h2")[0]
var allHead1 = document.querySelectorAll(".a-text h2")[1]
var allHead2 = document.querySelectorAll(".a-text h2")[2]
var allHead3 = document.querySelectorAll(".a-text h2")[3]
var allHead4 = document.querySelectorAll(".a-text h2")[4]
var menuBox = document.querySelector(".menu-box")
var featureItems0 = document.querySelectorAll(".feature-items")[0]
var featureItems1 = document.querySelectorAll(".feature-items")[1]
var featureItems2 = document.querySelectorAll(".feature-items")[2]
var featureItems3 = document.querySelectorAll(".feature-items")[3]
var cardItems0 = document.querySelectorAll(".card-items")[0]
var cardItems1 = document.querySelectorAll(".card-items")[1]
var cardItems2 = document.querySelectorAll(".card-items")[2]

mode.addEventListener("click", ()=> {
  body.classList.toggle("darkColor")
  menuBox.classList.toggle("darkColorMenu")
  allHead0.classList.toggle("darkColor")
  allHead1.classList.toggle("darkColor")
  allHead2.classList.toggle("darkColor")
  allHead3.classList.toggle("darkColor")
  allHead4.classList.toggle("darkColor")
  featureItems0.classList.toggle("darkColorX")
  featureItems1.classList.toggle("darkColorX")
  featureItems2.classList.toggle("darkColorX")
  featureItems3.classList.toggle("darkColorX")
  cardItems0.classList.toggle("darkColorX")
  cardItems1.classList.toggle("darkColorX")
  cardItems2.classList.toggle("darkColorX")
})


$('.banner-img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.prev-icon').on('click', function() {
  $('.banner-img-main').slick('slickPrev')
})
$('.next-icon').on('click', function() {
  $('.banner-img-main').slick('slickNext')
})


  
var passwordFild = document.querySelector("#passWord")
var passwordText = document.querySelector(".password-details-box")

passwordFild.addEventListener("focus", ()=> {
  passwordText.classList.add("passwordTextBoxShow")
})
passwordFild.addEventListener("blur", ()=> {
  passwordText.classList.remove("passwordTextBoxShow")
})

var upperCase = document.querySelector("#uppercase")
var lowerCase = document.querySelector("#lowercase")
var number = document.querySelector("#number")
var charectar = document.querySelector("#charectar")

passwordFild.addEventListener("keyup", () => {
  var upperCaseText = /[A-Z]/g
  if(passwordFild.value.match(upperCaseText)){
    upperCase.classList.add("valid")
    upperCase.classList.remove("invalid")
  }
  else {
    upperCase.classList.remove("valid")
    upperCase.classList.add("invalid")
  }

  var lowerCaseText = /[a-z]/g
  if(passwordFild.value.match(lowerCaseText)){
    lowerCase.classList.add("valid")
    lowerCase.classList.remove("invalid")
  }
  else {
    lowerCase.classList.remove("valid")
    lowerCase.classList.add("invalid")
  }

  var numberText = /[0-9]/g
  if(passwordFild.value.match(numberText)){
    number.classList.add("valid")
    number.classList.remove("invalid")
  }
  else {
    number.classList.remove("valid")
    number.classList.add("invalid")
  }

  if(passwordFild.value.length >= 8 ){
    charectar.classList.add("valid")
    charectar.classList.remove("invalid")
  }
  else {
    charectar.classList.remove("valid")
    charectar.classList.add("invalid")
  }
})


var formBoxShow = document.querySelector(".form-box-show")
var form = document.querySelector(".form")
var formBoxClose = document.querySelector(".form-colse-icon")
formBoxShow.addEventListener("click", () => {
  form.classList.add("sohwTheBox")
})
formBoxClose.addEventListener("click", () => {
  form.classList.remove("sohwTheBox")
})



$('.about-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  // asNavFor: '.feed-text-box-main',
  centerMode: true,
  centerPadding: '1px',
});



VanillaTilt.init(document.querySelectorAll(".feature-items"), {
  max: 20,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});


VanillaTilt.init(document.querySelectorAll(".card-items"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.2, 
});






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}


