# Figure-lib
## Run example
```npm install && npx ts-node example```
## Usage
```
import {
  Figure,
  FigureFactory,
  FigureParams,
  Rectangle,
  Tringle,
} from "./index";

//create figures
const tringle = FigureFactory.createFigure<Tringle>("tringle", 1, 1, 1);
console.log(tringle.getPerimetr());
console.log(tringle.getArea());
console.log(tringle.getParams());

const circle = FigureFactory.createCircle(1);
console.log(circle.getArea());
console.log(circle.getDiametr());
console.log(circle.getParams());

const rectangle = new Rectangle([1, 2]);
console.log(rectangle.getParams());
console.log(rectangle.getArea());
console.log(rectangle.getPerimetr());

//add custom figure
class Dot extends Figure {
  params: FigureParams;
  getParams(): FigureParams {
    return this.params;
  }
  constructor() {
    super();
    this.params = { type: "Dot" };
  }
}

FigureFactory.addCustomFigure({ name: "Dot", class: Dot });

const dot = FigureFactory.createFigure<Dot>("dot");
console.log(dot.params);
```
