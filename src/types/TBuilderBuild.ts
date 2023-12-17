import { TBuilder } from "./TBuilder";
import { TBuilderSelf } from "./TBuilderSelf";
import { TFields } from "./TFields";
import { TMethods } from "./TMethods";

export type TBuilderBuild<
  Fields extends TFields,
  Methods extends TMethods,
> = () => TBuilderSelf<TBuilder<Fields, Methods>>;
