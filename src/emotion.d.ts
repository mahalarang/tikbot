import "@emotion/react";
import fundations from "@/utils/theme/fundations";

declare module "@emotion/react" {
  export type Theme = typeof fundations;
}
