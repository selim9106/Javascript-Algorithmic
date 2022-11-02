/*Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

Write a documentation for the rand10() function.

You will have to search on Google how to generate random numbers in JavaScript for this exercise. */

function rand10() {
  let result = Math.floor(Math.random() * 10) + 1;
  return result;
}

alert(rand10());

/* Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive);
Math.random() used with Math.floor() can be used to return random integers.

Example ==> Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

/*https://www.w3schools.com/js/js_random.asp */
