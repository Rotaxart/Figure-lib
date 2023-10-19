import { FigureParams } from "../interfaces/figure-params.interface";
import { Figure } from "./abstract";

export interface RectangleParams extends FigureParams {
  a: number;
  b: number;
}

/**
 * Class representing a Rectangle.
 * @extends Figure
 */
export class Rectangle extends Figure {
  /**
   * Create a rectangle.
   * @param {number[]} a - The width of the rectangle.
   * @param {number[]} b - The height of the rectangle.
   */
  constructor([a, b]: number[]) {
    super();
    this.validation([a, b]);
    this.params = { type: "Rectangle", a, b };
  }

  /**
   * The parameters of the rectangle.
   * @type {RectangleParams}
   */
  params: RectangleParams;

  /**
   * Get the area of the rectangle.
   * @return {number} The area of the rectangle.
   */
  getArea(): number {
    return this.params.a * this.params.b;
  }

  /**
   * Get the perimeter of the rectangle.
   * @return {number} The perimeter of the rectangle.
   */
  getPerimetr(): number {
    return (this.params.a + this.params.b) * 2;
  }

  /**
   * Get the parameters of the rectangle.
   * @return {RectangleParams} The parameters of the rectangle.
   */
  getParams(): RectangleParams {
    return this.params;
  }

  /**
   * Validate the input parameters.
   * @param {number[]} a - The width of the rectangle.
   * @param {number[]} b - The height of the rectangle.
   */
  validation([a, b]: number[]) {
    if (a <= 0 || b <= 0) {
      throw new Error("Wrong input params");
    }
  }
}
