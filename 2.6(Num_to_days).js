/*Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)*/

let num = prompt("Enter a number between 1 and 7");
num = parseInt(num);
/* ==> See how to convert string into numbers https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=awesome%22))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,base%20in%20a%20numeral%20system.
 */

switch (num) {
  case 1:
    alert("Monday");
    break;

  case 2:
    alert("Tuesday");
    break;

  case 3:
    alert("Wednesday");
    break;

  case 4:
    alert("Thursday");
    break;

  case 5:
    alert("Friday");
    break;

  case 6:
    alert("Saturday");
    break;

  case 7:
    alert("Sunday");
    break;

  default:
    alert("I said between 1 and 7");
}

/*  Test WITH ARRAY/object but failed

OBJECT:

const weekdays = {
    '1': Monday, '2':Tuesday, '3': Wednesday, '4': Thursday, '5': Friday, '6': Saturday, '7': Sunday};


ARRAY: 
['1']:
    "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
];
index = 0;

num.forEach ()*/
