// "The Manhattan Distance" or "Taxicab Geometry" is a way to express distance in terms of a sum (= "blocks") of x-distance and y-distance

// Design a function that takes 4 arguments: streetA, avenueA (the starting point in terms of street and avenue), streetB, avenueB (the ending point) and computes the number of blocks between the two points.

function manatthanDist(xa, ya, xb, yb) {
    return Math.abs(((xa - xb) + (ya -yb)));
}

console.log(manatthanDist(1, 1, 2, 2));//output: 2
console.log(manatthanDist(5, 4, 3, 2));// output: 4
