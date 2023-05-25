function factorialOfNum(num) {
               if (num==0) {
                     console.log(`Factornial od zero is : 1`);
                     return;
               } else {
                  if (num==null || num==undefined || num==isNaN(num)) {
                                    console.log(`invalid Input: ${num}`);
                                    return;
                  } else { 
                  } 
               } 
               let factorial = 1;
               for (let index = num; index >=1; index--) {
                factorial = factorial*index;
               }
               return factorial;


    
}

 let factOd5 = factorialOfNum(5);
 console.log(`Factorial of 5 is: ${factOd5}`);

 let factOd3 = factorialOfNum(3);
 console.log(`Factorial of 5 is: ${factOd3}`);

 let factOdNull = factorialOfNum(null);

 let factOd8 = factorialOfNum(8);
 console.log(`Factorial of 5 is: ${factOd8}`);

 let factOdUnd = factorialOfNum(undefined);

 let factOd9 = factorialOfNum(9);
 console.log(`Factorial of 5 is: ${factOd9}`);


 factorialOfNum(0);

 