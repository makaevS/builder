import { TBuilder } from "./TBuilder";
import { TFields } from "./TFields";
import { TMergedBuilder } from "./TMergedBuilder";
import { TMethods } from "./TMethods";

export type TBuilderPlugin<Fields extends TFields, Methods extends TMethods> = <
  Prev extends TBuilder<Fields, Methods>,
  Next extends TBuilder<any, any> = Prev,
>(
  fn: (builder: Prev) => TMergedBuilder<Prev, Next>
) => TMergedBuilder<Prev, Next>;
