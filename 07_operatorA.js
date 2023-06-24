 console.log(`============OPERATOR ASSIGNMENT============`);
 console.log(`=============================================================================================================`); 

 console.log(`Write a normal function in such a way that it should accept one string value as argument.`);
    

function squareOfWordLength (str){
     

                    var result = str.length;
                    

                    console.log(` A. length of word in string is:  ${ result}`);
                    console.log(` B. Square of word in String is:  ${ result*result}`);
                    
}
squareOfWordLength("javaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer Smart")

console.log(`--------------------------------------------------------------------------------------------------------------`);

function str (){
    var result = "I am Angular Developer"
    console.log(`Given string is: "${result}"`);

    var resultA = result.length;
    console.log(`1) Length of given string: ${resultA}`);

    var resultB = result.split(" ");
    var resultC = resultB.length;

    console.log(`2.1) Division of length of string to the count of string words is:  ${resultA/resultC}`);
    console.log(`2.2) Multiplication of length of string to the count of string words is:  ${resultA*resultC}`);

 console.log(`=============================================================================================================`); 

      
}
str()






