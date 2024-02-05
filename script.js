/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let op1scr = document.querySelector(".option-one-screen");
let button = document.querySelector(".buttons");
let op2scr =document.querySelector(".option-two-screen");
let opt1opt= document.querySelector(".one-option-one");
let opt2opt= document.querySelector(".two-option-two");
let Charlieno =document.querySelector(".charlie-two-option-two");
let Charlieyes =document.querySelector(".charlie-one-option-one");
let ending1=document.querySelector(".joecoolparty");
let ending2=document.querySelector(".snoopyathome");
let ending1p2 =document.querySelector(".charlie-option-two-end");
let ending2p2 =document.querySelector(".charlie-option-one-end");
let title =document.querySelector(".title");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
button1.onclick=function(){
title.innerHTML="";
    opening.style.display = "none";
button.style.display ="none";
 op1scr.style.display ="block";
 
};

button2.onclick=function(){
title.innerHTML="";
    opening.style.display = "none";
button.style.display ="none";
 op2scr.style.display ="block";
 
};
opt1opt.onclick=function(){
button.style.display ="none";
 op1scr.style.display ="none";
    ending1.style.display="block";

};
opt2opt.onclick=function(){
button.style.display ="none";
 op1scr.style.display ="none";
    ending2.style.display="block";

};
Charlieno.onclick=function(){
ending1p2.style.display = "block";
button.style.display ="none";
 op2scr.style.display ="none";
 
};
Charlieyes.onclick=function(){
ending2p2.style.display = "block";
button.style.display ="none";
 op2scr.style.display ="none";
 
 
};

/*
INSERT_VARIABLE.onclick=function(){
    

};


INSERT_VARIABLE.onclick=function(){

};

*/


