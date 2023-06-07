const str = "How are you mate";
  const word = str.split(" ");

  for (let index = 0; index < word.length ; index++) {
     
   let newWord = word[index];

   firstName = newWord.charAt(0).toUpperCase();
    lastName = newWord.charAt(newWord.length-1).toUpperCase();

    result = firstName + newWord.slice(1,-1) + lastName;
    word[index] = result;
}
let newResult = word.join(' ')
console.log(newResult);




 console.log(`------------------------------------------------------------------------------`);
  
const array = [11,3,4,11,4,7,3];
// const duplicates = [];
for (let i = 0; i < array.length; i++) {
         for (let j = i +1 ; j < array.length; j++) {
            if (array[i]==array[j]) {
              array.push(array[i]);
            }
            
         }
}
console.log(arr);

