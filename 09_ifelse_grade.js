function voteEligibility(age){
    console.log(`----------------------------------------------------------------------------`);
    if (age==null || age==undefined ||  age<=0 || age>120 || age<=(-0) ) { 
        console.log(`Your age: ${age} ---> This is In Valid date `);
        
    } else {
         if (age<18) {
        console.log(`Your age: ${age} ---> You are not eligible for Voting `);
               
         } else {
        console.log(`Your age: ${age} ---> You are eligible for Voting `);
            
         }
    }
       

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log(`===================================================================================`);


