const professor = {
   name : "Rupesh Patil",
   subject: "Angular",
   height: "5.8",
   age : 27,
   city: "pune",
   degrees :{
    engineering: "CSC",
    PHD: "Advcomputing",
    M_tech: "Advance Electronic"
   },
   certificates : ["Hacker Rank Participation","Certificates in IFF course","Certificate in Adv Programming"],
   eduction: function () {
       console.log("4) Professor total Degress are :", this.degrees);
   }


};


console.log("1) Object with 5 properties", professor);
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);


console.log("2) Nested object 'degrees' added",professor.degrees); 
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);


console.log("3) Certificate array elements are:",professor.certificates); 
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);


professor.eduction();
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);


professor.TotalExeriance = "14 yrars"
console.log("4) Total Experiance is:", professor.TotalExeriance);
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);


professor.city = "Mumbai";
console.log("5) Modify Existing Property city pune : Mumbai ");
console.log(professor);
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);

professor.certificates.push ("Oracle Certified")
arrayLength = professor.certificates.length;
lastElement = professor.certificates[arrayLength-1];
console.log(`6) Last element of array certificate: "${lastElement}"`);
console.log(`----------------------------------------------------------------------------------------------------------------------------------`);




































