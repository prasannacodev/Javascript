// Class Declaration:
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.getArea());


// Class Expresssion:
const Circle = class{
  constructor(radius){
    this.radius =radius;
  }
  getArea(){
    return Math.PI * this.radius *this.radius;
  }
};
const circle = new Circle(5);
console.log(circle.getArea());


// Inheritance:
class Shape {
  constructor(color){
    this .color =color;
  }
  getColor(){
    return this.color;
  }
}
class Circle extends Shape{
    constructor(radius,color){
      super(color);
      this.radius =radius;
    }
    getArea(){
      return Math.PI * this.radius *this.radius;
    }
  }
  const circle =new Circle(5,"red");
  console.log(circle.getArea());
  console.log(circle.getColor());
  
  

// Static Methods:
class MathUtil{
    static add(a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
}
console.log(MathUtil.add(3,17));
console.log(MathUtil.subtract(12,2));

