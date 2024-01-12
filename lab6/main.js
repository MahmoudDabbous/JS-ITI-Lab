class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        return `Perimeter of ${this.name}: ${perimeter}`;
    }
}


class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength);
    }

    calcArea() {
        const area = this.sideLength * this.sideLength;
        return `Area of square: ${area}`;
    }
}


class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";

    static calculate(n = 1) {
        return n * 3;
    }
}

class SquaredTriple extends Triple {
    static description = "I square the triple of any number you provide";
    static longDescription;

    static calculate(n) {
        const tripleResult = super.calculate(n);
        return tripleResult * tripleResult;
    }
}
const squareshape = new Shape("square", 4, 5);

const triangle = new Shape("triangle", 3, 3);

const square = new Square(5);

alert(`Part 1:
${squareshape.calcPerimeter()}
${triangle.calcPerimeter()}
Part 2:
${square.calcPerimeter()}
${square.calcArea()}
Part 3:
Tripler Discription: ${Triple.description} Triple: ${Triple.calculate()} 
Triple 6 is:${Triple.calculate(6)} 
Triple square (3): ${SquaredTriple.calculate(3)}
SquareTriple Description: ${SquaredTriple.description}
SquareTriple longDescription: ${SquaredTriple.longDescription}
SquareTriple customname: ${SquaredTriple.customName}
`);

