// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

class Circle {
    constructor(xpos, ypos, radius) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xpos = this.xpos + xOffset;
        this.ypos = this.ypos + yOffset;
    }

    get surface() {
        return Math.PI * Math.pow(2, this.radius);
    }

}

let test = new Circle(2,3,4);
test.move(1,7);
console.log(test.surface);