var square = function( a,b,c,d){
               var squareOf5 =a*a;
               var squareOf6 =b*b;
               var squareOf25 =c*c;
               var squareOf100=d*d; 

        console.log(`1) Square of the number :-`);
               console.log(`  A) Square of number 5 is : ${squareOf5}`);
               console.log(`  B) Square of number 6 is : ${squareOf6}`);
               console.log(`  C) Square of number 25 is : ${squareOf25}`);
               console.log(`  D) Square of number 100 is : ${squareOf100}`);

console.log("------------------------------------------------------------------------------------------------");
               
}
square(5,6,25,100)

        console.log(`2) Type of square is : ${typeof square}`);
               
console.log("------------------------------------------------------------------------------------------------");
    
      var areaOfRectangle = function (numOne, numTwo){
                            var squareRectangle = (numOne*numTwo)
                            console.log(`3) Area of rectangle plot: ${squareRectangle}`);
      }
      areaOfRectangle(499,917)
console.log("------------------------------------------------------------------------------------------------");
 
 var swapValues = function (num1,num2){
                  
              console.log(`4) A. before swap ==>  ${num1} , ${num2}`);

              var temp = num1;
              var num1 = num2;
              var num2 = temp

              console.log(`   B. After swap ==>  ${num1} , ${num2}`);
              
          
               

 }
 swapValues( "Virat","Anushka")
 swapValues( "1000","2000")

 console.log("------------------------------------------------------------------------------------------------");
   
     var stringHandsOn = function(){
               var stringJs = "JS the most popular language of internet"
               console.log(`Given String is: ${stringJs}`);
                var totalchar = stringJs.length
                console.log(`5) A) Total character Avaible in the string: ${totalchar}`);

                var indexResult= stringJs.charAt(6)
             console.log(`   B) Character at index 6 : ${indexResult}`);
             var indexResult= stringJs.charAt(11)
             console.log(`   C) Character at index 11 : ${indexResult}`);

             var lastChara = stringJs.charAt( stringJs.length-1)
             console.log(`   D) last character using length property: ${lastChara}`);

             var firstChara = stringJs.charAt(0);
             console.log(`   E) First character from the given string: ${firstChara}`);

             var splitString = stringJs.split(" ");
             var squareOf = splitString.length
             var splitString = squareOf*squareOf

             console.log(`   F)  a) Total Number of words in the given string: ${squareOf}`);
             console.log(`       b) Square of total number of words in given string: ${splitString }`);
             
 

                
     }
     stringHandsOn()

   