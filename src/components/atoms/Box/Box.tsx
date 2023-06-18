import styled from "@emotion/styled";

interface BoxProps {
  width?: string;
  inline?: boolean;
  flex?: boolean;
}
const Box = styled.div<BoxProps>`
  width: ${({ width }) => width || "100%"};
  ${({ inline, flex }) => {
    if (inline) return "display: inline";
    else if (flex) return "display: flex";
    return "display: block";
  }}
`;

export default Box;
