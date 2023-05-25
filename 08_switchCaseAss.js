function Months(monthNum) {
  switch (monthNum) {
    case 1:
      console.log(`Month is: January as month number is  ${monthNum}`);
      break;

    case 2:
      console.log(`Month is: Febuary as month number is  ${monthNum}`);
      break;
    case 3:
      console.log(`Month is: march as month number is  ${monthNum}`);
      break;
    case 4:
      console.log(`Month is: April as month number is  ${monthNum}`);
      break;
    case 5:
      console.log(`Month is: May as month number is  ${monthNum}`);
      break;
    case 6:
      console.log(`Month is: Jun as month number is  ${monthNum}`);
      break;

    case 7:
      console.log(`Month is: Jully as month number is  ${monthNum}`);
      break;
    case 8:
      console.log(`Month is: August as month number is  ${monthNum}`);
      break;
    case 9:
      console.log(`Month is: September as month number is  ${monthNum}`);
      break;
    case 10:
      console.log(`Month is: Octomber as month number is  ${monthNum}`);
      break;
    case 11:
      console.log(`Month is: November as month number is  ${monthNum}`);
      break;
    case 12:
      console.log(`Month is: December as month number is  ${monthNum}`);
      break;
    default:
        console.log(`Invalid input Data ==> Month is ${monthNum}`);
      break;
  }
}
Months(1);
Months(8);
Months(6);
Months(11);
Months(2);
Months(4);
Months(9);
Months();
Months(null);
Months(19);
Months(undefined);
Months(100);


