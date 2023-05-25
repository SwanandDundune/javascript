for (let index = 0; index <= 10; index++) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");
 
// for (let index = 0; index < array.length; index++) {
       
// }

console.log(`=================================================================================================================`);
   // // WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50  
      for (let index = 5; index <=50; index=index +5) {
          console.log(index);     
      }     
 



   console.log(`=================================================================================================================`);
//    wap to get 100to 80 in reversw order by decrementing 1 ---> 100 99 98 97 96 .....80

      for (let index = 100; index >=80; index= index-1) {
                console.log(index);
      }
 
   console.log(`=================================================================================================================`);
    
//  WAp to gwt table of 17 ......
for (let index = 17; index <=170; index=index+17) {
   console.log(index);
 }

console.log(`==============================================================================================================`);
//  WAP to get the table of 19 in reverse order 
      for (let index = 190; index >=19 ; index=index-19) {
console.log(index);         
      }

console.log(`=========================================================================================================`);
// WAP to reverse the string --> Javascript--->tpircsavaj
      
             var str="Javascript";
             var rev ="";
      for (let index = 0; index < str.length; index =index+1) {
           var char = str.charAt(index);
          var rev = rev.concat(char);
          
      }
      console.log(rev);
       
console.log(`=========================================================================================================`);
 
      // reverse expression --->
          var str = "Javascript";
          var reverseString ="";
      for (let index = 9; index >= 0; index--) {
             var char = str.charAt(index);
          var reverseString = reverseString.concat(char);
      }
      console.log(reverseString);            
        


console.log(`=========================================================================================================`);
console.log(`=========================================================================================================`);


// for (let index = 190; index <=19; index=index-17) { 
//     console.log(index); 
// }
// console.log("After loop");
// console.log(`=====================================================================================`);


// // for (let index = 8; index <=80; index+8) {
// //     console.log(index);
    
// // }
// console.log(`=====================================================================================`);

// // for (let index = 8; index <=80; indec= index+2) {
// //     console.log(index);
    
// // }
// console.log(`=====================================================================================`);

// // JavaScript = J a v a S c r  i  p  t
// var str = "JavaScript"; // 9
// for (let index = 0; index < str.length; index++) { // 0  1   2
//      var char = str.charAt(index); // J  a v
//      console.log(char); 
// }

// console.log(`=====================================================================================`);

// // WAP to reverse the string --> JavaScript --> tpircSavaJ
// // JavaScript -->
// // initialization = 9
// // condition index>=0
// // update expression index--
// var str = "JavaScript";
// var reverseString = "";
// for (let index = 9; index >= 0; index--) { // index = 9  8 
//     var char = str.charAt(index);
//     reverseString = reverseString.concat(char); 
// }
// console.log(reverseString);

// console.log(`=====================================================================================`);


// function reverseWord(word){
//     var reverseString = "";
//     var wordLength = word.length - 1;
//     for (let index = wordLength; index >= 0; index--) { // index = 9  8 
//         var char = word.charAt(index);
//         reverseString = reverseString.concat(char);    
//     }
// console.log(reverseString);
// }
// reverseWord("JavaScript");
// reverseWord("Google Chrome");
// reverseWord("Developer"); 



