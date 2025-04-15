import  * as classes from "./main_2_1.js"
let rectangle = new classes.Rectangle(10, 20);
let square = new classes.Square(10);
let circle = new classes.Circle(10);
console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(classes.Rectangle.getCount());
console.log(classes.Square.getCount());
console.log(classes.Circle.getCount());