function countCharA(word ) {
  count= 0;
         
    for (let index = 0; index < word.length ; index++) {
        var charL = word.charAt(index);

       if (charL=="a" || charL=="A") {
         count++;
       }
    }

}
countCharA("I Am Learning JavaScript, The Language of internet");
console.log(`The given string is ---> "I Am Learning JavaScript, The Language of internet". Total count of "a" and "A" is :  ${count}`);

countCharA("favourite movieMy is LAggAn")
console.log(`The given string is --> "favourite movieMy is LAggAn". Total count of "a" and "A" is :  ${count}`);

