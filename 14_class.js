// class Student {
//     constructor(name, age, gender,city){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.city = city;
//     }
//     showDetails(){
//         console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city} `);

//     }
// }
// const abhijeet = new Student("Abhijeeet", 21, "Male", "Pune");
// const poonam = new Student("Poonam", 20, "Female", "Mumbai" );
// const rushi = new Student("Rushikesh", 23, "Male", "Indor");
// const snehal = new Student("Snehal", 22, "Male", "Pune");

// abhijeet.showDetails(); 
// poonam.showDetails();
// rushi.showDetails();
// snehal.showDetails();

console.log(`----------------------------------------------------------------------------------------------------------------------`);






class Student {
    constructor(name, age, gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    showDetails(){
        console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city} `);
    }
}
const abhijeets = new Student("Abhijeeet", 21, "Male", "Pune");
const poonams = new Student("Poonam", 20, "Female", "Mumbai" );
const rushis = new Student("Rushikesh", 23, "Male", "Indor");
const snehals = new Student("Snehal", 22, "Male", "Pune");

const array = [abhijeets, poonams, rushis, snehals];

for (const student of array) {
    student.showDetails();
}

const result = abhijeets instanceof Student;
console.log(result);


class College{

}

const res = rushis instanceof College;
console.log(res);

