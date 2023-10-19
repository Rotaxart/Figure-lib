import { FigureParams } from "../interfaces/figure-params.interface";
import { Figure } from "./abstract";

export interface CircleParams extends FigureParams {
  r: number;
}

/**
 * Represents a circle.
 * @extends {Figure}
 */
export class Circle extends Figure {
  /**
   * Constructs a new Circle instance.
   * @param {number[]} r - The radius of the circle.
   */
  constructor([r]: number[]) {
    super();
    this.validation([r]);
    this.params = { type: "Circle", r };
  }

  params: CircleParams;

  /**
   * Gets the parameters of the circle.
   * @returns {FigureParams} The parameters of the circle.
   */
  getParams(): FigureParams {
    return this.params;
  }

  /**
   * Validates the input parameters.
   * @param {number[]} r - The radius of the circle.
   */
  validation([r]: number[]): void {
    if (r <= 0) throw new Error("Wrong input params");
  }

  /**
   * Gets the diameter of the circle.
   * @returns {number} The diameter of the circle.
   */
  getDiametr(): number {
    return this.params.r * 2;
  }

  /**
   * Gets the area of the circle.
   * @returns {number} The area of the circle.
   */
  getArea(): number {
    return Math.PI * Math.pow(this.params.r, 2);
  }
}
