export type TAddition =
  | {
      type: "field";
      key: PropertyKey;
      value: unknown;
    }
  | {
      type: "method";
      key: PropertyKey;
      value: (self: any) => (...args: unknown[]) => unknown;
    };
