function isPalindrome(element){
     const len = element.length;
     for (let index = 0; index < len/2 ; index++) {
         if (element[index] !== element[len-1-index]) {
            
         console.log(`"${element}" :  is not Palindrome`);
            return;
         }
    
     }
     console.log(`"${element}" :  is Palindrome`);
     return ;
          
      
}
console.log(`-----------------------------------------------------------------`);
isPalindrome( "madam");
console.log(`-----------------------------------------------------------------`);
isPalindrome( "141")
console.log(`-----------------------------------------------------------------`);
isPalindrome( "sunday");
console.log(`-----------------------------------------------------------------`);
isPalindrome( "mom");
console.log(`-----------------------------------------------------------------`);
isPalindrome( "listen");
console.log(`-----------------------------------------------------------------`);
isPalindrome( "dad");
console.log(`-----------------------------------------------------------------`);

