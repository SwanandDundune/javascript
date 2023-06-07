let display = () => {
   console.log(`Good morning, Today is Monday`);
}
display();
console.log(`-----------------------------------------------------------------------------------------------------------`);

let multiply = ( num1 ,num2 ,num3=1) => {
     let result = num1*num2*num3;
console.log("   Multiplication is = ",result);

           
}
console.log(`1) Passed values are: 5*5*2`);
multiply(5,5,2);
console.log(`2) Passed values are: 10*4*1`);

multiply(10,4);

console.log(`-----------------------------------------------------------------------------------------------------------`);


let arrayFun = (n1 ,n2,n3,n4,n5 )=> {
  let result = n1+n2+n3+n4+n5;
  return result;

}
let numAdd = arrayFun( 100,100,200,349,756);
console.log("Addition of number is:",numAdd);

let stringNum = arrayFun("I am ","learning ","ES6 ","features ","in depth. ");
console.log("Addition of words is: ",stringNum);