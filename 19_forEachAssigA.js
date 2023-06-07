const arrayNUmbers = [ 1,-7,40,502,-77,91,0,108,89,-601];
console.log(`============================ Elements with its index are =============================`);

arrayNUmbers.forEach((element , index)=>{
   console.log(element,index);
})

console.log(`============================ Find Positve NUmbers ===================================`);

arrayNUmbers.forEach(( element)=>{
         if (element>0) {
            console.log(element);
         }
})

console.log(`============================ Find Negative NUmbers ===================================`);

const arrayNUm = [];
arrayNUmbers.forEach(( element)=>{
    if (element<0) {
       arrayNUm.push(element)
    }
})
console.log(arrayNUm);

console.log(`============================ Find Even  NUmbers ========================================`);

const arrayEven = [];
arrayNUmbers.forEach(( element)=>{
    if (element%2==0) {
       arrayEven.push(element)
    }
})
console.log(arrayEven);

console.log(`============================ Find Sum of all  NUmbers ===================================`);
let arrayResult = 0 ;
arrayNUmbers.forEach((element)=> {
      arrayResult+= element
      
})
console.log("Sum of all numbers:",arrayResult);

console.log(`============================ Even indexed Array value are ================================`);

arrayNUmbers.forEach(( element ,index)=>{
    if (index%2==0) {
             console.log(element);
       
    }

})
console.log(`=========================================================================================================`);