import { FigureClass, figures } from "./figures";
import { Figure } from "./figures/abstract";
import { Circle } from "./figures/circle";
import { Rectangle } from "./figures/rectangle";
import { Tringle } from "./figures/tringle";

/**
 * A factory class for creating figures.
 */
export class FigureFactory {
  /**
   * Creates a figure of the specified type.
   * @param figureName - The name of the figure type to create.
   * @param args - The arguments to pass to the figure's constructor.
   * @returns A new instance of the specified figure type.
   */
  static createFigure<T extends Figure>(
    figureName: string,
    ...args: number[]
  ): T {
    const figureEntry = figures.find(
      (figure) => figure.name.toLowerCase() === figureName.toLowerCase(),
    ) as FigureClass<T>;

    if (!figureEntry) throw new Error("Figure not found");

    return new figureEntry.class(args);
  }

  /**
   * Creates a new Tringle instance.
   * @param a - The length of side a.
   * @param b - The length of side b.
   * @param c - The length of side c.
   * @returns A new Tringle instance.
   */
  static createTringle(...[a, b, c]: number[]): Tringle {
    return new Tringle([a, b, c]);
  }

  /**
   * Creates a new Circle instance.
   * @param r - The radius of the circle.
   * @returns A new Circle instance.
   */
  static createCircle(...[r]: number[]): Circle {
    return new Circle([r]);
  }

  /**
   * Creates a new Rectangle instance.
   * @param a - The length of side a.
   * @param b - The length of side b.
   * @returns A new Rectangle instance.
   */
  static createRectangle(...[a, b]: number[]): Rectangle {
    return new Rectangle([a, b]);
  }

  /**
   * Adds a custom figure to the factory's list of available figures.
   * @param customFigure - An object representing the custom figure. Should include a name and a class constructor.
   */
  static addCustomFigure<T extends Figure>(customFigure: FigureClass<T>) {
    figures.push(customFigure);
  }
}
