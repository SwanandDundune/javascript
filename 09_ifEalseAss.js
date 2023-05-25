 console.log(`============================================================================================================`);

var checkLeapYear = function (leapYear) {
             if (leapYear==undefined || leapYear==null || isNaN(leapYear)) {
                       console.log(`Your entered value is invalid : ${leapYear}`);
             } else {
                if ( leapYear % 100 != 0 && leapYear%4 ==0) {
                              console.log(`"${leapYear}" year is leap year`);
                } else {
                    if (leapYear%400 ==0) {
                        console.log(`"${leapYear}"  year is leap year`);
                          
                    } else {
                        console.log(`"${leapYear}"  is not leap number`);
                    }
                }
             }
}
checkLeapYear(2020);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(1991);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(2022);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(NaN);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(1945);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(null);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(1600);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear("Twenty");
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(1750);
console.log(`---------------------------------------------------------------------------------------------------`);
checkLeapYear(undefined);

console.log(`============================================================================================================`);








// if (( leapYear%4 == 00 )&& ( leapYear % 400 == 0 || leapYear%100 != 0 ) ) {
//     console.log(`${leapYear} is leap year}`);
// } else {
// if (leapYear==undefined && leapYear==) {
    
// } else {
    
