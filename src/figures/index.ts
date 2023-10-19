import { Figure } from "./abstract";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Tringle } from "./tringle";

export interface FigureClass<T extends Figure> {
  name: string;
  class: new (args: number[]) => T;
}

export const figures: Array<FigureClass<Figure>> = [
  { name: "Tringle", class: Tringle },
  { name: "Rectangle", class: Rectangle },
  { name: "Circle", class: Circle },
];

export default { Figure, Circle, Rectangle, Tringle };
