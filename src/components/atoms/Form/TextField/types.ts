import { FormBoxProps } from "../FormBox/types";

export interface TextFieldProps {
  type?: string;
  placeholder?: string;
  id?: FormBoxProps["id"];
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange?: any;
}
