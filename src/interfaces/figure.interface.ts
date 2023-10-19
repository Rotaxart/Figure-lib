import { FigureParams } from "./figure-params.interface";

export interface IFigure {
  params: FigureParams;
  getParams(): FigureParams;
  validation(args: number[]): void;
}
