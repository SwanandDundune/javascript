var fullName = "Swanand Dundune"
var stringlength = fullName.length
console.log("total number of chara in given string is: ", stringlength);

var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of character in given string is: ", greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index: ",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index: ",charAtLastIndex);

var charAtIndexTwenty= greet.charAt(20);
console.log("Char at index 20 is:", charAtIndexTwenty);

var firstName = "Gajanan";
var lastName = " Kharat";

var concatString = firstName.concat(lastName);
console.log("Concat String is: ", concatString);

var indexOfM = greet.indexOf("M")
console.log("Index of M is: ", indexOfM);

var indexOfo = greet.lastIndexOf("o");
console.log("Index of o is: ", indexOfo);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace: ", replaceValue);


var firstName = "     Gajanan      ";
var firstNameLength = firstName.length;
console.log("Before trim length is: ", firstNameLength );

var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After Trim firstName is: ",trimmedFirstName, trimmedFirstName.length );
console.log("Trimmed total spaces : ", firstNameLength-lengthAfterTrim);

var lastName = "        Kharat   ";
lastName.trimEnd();

var firstName = "Gajanan";
var result = firstName.length;
console.log("Total char available in firstName is:",result ); 

console.log("=====================================================================================================================================");

var greet = "Good Morning";

var includeResult = greet.includes("ing");

console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);
 

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);


var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

console.log("=====================================================================================================================================");




let num  = ["How" , "are" ,"you", "mate" ];

for (let index = 0; index < num.length; index++) {
   
     let word = num[index];

    fcha = word.charAt(0).toUpperCase();
    lcha = word.slice(-1).toUpperCase();

    result = fcha + word.slice(1,-1) + lcha;

   num[index] = result;
  
    
}
let newWord = num.join(' ');
  console.log(newWord);
