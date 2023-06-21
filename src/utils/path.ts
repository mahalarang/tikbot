import { resolve } from "path";

export const rootPath = (...paths: string[]) => resolve(__dirname, ...paths);
