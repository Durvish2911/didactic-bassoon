function hi(){
    window.location="index_1.html";;
}
function mig(){
    window.location="index2.html";
}
function mig1(){
    window.location="index.html";
}
function mig2(){
    window.location="index3.html";
}
function mig5(){
    window.location="index_1.html";
}
function mig6(){
    window.location="index4.html";
}
function mig15(){
    window.location="index2.html";
}
function sukoi(){
    window.location="index5.html";
}
function tejas(){
    window.location="index3.html";
}
function f22(){
    window.location="index4.html";
}
function f35(){
    window.location="index6.html";
}
function tejashal(){
    window.location="index7.html";
}
function sukoi30(){
    window.location="index5.html";
}
function sukoi2(){
    window.location="index.html";
}
var img="";
var status="";
var thest=[];
function setup(){
    var canvas=createCanvas(700,400);
   canvas.position(650,300);
   OD=ml5.objectDectector('cocossd',modelloaded);
   document.getElementById("stat").innerHTML="status:-dectecting all objects in the image ";
   document.getElementById("stat1").innerHTML="status:-dectecting all objects in the image ";
   document.getElementById("stat2").innerHTML="status:-dectecting all objects in the image ";
   document.getElementById("stat3").innerHTML="status:-dectecting all objects in the image ";
   document.getElementById("stat4").innerHTML="status:-dectecting all objects in the image ";
   document.getElementById("stat5").innerHTML="status:-dectecting all objects in the image ";
   document.getElementById("stat6").innerHTML="status:-dectecting all objects in the image ";
}
function modelloaded(){
    console.log("model is loaded");
    status=true;
    od=detect(img,gr);
}
function gr(error,results){
    if(error){
     console.error(error);   
    }else{
        console.log(results);
thest=results;
    }
}
function preload(){
    img=loadImage('apple.jpeg');
    img=loadImage('mac_book.jpeg');
    img=loadImage('macbook_pro.jpeg');
    img=loadImage('mouse_keyboard.jpeg');
    img=loadImage('tab.jpeg');
    img=loadImage('tv.jpeg');
    img=loadImage('yoga.jpeg');
}
function draw(){
    image(img,0,0,700,400);
if(status !=""){
    for(i=0;i<thest.length;i++){
    document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
    document.getElementById("stat1").innerHTML="status:-dectected all objects in the image ";
    document.getElementById("stat2").innerHTML="status:-dectected all objects in the image ";
    document.getElementById("stat3").innerHTML="status:-dectected all objects in the image ";
    document.getElementById("stat4").innerHTML="status:-dectected all objects in the image ";
    document.getElementById("stat5").innerHTML="status:-dectected all objects in the image ";
    document.getElementById("stat6").innerHTML="status:-dectected all objects in the image ";
    fill("navy");
    var p=floor(thest[i].confidence *100);
    text(thest[i].label+" "+p+" % ",thest[i].x+15,thest[i].y+15);
    noFill();
    stroke("green");
    rect(thest[i].x,thest[i].y,thest[i].width,thest[i].height);
}
}
}