// var a=10;

// function double(num)
// {
//     return num * 2;
// }
// var result1 =   double(15);
// console.log(result1)
// var result2 =   double(a);
// console.log(result2)

let a=10;
function outer(){
 let a=10;
 console.log(a)

       function inner(){
        console.log(a)
        
          function inner1(){
            let b=20;
            console.log(a,b)
          }

    }  
}
console.log(a,b,a)