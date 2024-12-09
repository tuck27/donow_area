function area(shape, measure1, measure2){          //inside paranthesis is parameters = variables of functions
    if(shape === "rectangle") {
        return measure1 * measure2;
    } else if(shape === "triangle") {
        return 0.5 * measure1 * measure2;
    } else if(shape === "circle") {
        return Math.PI * measure1^2;
    } else{
        return "Shape not recognized";
    }
}

console.log("Area of Rectangle:", area("rectangle", 10, 5));                       //inside paranthesis = arguments
console.log("Area of Triangle:", area("triangle", 6, 12));
console.log("Area of Circle:", area("circle", 7));

