import { TAddMethod, TMethod } from "./TAddMethod";
import { TBuilder } from "./TBuilder";
import { TBuilderSelf } from "./TBuilderSelf";
import { TFields } from "./TFields";
import { TIdentity } from "./TIdentity";
import { TMethods } from "./TMethods";

export type TBuilderMethod<Fields extends TFields, Methods extends TMethods> = <
  Key extends PropertyKey,
  Value extends TAddMethod<
    Key,
    Fields,
    Methods,
    TBuilderSelf<TBuilder<Fields, Methods>>
  >,
>(
  key: Key,
  value: Value
) => TBuilder<
  Fields,
  TIdentity<
    Methods &
      TMethod<
        Key,
        Fields,
        Methods,
        TBuilderSelf<TBuilder<Fields, Methods>>,
        Value
      >
  >
>;
