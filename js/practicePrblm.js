// 10 Problems Using Loops

// 1. Multiplication Table

// Write a program to print the multiplication table of a given number using a loop.

// let num = 5;

// for(let i = 1; i <= 10; i++){
//     console.log(num + "*" + i+ "=" + num*i)
// }

// 2. Factorial of a Number
// Calculate the factorial of a given number using a for loop.

// let num = 5;
// let out = 1;
// for(let i=1; i<= num; i++){

//     out *= i;   // Multiplies out by the current value of i
   
// }   
//  console.log(out)


// 3. Sum of Natural Numbers

// Find the sum of the first n natural numbers using a loop.
//  let n = 10;
//  let sum = 0
//  for( let i= 1; i<= 10; i++){
//       sum+= i;                 // Add sum by the current value of i
//  }
//  console.log(sum)


// 4. Reverse a Number

// Write a program to reverse the digits of a number using a loop.

// let num = 12345;
// let str = num.toString();
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed)
     
// }
// let res = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(res)


// 5. Print Even Numbers
// Print all even numbers from 1 to 50 using a loop.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 6. Count the number of digits in a given number using a loop.

// let num = 123456789;
// let count = num.toString().length;
// console.log(count);


// 7. Fibonacci Series
// Generate the first n terms of the Fibonacci sequence using a loop.

// let n = 10;
// let a = 0;
// let b = 1;
//  for ( let i = 1; i<= n; i++){
//     console.log(a);
//     next = a + b;
//     a = b;
//     b = next;
//  }


 
// 8. Sum of Digits
// Find the sum of the digits of a number using a loop

// function sum ( ...args){
//      let sum = 0;
//       for (let i = 0; i < args.length; i++){
//         sum+= args[i]
//       }
//       return sum;
