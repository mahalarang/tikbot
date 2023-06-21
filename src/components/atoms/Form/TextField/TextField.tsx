import { FC } from "react";
import { TextFieldProps } from "./types";
import styled from "@emotion/styled";

const TextField: FC<TextFieldProps> = (props) => {
  return (
    <InputWrapper>
      <Input {...props} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input<TextFieldProps>`
  width: 100%;
  padding: 6px 12px;
  font-size: 1.1rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  ${({ disabled, theme }) =>
    disabled &&
    `
    background: ${theme.colors.bgMuted};
    cursor: not-allowed;
    &::placeholder {
        color: #ddd;
    }
  `}
`;

export default TextField;
