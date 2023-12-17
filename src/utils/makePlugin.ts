import { TBuilder } from "../types/TBuilder";
import { TMergedBuilder } from "../types/TMergedBuilder";

export const makePlugin = <
  Prev extends TBuilder<any, any>,
  Next extends TBuilder<any, any> = Prev,
>(
  fn: (builder: Prev) => Next
): ((builder: Prev) => TMergedBuilder<Prev, Next>) => fn as never;
