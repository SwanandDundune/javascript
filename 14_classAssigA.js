class  Vechicle {
        constructor( companyName, model , engine , transmission , price){
                         this.companyName = companyName ;
                         this.model = model;
                         this.engine = engine;
                         this.transmission = transmission; 
                         this.price = price ;

           }
           ShowDetails(){
            console.log(`CompanyName: ${this.companyName} , MOdel: ${this.model}, Engine: ${this.engine}, Transmission: ${this.transmission}, Ex.Showroom Price: ${this.price}`);
           }

}

  const rollsRoyve  = new Vechicle ( "Rolls-Royce", " ROlls-Royce Phantom", "6749 cc" , "Automatic" , "10.48 Cr") ;
  const lomborgini = new Vechicle  ("lomborgini", "Huracan","5204 cc", "Automatic", "4.2 Cr"  );
 const rangeRover = new Vechicle  ("Range Rover", "Autobiography","2996 cc", "Automatic","3.1 Cr"  );
const mgMotors = new Vechicle  ("MG motors", "Gloster","1996 cc", "Manual", "40.2 Lakh"  );

rollsRoyve.ShowDetails();
console.log(`-------------------------------------------------------------------------------------------------------------------------------------`);
lomborgini.ShowDetails();
console.log(`-------------------------------------------------------------------------------------------------------------------------------------`);
rangeRover.ShowDetails();
console.log(`-------------------------------------------------------------------------------------------------------------------------------------`);
mgMotors.ShowDetails(); 
console.log(`=====================================================================================================================================`);

class College {
    constructor(name , department,city,phoneNo){
                  this.name = name ;
                  this.department =  department ;
                  this.city = city;
                  this.phoneNo = phoneNo;
    }
    
}
const coep = new College ("COEP","Enginerring","pune",27014620 ); 

const singhad = new College ("Singhad","Enginerring","lonavala",2814620 );

const mit = new College ("MIT","MBA","pune",279914620 );

const raisoni = new College ("Raisoni","Enginerring","Satara",296514620 );


traverse (coep);
console.log(`----------------------------------`);
traverse (singhad);
console.log(`----------------------------------`);

traverse (mit);
console.log(`----------------------------------`);

traverse (raisoni);


function traverse( collageObject) {

     for (const key in collageObject) {
        if (Object.hasOwnProperty.call(collageObject, key)) {
            const element = collageObject[key];
            console.log(`${key}: ${element}`);
             
        }

     }

}
console.log(`=========================================================================================================================================`);
