const person = {
    name: "Stew",
    age: 54
}
function sayHello(company) {
    console.log(` ${person.name} ${person.age}  ${company}`);
}

sayHello.call(person, "Apple" );

console.log(`------------------------------------------------------------------------------------------------`);
console.log("apply()"); 
//  <==== apply method 
sayHello.apply(person, ["Apple" , "CEO"] );

console.log(`------------------------------------------------------------------------------------------------`);

console.log("bind()");
// bind method 
let funRef = sayHello.bind(person);

funRef("Apple" , "CEO" );