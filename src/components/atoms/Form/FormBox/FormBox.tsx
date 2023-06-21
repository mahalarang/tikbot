import { FC, cloneElement, ReactNode } from "react";
import { FormBoxProps } from "./types";
import styled from "@emotion/styled";
import { margin } from "@/styles/space";

const FormBox: FC<FormBoxProps> = ({ children, id, label }) => {
  let overideProps: Pick<FormBoxProps, "id"> = {};

  if (id) overideProps.id = id;

  const childrenWithProps = cloneElement(
    children,
    overideProps
  ) as unknown as ReactNode;

  return (
    <Container className={margin({ bottom: 10 })}>
      <Label for={id} className={margin({ bottom: 5 })}>
        {label}
      </Label>
      {childrenWithProps}
    </Container>
  );
};

const Container = styled.div<Pick<FormBoxProps, "width">>`
  width: ${({ width }) => width || "100%"};
`;

const Label = styled.label<{ for: FormBoxProps["id"] }>`
  display: block;
`;

export default FormBox;
