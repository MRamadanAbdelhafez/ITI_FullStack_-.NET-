function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
Rectangle.prototype.getperimeter = function() {
    return 2 * (this.width + this.height);
}
Rectangle.prototype.display = function() {
    console.log("Width: " + this.width + ", Height: " + this.height);
    console.log("Area: " + this.getArea());
    console.log("Perimeter: " + this.getperimeter());
    console.log("-------------------------");
}
var rec1 = new Rectangle(5, 10);
rec1.display();
var rec2 = new Rectangle(7, 14);
rec2.display();