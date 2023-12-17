import { TAddition } from "../types/TAddition";
import { TBuilder } from "../types/TBuilder";
import { TFields } from "../types/TFields";
import { TMethods } from "../types/TMethods";

export const makeBuilder = <
  Fields extends TFields = {},
  Methods extends TMethods = {},
>(
  additions: TAddition[] = []
): TBuilder<Fields, Methods> => {
  const builder: TBuilder<Fields, Methods> = {
    build: () => {
      const obj = {} as any;
      for (const addition of additions) {
        if (addition.type === "field") {
          let value = addition.value;
          if (typeof addition.value === "function") {
            value = addition.value(obj);
          }
          if (
            typeof value === "object" &&
            value !== null &&
            "get" in value &&
            typeof value.get === "function"
          ) {
            Object.defineProperty(obj, addition.key, {
              get: value.get as never,
              set:
                "set" in value && typeof value.set === "function"
                  ? (value.set as never)
                  : undefined,
            });
          } else {
            obj[addition.key] = value;
          }
        } else if (addition.type === "method") {
          obj[addition.key] = addition.value(obj);
        }
      }
      return obj;
    },
    field: (key, value) =>
      makeBuilder(additions.concat({ type: "field", key, value })),
    method: (key, value) =>
      makeBuilder(additions.concat({ type: "method", key, value })),
    plugin: (fn) => fn(builder as never),
  };
  return builder;
};
