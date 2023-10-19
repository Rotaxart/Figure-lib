import { FigureParams } from "../interfaces/figure-params.interface";

export abstract class Figure {
  // constructor(...args: number[]) { }
  abstract params: FigureParams;
  abstract getParams(): FigureParams;
}
