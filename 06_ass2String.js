function stringHandsOn(){
    var stringN= "  Hey you are doing good, keep it up   ";
    console.log(`1) Given string is: ${stringN}`);



    var stringLength = stringN.length;
    console.log(`2) Length of String is: ${stringLength}`);


     var trimedStringN= stringN.trim();
     var lengthAfterTrim = trimedStringN.length;


     console.log( `3) After remove leading and trailing extra space length is: ${trimedStringN.length}`);

     console.log( `4)  Trimmed total Spaces: ${stringLength-lengthAfterTrim}` ); 
     

    var  charAtZeroIndex= trimedStringN.charAt() ;
    var  charAtLastIndex= trimedStringN.charAt(trimedStringN.length-1) ;

     console.log(`5) first char: ${charAtZeroIndex} , last char: ${charAtLastIndex} `);
     
     var splitResult= trimedStringN.split(" ");
     console.log(`6) Total words in  string: ${splitResult.length}`);

     var indexOfGood = stringN.indexOf("good")
     console.log(`7) index of word Good is : ${indexOfGood}`);

     var sliceResult= stringN.slice(22,40);
     console.log(`8) A. Substring of string at index22 by using slice method : ${sliceResult}`);

     var subResult= stringN.substring(22,40);
     console.log(`   B. Substring of string at index22 by using substring method : ${subResult}`);

    var searchResult= trimedStringN.includes("up");
    console.log(`9)String end with "up": ${ searchResult}`);

    var searchResultOne= trimedStringN.includes("Hey");
    console.log(`10)String end with "Hey": ${ searchResultOne}`);



}
stringHandsOn()
 