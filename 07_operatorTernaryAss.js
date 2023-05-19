
console.log(`1) Male Mirrage Eligibility:-`);
 
function maleMarriageEligibility (gender,age,boyName){
            var result = (gender=="male" && age>=21)? `  ${boyName} you are eligible for MIrrage`: `  ${boyName} you are not eligible for MIrrage`;
            return result;


}
var returnValue = maleMarriageEligibility("male","25","Bill gates")
       console.log(`${returnValue}`);
var returnValue = maleMarriageEligibility("male","17","Stew jobs")
console.log(`${returnValue}`);

console.log(`===============================================================================================`);
console.log(`2) Female Mirrage Eligibility:-`);

function femaleMarriageEligibility (gender,age,girlName){
     var result = (gender=="female"&& age>=18)? `    ${girlName} you are eligible for MIrrage `:  `    ${girlName} you are not eligible for MIrrage`
           return result;
}
 var returnValue =femaleMarriageEligibility("female","16","jenifer") 
 console.log(returnValue);

 var returnValue =femaleMarriageEligibility("female","27","Malinda Gates") 
 console.log(returnValue);
 