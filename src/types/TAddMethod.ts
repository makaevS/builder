import { TBuilder } from "./TBuilder";
import { TBuilderSelf } from "./TBuilderSelf";
import { TFields } from "./TFields";
import { TMethods } from "./TMethods";

export type TAddMethod<
  Key extends PropertyKey,
  Fields extends TFields,
  Methods extends TMethods,
  Self extends TBuilderSelf<TBuilder<Fields, Methods>>,
> = (
  self: Self
) => Key extends keyof Fields
  ? never
  : Key extends keyof Methods
    ? Self[Key]
    : (...args: any[]) => any;

export type TMethod<
  Key extends PropertyKey,
  Fields extends TFields,
  Methods extends TMethods,
  Self extends TBuilderSelf<TBuilder<Fields, Methods>>,
  Value extends TAddMethod<Key, Fields, Methods, Self>,
> = Key extends keyof Methods
  ? Methods[Key]
  : {
      [K in Key]: Value extends (self: Self) => infer Method ? Method : never;
    };
