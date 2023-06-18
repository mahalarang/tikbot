import { css } from "@emotion/css";
import theme from "@/utils/theme";

export const TiktokTextStyle = css`
  text-shadow: 1px 1px 0px ${theme.colors.red},
    -1px -1px 0px ${theme.colors.aqua};
`;

export const TextLight = css`
  color: ${theme.colors.whitesmoke};
`;

export const TextDark = css`
  color: ${theme.colors.black};
`;
