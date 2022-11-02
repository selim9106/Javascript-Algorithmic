// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

// Examples:
// Point A = [1, 1], point B = [2, 2] => 1
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5.65

let x, y;

function calcDistance(x,y) {
    let x1 = x[0], x2 = x[1], y1 = y[0], y2 = y[1];
    let distX = x2 - x1, distY = y2 - y1;
    let squareX = distX * distX, squareY = distY * distY;
    let distance = (parseFloat(Math.sqrt(squareX + squareY))).toFixed(2);
    return distance;
}

let A = [-2, 2], B = [2,-2];
console.log(calcDistance(A,B));


// * calculate distance between two points
// // https://javascript.plainenglish.io/javascript-algorithm-distance-between-points-7fe0026857e3
// * parse to two decimals
// // https://bobbyhadz.com/blog/javascript-parse-float-with-two-decimal-places