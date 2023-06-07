class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`----------- TCS Employee Deatils --------------------------------------------------------------------------`);

array_employees.forEach((element)=> {
    if ( element.emp_company=="TCS") {
        console.log("Employee Name:",element.emp_name, "    Employee Company:",element.emp_company);
    }
})

console.log(`------------ Employee Salary >= 50000 ----------------------------------------------------------------------`);

array_employees.forEach((element)=>{
    if (element.emp_salary >= 50000) {
        console.log(element);
    }
})

console.log(`------------ Sum of All Employees Salary  ------------------------------------------------------------------`);
let salarySum = 0;
array_employees.forEach((employee)=>{
    salarySum = salarySum + employee.emp_salary
})
console.log("Sum of all Employee Salary:", salarySum);

console.log(`------------- Average Salary  -------------------------------------------------------------------------------`);

let salarySums = 0;
array_employees.forEach((employee)=>{
    salarySums = salarySums + employee.emp_salary
})
let averageSalary = salarySum / array_employees.length;
console.log("Average salary is: ",averageSalary);

console.log(`------------- Find "IT" or "HR" department employees whose salay >= 750000 ------------------------------------`);

array_employees.forEach((element)=>{
    if ((element.emp_dept=="IT"||element.emp_dept=="HR") && element.emp_salary >= 75000) {
        console.log(element);
    }
})

console.log(`=======================================================================================================================`);

