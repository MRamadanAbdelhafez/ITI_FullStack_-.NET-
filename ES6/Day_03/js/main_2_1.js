class Shape {
    static count = 0;
    
    constructor (dim1, dim2 = 1) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
        Shape.count++;
        this.dim1 =dim1;
        this.dim2 = dim2; 
    }
    static getCount() {
        return Shape.count;
    }
    area(){
        return this.dim1 * this.dim2;
    }
    parameter(){
        return` the parameter1 is ${this.dim1}  and  the parameter2 is ${this.dim2}`;
    }
    toString(){
    return`Shape with dimensions ${this.dim1} and ${this.dim2}`;
    }
}
class Rectangle extends Shape {
    static count = 0;
    constructor (dim1, dim2) {
        super(dim1, dim2);
        Rectangle.count++;
    }
    static getCount() {
        return Rectangle.count;
    }
    toString(){
    return`area of rectangle is ${this.area()} and parameter is ${this.parameter()}`;
    }
}
class Square extends Shape {
    static count = 0;
    constructor (dim1) {
        super(dim1, dim1);
        Square.count++;
    }
    static getCount() {
        return Square.count;
    }
    toString(){
        return `area of Square is ${this.area()} and parameter is ${this.parameter()}`;
    }
}

class Circle extends Shape {
    static  count = 0;
    constructor (dim1) {
        super(dim1);
        Circle.count++;
    }
    static getCount() {
        return Circle.count;
    }
    area(){
        return Math.PI * this.dim1 * this.dim1;
    }
    parameter(){
        return this.dim1  ;
    }
    toString(){
    return`area of Circle is ${this.area()} and parameter is ${this.parameter()}`;
    }

}


export { Shape, Rectangle, Square, Circle };
