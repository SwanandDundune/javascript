const arrayNumbers = [ 20,11,40,25,37,49,9,90,60,2,19];

const arrayGreaterThan50 = arrayNumbers.filter((element)=>{
       return  element>50;
});
console.log("Greater than 50 numbers: ",arrayGreaterThan50);

console.log(`----------------------------------------------------------------------------------`);

const arrayEven = arrayNumbers.filter((element)=>{
return element%2==0;
});
console.log("Even NUmbers : ",arrayEven);

console.log(`----------------------------------------------------------------------------------`);


const arrayOdd = arrayNumbers.filter((element)=>{
    return element%2 ==1;
    });
    console.log("Even NUmbers : ",arrayOdd);

console.log(`----------------------------------------------------------------------------------`);

const arraMUlOf5 = arrayNumbers.filter((element)=>{
    return element%5 == 0;
    });
    console.log("Number which are Multiple of 5: ",arraMUlOf5);

console.log(`----------------------------------------------------------------------------------`);

const arrayBetweenNumber = arrayNumbers.filter((element)=>{
    return element>=20 && element<=50;
    });
console.log("Number wchich are between 20 and 50: ",arrayBetweenNumber);

console.log(`======================================================================================`);