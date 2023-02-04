import * as yup from "yup";

export const contactEditSchema = yup.object().shape({
  fullName: yup.string(),
  email: yup.string().email("email precisa ser válido"),
  cellphone: yup.number().min(9),
});
