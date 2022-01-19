function light(){ 
    document.documentElement.style
      .setProperty('--main-background-color', 'linear-gradient(to right, #F7F7F7 0%, #F4F4F4 50%, #E5E5E5 100%)');
  
  document.documentElement.style
      .setProperty('--main-text-color', 'black');  
    var x =document.getElementsByClassName("button");
    x[0].style.color='black';
    x[1].style.color='black';
    x[2].style.color='black';  
    x[3].style.color='black';  
  }
  function dark(){
     document.documentElement.style
      .setProperty('--main-background-color', 'linear-gradient(to right, #141414 0%, #323232 50%, #636363 100%)');
  
  document.documentElement.style.setProperty('--main-text-color', 'white');
     var x =document.getElementsByClassName("button");
    x[0].style.color='#CCFFFF';
    x[1].style.color='#CCFFFF';
    x[2].style.color='#CCFFFF';  
    x[3].style.color='#CCFFFF';  
     document.getElementById("para1").style.color="white";
     document.getElementById("header1").style.color="white";
  }
   var x, i;
    x = document.querySelectorAll(".block");
    for (i = 0; i < x.length; i++) {
      x[i].addEventListener("mouseover", changeFont);}
   var x, j;
    x = document.querySelectorAll(".block");
    for (j = 0; j < x.length; j++) {
      x[j].addEventListener("mouseout", changeFontBack);}
  
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
  /* function changeFontBack(){
     document.querySelector("#para1").style.fontFamily ="verdana"; document.querySelector("#para1").style.color = ("--main-text-color");
     document.querySelector("#header1").style.color = ("--main-text-color");
    } */
  