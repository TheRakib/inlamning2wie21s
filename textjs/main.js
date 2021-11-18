const { NULL } = require("node-sass");

var a = 10;

// global och local scope 

// 
function doSomething() {
var a = 100;
   //var b= 50;
   console.log(a)

}

//console.log(b);
doSomething();
/*
function Ex(){ 
 const y = 100; 
 //Z kommer att bli ? :  undefined.  
 // console.log(z); 
 InnreLista(); 
 function InnreLista(){ 
          console.log(y); 
          const z=10; 
 } } 
 Ex(); 
*/
 

/* closure */

function Add(num) 
{ //funktionen returnerar en function 
return ( 
       function(num2){ 
             console.log(num + num2); 
            } )
} 
const total= Add(10) //nu är värdet till num är 10.  
//eftersom funktionen returnerar en funktion 
//total har funktionen.  
total(20);//num2 har nu värdet 20. 
//Tack vare closure kunde inre funKtionen(den funktionen som returneras) 
//kunde behålla värdet num = 10 


// IIFE
const res= (function doSum() {
    console.log(10+20)
    return 10+20
})();

/*
var x= 100;
x="hej "
if( typeof x =="undefined" || typeof x==NULL){

    alert("  ")
} */


// int 122311231 till bigint 123123123123123