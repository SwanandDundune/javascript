let bankSbi = {
    bankName: "State bank of india",
    AccountNUmber : 123659546542,
    ifscCode: "SBI2697453",
    interestRate : "7.5%"
}
console.log(`-------------------Creating an Object bankSbi--------------------------`);
console.table( bankSbi );

let bankLocation ={
    interestRate : "7.4%",

    street : "Hinjawadi ph 1",
    city : "pune",
    pin : 416057
}
console.log(`-------------------Creating an Object bankLocation--------------------------`); 

console.table(bankLocation);

Object.assign(bankSbi , bankLocation) ;


console.table(bankSbi);


let rateOfInterest = {

       homeLoanInterest : "6.8 %",
       personalLoanInterest : " 8.6 %",
       dueLoanInterest : " 7.5 %" 

}

console.log(`-------------------Creating an Object rateOfInterest--------------------------`); 
console.table(rateOfInterest);


const mergedObject = Object.assign(bankSbi,bankLocation,rateOfInterest) ;
console.table(mergedObject);

const entries = Object.entries(mergedObject);

for (const key in entries) {
    if (Object.hasOwnProperty.call(entries, key)) {
        const value = entries[key];
        console.log(`${key}, ${value}`);
    }
}