const array = [10,5,'a','b','h',11];


console.log(" Original Array:-" ,array);

const number = array.filter((element)=>{
        return  typeof element === 'number';

});

const alphabet = array.filter((element)=>{
    return typeof element === "string";
})

const sortedNumber = number.sort((n1, n2 ) => {
  return n1 >n2 ? 1 : -1 ;
});
console.log("Sorted Number:-" ,sortedNumber);
console.log("Sorted Alphabets:-" ,alphabet);