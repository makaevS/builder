import { TBuilderBuild } from "./TBuilderBuild";
import { TBuilderField } from "./TBuilderField";
import { TBuilderMethod } from "./TBuilderMethod";
import { TBuilderPlugin } from "./TBuilderPlugin";
import { TFields } from "./TFields";
import { TMethods } from "./TMethods";

export type TBuilder<
  Fields extends TFields = {},
  Methods extends TMethods = {},
> = {
  build: TBuilderBuild<Fields, Methods>;
  field: TBuilderField<Fields, Methods>;
  method: TBuilderMethod<Fields, Methods>;
  plugin: TBuilderPlugin<Fields, Methods>;
};
