export * from "./utils";
export type * from "./types";
export { Builder } from "./Builder";

//
// field definition variants:
// a) by value
// b) by obj with get method (readonly field)
// c) by obj with get and set methods
// d) by fn accepting self and returning value
// e) by fn accepting self and returning obj with get method (readonly field)
// f) by fn accepting self and returning obj with get and set methods
//
