console.log(`(1)======================================Gretest NUmber=============================================`);
var greaterNUmber  = function (num1,num2) {

     var result = num1>num2 ? `${num1} is greater`: `${num2} is greater`;
             return result;
}
var returnValue = greaterNUmber(10,-10);
console.log(` A) The given numbers are ${10},${-10}:-`);
console.log(`    Greatest NUmber is : ${ returnValue}`);

console.log(`   -----------------------------------------------------------------------------------------------`);


var returnValue = greaterNUmber(800,899);
console.log(` B) The given numbers are ${800},${899}:-`);
console.log(`    Greatest NUmber is : ${ returnValue}`);

console.log(`(2)======================================Even or Odd NUmber==========================================`);

    var isEvenOrOddNum = function(num1){
        var result=  num1%2==0 ? true : false ;
         return result;
    } 
    var  result =  isEvenOrOddNum(29);
    var res = (result==true) ? `Even NUmber` : `Odd Number`  
    console.log(`  The given number 29 is :  ${res}`);  

    var  result =  isEvenOrOddNum(44);
    var res = (result==true) ? `Even NUmber` : `Odd Number`  
    console.log(`  The given number 44 is :  ${res}`);  

    var  result =  isEvenOrOddNum(0);
    var res = (result==true) ? `Even NUmber` : `Odd Number`  
    console.log(`  The given number 0 is :  ${res}`);  
   

    var  result =  isEvenOrOddNum(101);
    var res = (result==true) ? `Even NUmber` : `Odd Number`  
    console.log(`  The given number 101 is :  ${res}`);  

    console.log(`(3)======================================Even or Odd NUmber length=====================================`);
       
     var wordLngth = function(sec){
                    var abc  = sec.length;
                    var result = (abc%2==0)? "Even" : "Odd" ;
                    return result;    

     }
     var result = wordLngth("javascript");
     console.log(` Given word "JavaScript" has : ${result} `);

     var result = wordLngth("developer");
     console.log(` Given word "developer" has : ${result} `);

     var result = wordLngth("Google");
     console.log(` Given word "Google" has : ${result} `);
