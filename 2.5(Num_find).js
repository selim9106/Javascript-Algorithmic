/*Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).*/

let num = prompt("Enter your favorite number");
num = parseInt(num);

if (num == 42) {
  alert("Congratulations! You found the number we were looking for!");
} else {
  let num = prompt("Enter your favorite number");
  num = new Number(num);
}
