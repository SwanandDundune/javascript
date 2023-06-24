console.log(`Given String : "I am very good IT Developer"`);

var word = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    count++;
  }
}
console.log(`   Total number of Vowels avalible in given string : ${count}`);

console.log(`===============================================================================================`);

function sumCube() {
  var sum = 0;
  for (let index = 1; index <= 5; index = index + 1) {
    var num1 = index * index * index;
    sum += num1;

    console.log(`Cube of given number is:  ${num1}`);
  }
  console.log(` Some of cubes are:  ${sum}`);
}
sumCube();

console.log(`==========================================================================================================`);

// function oddPositionedChars(inputString) {
//   let result = "";
//   for (let i = 0; i < inputString.length; i++) {
//     if (i % 2 == 1) {
//       result += inputString[i];
//     }
//   }
//   result = result.replace(/ +/g, "");

//   console.log(`Odd Positioned char : ${result}`);
// }
// console.log(`Given string is: "Hard work always pays back"`);
// oddPositionedChars("Hard work always pays back");

// console.log(
//   `------------------------------------------------------------------------------------------------`
// );
// console.log(`Given string is: "Soon I will be Angular IT champ" `); 

// oddPositionedChars("Soon I will be Angular IT champ");

console.log( `===================================================================================`);

function oddPositionedChars(inputString) {
  var str = "";
  for (let index = 0; index < inputString.length; index++) {
    var char = inputString.charAt(index);
           
    if (index % 2 != 0 && char != " ")  {
      str = str + char;      

     }
     
  }
   
  console.log( `${str}` );
      
}
oddPositionedChars("Hard work always pays back");
