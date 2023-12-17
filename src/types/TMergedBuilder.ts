import { TBuilder } from "./TBuilder";
import { TIdentity } from "./TIdentity";

export type TMergedBuilder<
  Prev extends TBuilder<any, any>,
  Next extends TBuilder<any, any>,
> = Prev extends TBuilder<infer PrevFields, infer PrevMethods>
  ? Next extends TBuilder<infer NextFields, infer NextMethods>
    ? TBuilder<
        TIdentity<PrevFields & NextFields>,
        TIdentity<PrevMethods & NextMethods>
      >
    : never
  : never;
