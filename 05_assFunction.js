function personalDetails(){
    console.log("Name: Swanand Dundune");
    console.log("Address: Hinjewadi phase 1 ,pune 411057");

}
personalDetails();

console.log("===============================================================================================================");

function details(firstName,lastName,collegeName){
    console.log("First Name:",firstName)
    console.log("Last Name:",lastName);
    console.log("collegeName:",collegeName);
    
}
details("Swanand","Dundune","SBGI")

console.log("===============================================================================================================");

function swapValuesDude(boy,girl){
    console.log("Before Swap ===>", boy,girl);
     var temp=boy;
     var boy =girl;
     var girl=temp
    console.log("After Swap ===>", boy,girl);


}
swapValuesDude( "Virat","Anushka")
console.log("-------------------------------------------------------------------");
swapValuesDude( "1000","2000")



console.log("===============================================================================================================");

function addThreeValues(a,b,c){
    var result = a+b+c;
    console.log("Addition is:-",result);
}
addThreeValues(10.23,600,40)
addThreeValues("hello"," Good"," Moring")

