var button = document.querySelector('.wrapper-mob');
var count = 0;
var mobNav = document.querySelector('.header__nav');
var cross = document.querySelector('.mobile-nav ');
var cover = document.querySelector('.cover');


button.addEventListener("click", function(){
        mobNav.classList.toggle('mob-active');
        button.classList.toggle('mobile-nav--click');
});



var reset = function(){
  $(".carusels").removeClass('active');
};

var picDisplay = function(){
     reset();
     $('.carusels').eq(count).addClass('active');
};

$(".section-carusel__leftarr").on("click", function(){
   if(count > 0){
     count--;
     picDisplay();
   }
});

$(".section-carusel__rightarr").on("click", function(){
   if(count < 1){
     count++;
     picDisplay();
   }
});