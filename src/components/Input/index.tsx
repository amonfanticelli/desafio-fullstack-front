import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Container, Error, Label } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
interface InputProps {
  id: string;
  label: string;
  type: string;
  error?: FieldError;
  placeholder: string;
  autoComplete?: string;
}

export const Input = forwardRef(
  (
    {
      id,
      label,
      error,
      type,
      placeholder,
      autoComplete,
      ...register
    }: InputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Container>
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          ref={ref}
        />

        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error.message}</span>
          </Error>
        )}
      </Container>
    </>
  )
);
