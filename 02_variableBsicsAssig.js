console.log("___Data type number___");

var height = 5.7;
console.log("1) height:", height, ",", "type:", typeof height);

var mobileRam = 8;
console.log("2) Mobile Ram :", mobileRam, ",", "type:", typeof mobileRam);

var age = age;
console.log("3) Age:", age, ",", "type:", typeof age);

console.log("=======================================================");
console.log("___Data type Boolean___");

var isBachelor = true;
console.log("1) IS Bachelor:", isBachelor, ",", "type:", typeof isBachelor);

var afraidOfComputerProgramming = false;
console.log("2) Afraid of computer programming:", afraidOfComputerProgramming, ",", "type:", typeof afraidOfComputerProgramming);

var knowHtmlCss = true;
console.log("3) Know HTML & CSS:", knowHtmlCss, ",", "type:", typeof knowHtmlCss);

console.log("=======================================================");
console.log("___Data type String___");

var Name = "Elon Musk";
var position = "Ceo of Twitter,BOring,SapceX";
console.log("name:", Name, ",", "type:", typeof Name);
console.log("Position:", position, ",", "type:", typeof position);

console.log("=======================================================");

var defineNull = "null means variable is declared but it's value is assigned as null value So we get typeof undefined as undefined and typeof null as object";
console.log("Null:-",defineNull); 

var pinCode=null;
console.log("Eg =Pincode:",pinCode);

var defineUndefined = "undefined means variable is declared but it's value is not assigned";
console.log("Undefined:-", defineUndefined);

var address;
console.log("Eg = addess:", address);

var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);
