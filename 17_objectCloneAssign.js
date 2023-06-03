const arrayNums = [20,3,4,56,90,400,49];
console.log(`Original Array: [${arrayNums}]`);

const cloneArray = arrayNums;

 cloneArray.push(55,66);
 console.log(`Clone Array:[${cloneArray}]`);

console.log(`Clone Array with update value 55 and 66 is: [${cloneArray}]`);

console.log(`-----------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`Original Array: [${arrayNums}]`);
const clonedArray = [...arrayNums];

     arrayNums.push(10,25);
     
console.log(`Original Array with update value 10 and 25 is: [${arrayNums}]`);

 console.log(`Clone Array: [${clonedArray}]`);

console.log(`-----------------------------------------------------------------------------------------------------------------------------------------------`);

const arrayEven = [2,30,14,8];

const totalAray = [...arrayEven,...arrayNums];
console.log(`Merge array is: ${totalAray}`);
console.log(`===============================================================================================================================================`);

const employee_info = {
    emp_id: 27,
    emp_name : "John Doe",
    Salary: {
        jily_month: "40,0000INR",
        aug_month:  "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli,431202",
        },
        city: "Mumbai",
        State: "Maharastra",
        country: "India",
    },
    mobiles: ["+91 8600 3456 88","1800- 4567 32","91-9096 5678 77"]
}

console.log("Employee Address is:",employee_info.address.locality,",","City:",employee_info.address.city,",","State:",employee_info.address.State,",","Country:",employee_info.address.country);

console.log(`-----------------------------------------------------------------------------------------------------------------------------------------------`);

const deepClonedEmplo = JSON.parse(JSON.stringify(employee_info));

console.log("Original Object Salary:", employee_info.Salary.jily_month);
employee_info.Salary.jily_month = "80,0000INR";
console.log("Updated object Salary:",employee_info.Salary.jily_month);

console.log(`-----------------------------------------------------------------------------------------------------------------------------------------------`);

console.log("Original object County:",employee_info.address.country);

employee_info.address.country = "United Kingdom";

console.log("Updated object County:",employee_info.address.country);

console.log(`===============================================================================================================================================`);
