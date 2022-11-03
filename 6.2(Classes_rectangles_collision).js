// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
    constructor(topLeftXpos, topLeftYpos, width, length) {
        this.topLeftXpos = topLeftXpos;
        this.topLeftYpos = topLeftYpos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        if (
            (this.topLeftXpos < (otherRectangle.topLeftXpos + otherRectangle.width)) && ((this.topLeftXpos + this.width)>otherRectangle.topLeftXpos) && (this.topLeftYpos<(otherRectangle.topLeftYpos + otherRectangle.length)) && ((this.length + this.topLeftYpos) > otherRectangle.topLeftYpos)
            ) {return true} else {return false};
    }
}

let rect1 = new Rectangle(2, 4, 4, 3);
let rect2 = new Rectangle(7, 5, 4, 3);
let rect3 = new Rectangle(3, 6, 4, 3);

console.log(rect1.collides(rect2)); // return false as they won't collide
console.log(rect1.collides(rect3)); // return true as they will collide

// // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
// // https://masteringjs.io/tutorials/fundamentals/class

// todo Bonus: Create a program that generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

const generateRandomValue = (n) => Math.floor((Math.random() * n));

function generateRandomRectangle() {
    let x = generateRandomValue(400);
    let y = generateRandomValue(400);
    let w = generateRandomValue(100);
    let h = generateRandomValue(100);
    return new Rectangle(x, y, w, h);
}

function generateAllRectangles(times) {
    let rectangles = [];
    for (let i = 0; i < times; i++) {
        rectangles.push(generateRandomRectangle())
    }
    return rectangles;
}

let allrectangles = generateAllRectangles(50);

function testCollision(rectangles) {
    rectangles.forEach((rectangle, index) => {
        for (let i = 0; i < rectangles.length; i++) {
            if ((index != i) && (rectangle.collides(rectangles[i]))) {
                console.log("rectangle " + index + " collides with rectangle " + i);
            }
        } 
    })
}

testCollision(allrectangles);

let drawingzone = document.getElementById("drawing-zone");
console.log(drawingzone);

let ctx = drawingzone.getContext("2d"); 


allrectangles.forEach(rectangle => {
    ctx.beginPath();
    ctx.rect(rectangle.topLeftXpos,rectangle.topLeftYpos,rectangle.width,rectangle.length);
    ctx.stroke();
})