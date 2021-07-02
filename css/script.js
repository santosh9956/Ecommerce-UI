$(document).ready(function(){

    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon img');
        nav.slideToggle(200);
        console.log("before if");
        if (icon.hasClass('ion-navicon-round')){
          icon.addClass('ion-close-round')
          console.log("in if");
          icon.removeClass('ion-navicon-round')
        }else{
          icon.addClass('ion-navicon-round')
          icon.removeClass('ion-close-round')
          console.log("else");
        }
      });


      $('.js-filter-icon').click(function () {
        var filnav = $('.js-filter-nav');
        var icon = $('.js-nav-icon img');
        filnav.slideToggle(200);
        console.log("before if");
        if (icon.hasClass('ion-navicon-round')){
          icon.addClass('ion-close-round')
          console.log("in if");
          icon.removeClass('ion-navicon-round')
        }else{
          icon.addClass('ion-navicon-round')
          icon.removeClass('ion-close-round')
          console.log("else");
        }
      });

    });



    window.onload = function(){
      slideOne();
      slideTwo();
  }
  
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;

  function slideOne(){
      if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
          sliderOne.value = parseInt(sliderTwo.value) - minGap;
          console.log(sliderOne.value);
          console.log("santosh");
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
  }
  function slideTwo(){
      if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
          sliderTwo.value = parseInt(sliderOne.value) + minGap;
          console.log(sliderTwo.value);
          console.log("mandal");
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();
  }
  function fillColor(){
      percent1 = (sliderOne.value / sliderMaxValue) * 100;
      percent2 = (sliderTwo.value / sliderMaxValue) * 100;
      
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #E83647 ${percent1}% , #E83647 ${percent2}%, #dadae5 ${percent2}%)`;
    // sliderTrack.style.background = '#E83647';
 
  }














