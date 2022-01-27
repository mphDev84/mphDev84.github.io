function light(){ //called from onClick event
  //change background color
    document.documentElement.style
      .setProperty('--main-background-color', 'linear-gradient(to right, #D9DBDB 0%, #D0D6E5 50%, #EAE8E9 100%)');
  
    //change 'button' color 
  document.documentElement.style
      .setProperty('--main-text-color', 'black');  
    let x =document.getElementsByClassName("button");
    x[0].style.color='black';
    x[1].style.color='black';
    x[2].style.color='black';  
    x[3].style.color='black';  
  }

  function dark(){//called from onClick event 
    //change background color back to that at page load
     document.documentElement.style
      .setProperty('--main-background-color', 'linear-gradient(to right, #141414 0%, #323232 50%, #636363 100%)');
  
      //change text colors 
  document.documentElement.style.setProperty('--main-text-color', 'white');
     let x =document.getElementsByClassName("button");
    x[0].style.color='#CCFFFF';
    x[1].style.color='#CCFFFF';
    x[2].style.color='#CCFFFF';  
    x[3].style.color='#CCFFFF';  
     document.getElementById("para1").style.color="white";
     document.getElementById("header1").style.color="white";
  };

  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(){
    
  sliderImages.forEach(slideImage=>{
      //half-way through image
      /*NOTE - I have hard-coded the pixel values below, I can't find a way of accessing the height
      of the 'slideImage' div element on the html page. These hacks work for now.*/  
  const slideImageHeight = 705;
  const slideInAt = ((window.scrollY + window.innerHeight) - slideImageHeight) / 1.5;
      //bottom of image
   const imageBottom = 1600;
   const newHeight = 305;
   const isHalfShown = slideInAt > newHeight;
   const isNotScrolledPast = window.scrollY <imageBottom;
   if(isHalfShown&&isNotScrolledPast){
    slideImage.classList.add('active');
}else{
   slideImage.classList.remove('active');
}
  });
};

window.addEventListener("scroll", debounce(checkSlide));

  //the code below is related to the commented-out 'divs' in index.html (lines 49-69), with the class "block".

  /*
   var x, i;
    x = document.querySelectorAll(".block");
    for (i = 0; i < x.length; i++) {
      x[i].addEventListener("mouseover", changeFont);}
   var x, j;
    x = document.querySelectorAll(".block");
    for (j = 0; j < x.length; j++) {
      x[j].addEventListener("mouseout", changeFontBack);}

      */
  
    /*
  function changeFont(){
    var ranNum = (Math.floor(Math.random()*10)+1).toFixed(0);
    if(ranNum==1){
  document.querySelector("#para1").style.color = "#0055FF";
document.querySelector("#header1").style.color = "red"; }
  if(ranNum==2){
  document.querySelector("#para1").style.color = "#806a00";}
  if(ranNum==3){
  document.querySelector("#para1").style.color = "lightblue";} 
  if(ranNum==4){
  document.querySelector("#para1").style.color = "grey";
  document.querySelector("#header1").style.color = "lightBlue"; }
  if(ranNum==5){
  document.querySelector("#para1").style.color = "pink"; } 
  if(ranNum==6){
  document.querySelector("#para1").style.color = "#804bff"; } 
  if(ranNum==7){
  document.querySelector("#para1").style.color = "#55ffcc"; } 
  if(ranNum==8){
  document.querySelector("#para1").style.color = "#ffdd99"; } 
  if(ranNum==9){
  document.querySelector("#para1").style.color = "#C9A1D1"; } 
  if(ranNum==10){
    document.querySelector("#para1").style.color = "#333333"; } 
  }
*/

  /* function changeFontBack(){
     document.querySelector("#para1").style.fontFamily ="verdana"; document.querySelector("#para1").style.color = ("--main-text-color");
     document.querySelector("#header1").style.color = ("--main-text-color");
    } */
  