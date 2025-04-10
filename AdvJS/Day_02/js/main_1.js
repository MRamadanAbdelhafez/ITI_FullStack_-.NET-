function Rectangle(width, height ) {
    this.width= width;
    this.height= height;
    this._getCount = ++(Rectangle.count);
}
Rectangle.count = 0;
Rectangle.getCount = function() {
    return Rectangle.count;
}
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.width + this.height);
}
Rectangle.prototype.toString = function() {
    console.log("this is "+ this.constructor.name+" class number "+ this._getCount);
    console.log("Width: " + this.width + ", Height: " + this.height);
    console.log("Area: " + this.getArea());
    console.log("Perimeter: " + this.getPerimeter());
    console.log("-------------------------");
}
var rect1 = new Rectangle(10, 20);
var rect2 = new Rectangle(30, 40);
var rect3 = new Rectangle(50, 60);
var rect4 = new Rectangle(70, 80);
console.log (Rectangle.getCount());
rect1.toString();
rect2.toString();
rect3.toString();
rect4.toString();