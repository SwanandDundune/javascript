const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11] 

console.log(`the Array  [20,31,40,25,23,11,29,9,60,2,11] `);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);


console.log(` length of given Array:  ${arrayNumbers.length}`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);


console.log(` Frist element in Array: ${arrayNumbers[0]} and  Last element in Array ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);


console.log(` third last elemt in array ${arrayNumbers[arrayNumbers.length-3]} `);  
console.log(`----------------------------------------------------------------------------------------------------------------------------`);


for (const iterator of arrayNumbers) {
    if (iterator%2==0) {
    console.log(` Even NUmber:  ${iterator}`);
        
    }

}  

console.log(`----------------------------------------------------------------------------------------------------------------------------`);


for (const iterator of arrayNumbers) {
    if (iterator%2==1) {
         console.log(`ODD NUmber:  ${iterator}`);
    }
}
console.log(`----------------------------------------------------------------------------------------------------------------------------`);



     let total = 0;          
for (const index in arrayNumbers) {
           if (index%2==0) {
          var num = arrayNumbers[index]

          total += num;
               
     }
             
 }
     console.log(`Sum of Even position NUmber : ${total}`);

 console.log(`----------------------------------------------------------------------------------------------------------------------------`);

     let totalOdd = 0;          
     for (const index in arrayNumbers) {
                if (index%2==1) {
               var num = arrayNumbers[index]
     
               totalOdd += num;
                    
                }
                  
          }
          console.log(`Sum of Odd position NUmber : ${totalOdd}`);
 console.log(`----------------------------------------------------------------------------------------------------------------------------`);
              var sumAll=0;
      for (const iterator of arrayNumbers) {
              sumAll += iterator;
      }
      console.log(`Sum of all element ${sumAll}`);
console.log(`----------------------------------------------------------------------------------------------------------------------------`);

for (const index of arrayNumbers) {
           if (index%5==0) {
          
     console.log(` ${ index} is multiple od 5` );
               
           }
             
}
console.log(`----------------------------------------------------------------------------------------------------------------------------`);

for (const index of arrayNumbers) {
    var result = arrayNumbers.includes(155);
    var resultNew = arrayNumbers.includes(23);
}
console.log(`115 is present in Array : ${result}`);
console.log(`23 is present in Array : ${result}`);

console.log(`----------------------------------------------------------------------------------------------------------------------------`);

 arrayNumbers.splice(3,0,55,66)
console.log(`Insert Number 55 and 60 before index 3 : ${arrayNumbers}`);

console.log(`----------------------------------------------------------------------------------------------------------------------------`);

arrayNumbers.splice(4,3)
console.log(`Delete 3 elemnt starting from index $: ${arrayNumbers}`);

console.log(`----------------------------------------------------------------------------------------------------------------------------`);
