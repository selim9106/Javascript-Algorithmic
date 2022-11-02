/*Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

Write a documentation for the calcSurface function. */


let firstsize = prompt("Enter the width of the rectangle");
let secondsize = prompt("Enter the height of the rectangle");
calcSurface(firstsize, secondsize);


function calcSurface(width,height) {
  let surface = width*height;
  alert("the rectangle area based on the data you entered is " + surface);
}


// function calcSurface(width, height) {
//   return width * height;
// }

// let width = parseInt(
//   prompt("Enter the width of the rectangle you wish to calculate the surface")
// );
// let height = parseInt(
//   prompt("Enter the height of the rectangle you wish to calculate the surface")
// );

// alert("The surface if the rectangle is " + calcSurface(width, height));
