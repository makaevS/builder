import { TAddField } from "./TAddField";
import { TBuilder } from "./TBuilder";
import { TBuilderSelf } from "./TBuilderSelf";
import { TField } from "./TField";
import { TFields } from "./TFields";
import { TIdentity } from "./TIdentity";
import { TMethods } from "./TMethods";

export type TBuilderField<Fields extends TFields, Methods extends TMethods> = <
  Key extends PropertyKey,
  Value extends TAddField<
    Key,
    Fields,
    Methods,
    TBuilderSelf<TBuilder<Fields, Methods>>
  >,
>(
  key: Key,
  value: Value
) => TBuilder<
  TIdentity<
    Fields &
      TField<
        Key,
        Fields,
        Methods,
        TBuilderSelf<TBuilder<Fields, Methods>>,
        Value
      >
  >,
  Methods
>;
