function mig(){
    window.location="index2.html";
}
function mig1(){
    window.location="index.html";
}
var img="";
 var status="";
 var the_hobbit=[];
function setup()
{
 var canvas=createCanvas(700,400);
canvas.position(600,300);
ODISHA=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("stat").innerHTML="status:- detecting all objects present in the image";
}
function modelloaded(){
    console.log("model is loaded");
     status=true;
     ODISHA.detect(img,Gr);
}
function Gr(error,results){
    if (error) {
        console.log(error);
    }else{
        console.log(results);
        the_hobbit=results;
    }
}
function preload()
{
img=loadImage('mac_book.jpeg');
}
function draw()
{
image(img,0,0,700,400);
if(status !=""){
for(d=0;d<the_hobbit.length;d++){
    document.getElementById("stat").innerHTML="status:-mission accomplished our cocossd has detected our images ";
    fill("navy");
 var percent=floor(the_hobbit[d].confidence *100);
 text(the_hobbit[d].label+" "+percent+" % ",the_hobbit[d].x+15,the_hobbit[d].y+15);
 noFill();
 stroke("green");
 rect(the_hobbit[d].x,the_hobbit[d].y,the_hobbit[d].width,the_hobbit[d].height);
}
}
}