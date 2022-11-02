/* Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6. */

let numtoadd = prompt("Enter how many numbers you want to add");
let times = parseInt(numtoadd);
let sum = 0;
for (let i=1; i<=times; i++) {
  let n = parseInt(prompt('Enter a number'));
  sum += n;
};

alert("The sum of your chosed numbers is " + sum);



// let n = parseInt(prompt("Enter how many numbers you want to add"));
// let sum = 0;
// for (i = 0; i < n; i++) {
//   let numbers = parseInt(prompt("Enter a number"));
//   sum += numbers;
// }
// alert(sum);
