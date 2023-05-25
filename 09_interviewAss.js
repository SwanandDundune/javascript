var tcs = function(gradScore,hscScore,sscScore,candidateName){
     if (gradScore>=70 || hscScore>=80  ||sscScore>=90) {
           console.log(`Congrates ${candidateName} you are eligible for TCS interview.`);     
     } else {
        console.log(`Unfortunately ${candidateName} You are not eligible for. `);
     }
} 
tcs (80,86,90,"Swanand");
tcs (70,65,55,"Kiran");
tcs (60,79,88,"Vishal");
