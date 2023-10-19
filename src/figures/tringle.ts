import { FigureParams } from "../interfaces/figure-params.interface";
import { Figure } from "./abstract";

export interface TringleParams extends FigureParams {
  a: number;
  b: number;
  c: number;
}

/**
 * Class representing a Triangle.
 * @extends Figure
 */
export class Tringle extends Figure {
  /**
   * Create a triangle.
   * @param {number[]} a - The first side of the triangle.
   * @param {number[]} b - The second side of the triangle.
   * @param {number[]} c - The third side of the triangle.
   */
  constructor([a, b, c]: number[]) {
    super();
    this.validation([a, b, c]);
    this.params = { type: "Tringle", a, b, c };
  }

  /**
   * The parameters of the triangle.
   * @type {TringleParams}
   */
  params: TringleParams;

  /**
   * Get the parameters of the triangle.
   * @return {FigureParams} The parameters of the triangle.
   */
  getParams(): FigureParams {
    return this.params;
  }

  /**
   * Get the perimeter of the triangle.
   * @return {number} The perimeter of the triangle.
   */
  getPerimetr(): number {
    return this.params.a + this.params.b + this.params.c;
  }

  /**
   * Get the area of the triangle using Heron's formula.
   * @return {number} The area of the triangle.
   */
  getArea(): number {
    const { a, b, c } = this.params;
    const p = this.getPerimetr() / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }

  /**
   * Validate the input parameters. If any side is less than or equal to zero,
   * or if the sum of any two sides is less than or equal to the third side,
   * throw an error.
   * @param {number[]} a - The first side of the triangle.
   * @param {number[]} b - The second side of the triangle.
   * @param {number[]} c - The third side of the triangle.
   */
  validation([a, b, c]: number[]) {
    if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || c <= 0 || b <= 0) {
      throw new Error("Wrong input params");
    }
  }
}
