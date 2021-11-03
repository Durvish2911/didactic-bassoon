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
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
   document.getElementById("stat").innerHTML="status:-dectected all objects in the image ";
}
function modelloaded(){
    console.log("model is loaded");
    status=true;
    od=detect(img,gr)
}
function gr(error,results){
    if(error){
     console.error(error);   
    }else{
        console.log(results);
thest=results
    }
}