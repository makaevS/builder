import { TBuilder } from "./TBuilder";
import { TBuilderSelf } from "./TBuilderSelf";
import { TFields } from "./TFields";
import { TMethods } from "./TMethods";
import { TReadonlyKeys } from "./TReadonlyKeys";

export type TAddField<
  Key extends PropertyKey,
  Fields extends TFields,
  Methods extends TMethods,
  Self extends TBuilderSelf<TBuilder<Fields, Methods>>,
> = Key extends keyof Methods
  ? never
  : Key extends TReadonlyKeys<Fields>
    ?
        | { get: () => Fields[Key]; set?: undefined }
        | ((self: Self) => { get: () => Self[Key]; set?: undefined })
    : Key extends keyof Fields
      ?
          | { get: () => Self[Key]; set?: (value: Self[Key]) => void }
          | ((self: Self) => {
              get: () => Self[Key];
              set?: (value: Self[Key]) => void;
            })
          | ((self: Self) => Self[Key])
          | Self[Key]
      :
          | { get: () => unknown; set?: (value: unknown) => void }
          | ((self: Self) => {
              get: () => unknown;
              set?: (value: unknown) => void;
            })
          | ((self: Self) => unknown)
          | unknown;
