import "@emotion/react";
import fundations from "@components/theme/fundations";

declare module "@emotion/react" {
  export type Theme = typeof fundations;
}
