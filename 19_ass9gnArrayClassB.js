class employee {

    constructor(emp_id , emp_name,emp_dept,emp_salary,emp_company) {
                    this.emp_id = emp_id;
                    this.emp_name = emp_name;
                    this.emp_dept = emp_dept;
                    this.emp_salary = emp_salary;
                    this.emp_company =emp_company;
           }
}
const emp_anil = new employee (22, "Anil","IT",50000,"Tcs");
const emp_radha = new employee (33, "Radha","HR",74000,"Wipro");
const emp_rishi = new employee (55, "Rishi","finance",47000,"Tcs");
const emp_sonali = new employee (66, "Sonali","finance",45000 ,"Infy");
const emp_monika = new employee (77, "Monika","IT",40000,"Wipro");
const emp_viny = new employee (88, "Vinayak","IT",75000,"Tcs");
const emp_mahi = new employee ( 99, "Mahesh","HR",85000,"Infy");


let  Array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

for (const employee of Array) {
    if (employee.emp_company=="Tcs") {
        console.log("Employee Name:",employee.emp_name, ",","  Company Name:",employee.emp_company);
    }
}

console.log(`---------------------------------------------------------------------------------------------------------------------`);

for (const employee of Array) {
    if (employee.emp_dept=="finance") {
        console.log("Employee Department:",employee.emp_dept, "   Employee Name:",employee.emp_name);
    }
}

console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`Employee start with "R" :`);

for (const employee of Array) {

    if (employee.emp_name.startsWith("R")   ) {
    console.log(employee);
    }
}
console.log(`--------------------------------------------------------------------------------------------------------------------`);

for (const employee of Array) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(employee);
    }
}
console.log(`---------------------------------------------------------------------------------------------------------------------`);

for (const employee of Array) {
    if (employee.emp_company=="Infy") {
        console.log(employee);
    }
}
console.log(`=====================================================================================================================`);