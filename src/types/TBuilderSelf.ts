import { TBuilder } from "./TBuilder";
import { TIdentity } from "./TIdentity";

export type TBuilderSelf<T extends TBuilder<any, any>> = T extends TBuilder<
  infer Fields,
  infer Methods
>
  ? TIdentity<Fields & Methods>
  : never;
