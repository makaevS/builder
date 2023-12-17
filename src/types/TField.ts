import { TAddField } from "./TAddField";
import { TBuilder } from "./TBuilder";
import { TBuilderSelf } from "./TBuilderSelf";
import { TFields } from "./TFields";
import { TMethods } from "./TMethods";

export type TField<
  Key extends PropertyKey,
  Fields extends TFields,
  Methods extends TMethods,
  Self extends TBuilderSelf<TBuilder<Fields, Methods>>,
  T extends TAddField<Key, Fields, Methods, Self>,
> = T extends { get: () => infer U; set?: undefined }
  ? { readonly [K in Key]: U }
  : T extends (self: {}) => { get: () => infer U; set?: undefined }
    ? { readonly [K in Key]: U }
    : {
        [K in Key]: T extends {
          get: () => infer U;
          set: (value: infer J) => void;
        }
          ? U extends J
            ? U
            : T
          : T extends (self: any) => {
                get: () => infer U;
                set: (value: infer J) => void;
              }
            ? U extends J
              ? U
              : T
            : T extends (self: any) => infer Field
              ? Field
              : T;
      };
