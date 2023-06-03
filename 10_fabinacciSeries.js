 const num = 500;

 let x = 0;
 let y = 1 ;

 let fn = x + y ;
console.log(`Fabonicci Series is:-`);
console.log(x);
var result =0;
 while ( fn <num) {
   console.log(fn);

    fn = x + y;
    x =y;
    y = fn;
 result += fn;
      
}

