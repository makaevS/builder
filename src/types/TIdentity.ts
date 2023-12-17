export type TIdentity<T extends object> = T extends T
  ? {
      [K in keyof T]: T[K];
    }
  : never;
