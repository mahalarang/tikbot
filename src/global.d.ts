export {};

declare global {
  type ObjectEmpty = Record<string, undefined>;
  type Nullable<T> = T | null;
}
