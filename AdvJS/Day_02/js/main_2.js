
function Shape(width,height) {
    if (this.constructor === Shape) {
        throw new Error("Cannot create instance of abstract class Shape");
    }
    this.width= width;
    this.height= height;

}

function Rectangle(width, height ,isInternal) {
    
    if (!isInternal  && Rectangle.count >= 1) {
        throw new Error("Cannot create more than one Rectangle instance.");
    }
    Shape.call(this, width, height);
        
    if (!isInternal ) {
        Rectangle.count++;
    }
    
}
Rectangle.count = 0;
Rectangle.getCount = function() {
    return Rectangle.count;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;


Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.width + this.height);
}
Rectangle.prototype.toString = function() {
    console.log("this is "+ this.constructor.name+" class");
    console.log("Width: " + this.width + ", Height: " + this.height);
    console.log("Area: " + this.getArea());
    console.log("Perimeter: " + this.getPerimeter());
    console.log("-------------------------");
}
function Square(width,isInternal) {
    
        if (!isInternal  && Square.count >= 1) {
        throw new Error("Cannot create more than one Square instance.");
        }
        
    Rectangle.call(this, width, width,true);
    if (!isInternal) {
        Square.count++;
        }
}
Square.count = 0;
Square.getCount = function() {
    return Square.count;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var rec1 = new Rectangle(5, 10);
var sqr = new Square(5);

rec1.toString();
sqr.toString();
console.log(Square.getCount());
console.log(Rectangle.getCount());