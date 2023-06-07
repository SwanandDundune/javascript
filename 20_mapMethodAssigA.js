const arrayNUmbers = [20 , 11 , 40 ,25 ,23, 11 , 9 , 31 , 60 ,2 , 19];

arrayNUmbers.map((element)=> {
  return element+10;
})
console.log(`1) Add 10 into each element the new array is:-`);
console.log(arrayNUmbers);

console.log(`---------------------------------------------------------------------------------------------------`);

const squreArray =  arrayNUmbers.map((element)=> {
    return element*element;
  })
console.log(`2) Square the each array element is :-`);
console.log(squreArray);

console.log(arrayNUmbers);

console.log(`---------------------------------------------------------------------------------------------------`);

const addIndex = arrayNUmbers.map((element,Index)=>{
  return element+Index;
})
console.log(`Add index value into it's corresponding each array element the new array is:-`);
console.log(addIndex);

console.log(`======================================================================================================`);