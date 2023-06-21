import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BoxProps {
  width?: string;
  inline?: boolean;
  flex?: boolean;
  padding?: string;
}
const Box = styled.div<BoxProps>`
  width: ${({ width }) => width || "100%"};
  display: ${({ flex, inline }) =>
    flex ? "flex" : inline ? "inline" : "block"};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export default Box;
