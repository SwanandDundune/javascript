
const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"]

console.log(`Given array is ["Banana","Orange","Apple","Mango","Water Melon"]`);

let firstElement = arrayFruits[0]
console.log(`1) First Elemnt is : ${firstElement}`);

let arrayLength = arrayFruits.length;
let LastElement = arrayFruits[arrayLength-1]
console.log(`     last Element : ${LastElement}`);

arrayFruits.unshift("PaPaya");
console.log(`2) Add "PaPaya" element, the Array is:  ${arrayFruits}`);

arrayFruits.splice(4,1);
console.log(`3) Remove "Mango" element, the Array is: ${arrayFruits}`);

// arrayFruits[arrayFruits.length]= "Pineapple"; 
 arrayFruits.push("Pineapple")
console.log(`4) Add "Pineapple" element, the Array is:  ${arrayFruits}`);

arrayFruits.splice(4,0,"Dragun Fruit");
console.log(`5) Add "Dragun Fruit" element, the Array is:  ${arrayFruits}`);

arrayFruits.splice(2,1,"Kiwi");
console.log(`6) Replace "Kiwi" Element, the Array is:  ${arrayFruits}`);

let sliceE = arrayFruits.slice(1,4);
console.log(`7)Slice element from 1 to 4 index, the Array is:  ${sliceE}`);

let arrayLengthA = arrayFruits.length-3;
let selectLast3 = arrayFruits.slice(arrayLengthA,)
console.log(`8)Select lasr 3 elements, the Array is:  ${selectLast3}`);
