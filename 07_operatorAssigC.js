console.log(`<<<<<<<<<<<<<<<<<<<<  TCS Interview Eligibility  >>>>>>>>>>>>>>>>>>>>>>>`);
console.log(`-------------------------------------------------------------------------`);
   

var tcsInterview = function(gradeScore,hscScore,sscScore,candidateName){
                
var result = (gradeScore>=70) || (hscScore>=80) || (sscScore>90)? 
 `Congrates! "${candidateName}" you are eligible for TCS Interview`: `Unfortunately "${candidateName}" you are not eligible for TCS Interview`

               console.log( `${result}` );


}
tcsInterview(80,86,90,"Swanand");
tcsInterview(70,65,55,"Kiran");
tcsInterview(60,79,88,"Vishal");
  
  console.log(`--------------------------------------------------------------------------`);
         







