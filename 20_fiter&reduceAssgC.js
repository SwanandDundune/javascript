
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

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const arrayWipro = array_employees.filter((employee)=>{
           return employee.emp_company=="Wipro";
})
const arraywiproName = arrayWipro.map((employee)=>{
          return employee.emp_name;
});
console.log("All employees from 'wipro' company : ",arraywiproName);

console.log(`---------------------------------------------------------------------------------------------------`);
const arrayDep = array_employees.filter((element)=>{
           return element.emp_dept=="IT" || element.emp_dept=="HR";
});

const arrayDepResult = arrayDep.map((element)=>{
    return element.emp_name || element.emp_dept; 
    
})
console.log("All employee from 'IT' and 'HR' Department: ",arrayDepResult,);

console.log(`---------------------------------------------------------------------------------------------------`);

const arrayId = array_employees.filter((employee)=>{
    return employee.emp_id>50;
})
const arrayResult = arrayId.map((employee)=>{
   return employee.emp_name;
});
console.log(" List of employees whose name id is greater than 50 : ",arrayResult);

console.log(`---------------------------------------------------------------------------------------------------`);

const arrayStartAvm = array_employees.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")
})
const arrayStartWith = arrayStartAvm.map((employee)=>{
   return employee.emp_name;
});
console.log(" Employees whose name start with letter 'A' or 'V' or 'M': ",arrayStartWith);

console.log(`---------------------------------------------------------------------------------------------------`);

const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sulSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log("Average salary of All deaprtments: ",sulSalary/empSalaries.length);

console.log(`---------------------------------------------------------------------------------------------------`);

const arrayITDep = array_employees.filter((employee)=>{
    return employee.emp_dept=="IT";
})
 const arrayIt = arrayITDep.map((employee)=>{
    return employee.emp_salary;
 })
 

const arraySalaryIT = arrayIt.reduce((runningTotal,value )=> {
           return runningTotal+value;
});
console.log("Average salary of employes of IT Department: ",arraySalaryIT/arrayITDep.length);

console.log(`---------------------------------------------------------------------------------------------------`);

