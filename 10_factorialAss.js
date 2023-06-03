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
console.log(`---------------------------------------------------------------------------------------------`);
 let factOd5 = factorialOfNum(5);
 console.log(`Factorial of 5 is: ${factOd5}`);
console.log(`---------------------------------------------------------------------------------------------`);

 let factOd3 = factorialOfNum(3);
 console.log(`Factorial of 3 is: ${factOd3}`);
console.log(`---------------------------------------------------------------------------------------------`);

 let factOdNull = factorialOfNum(null);

 console.log(`---------------------------------------------------------------------------------------------`);


 let factOd8 = factorialOfNum(8);
 console.log(`Factorial of 8 is: ${factOd8}`);

console.log(`---------------------------------------------------------------------------------------------`);

 let factOdUnd = factorialOfNum(undefined);

console.log(`---------------------------------------------------------------------------------------------`);

 let factOd9 = factorialOfNum(9);
 console.log(`Factorial of 9 is: ${factOd9}`);

console.log(`---------------------------------------------------------------------------------------------`);


 factorialOfNum(0);

console.log(`---------------------------------------------------------------------------------------------`);

 