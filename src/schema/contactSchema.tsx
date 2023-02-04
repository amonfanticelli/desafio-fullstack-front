import * as yup from "yup";

export const contactSchema = yup.object().shape({
  fullName: yup.string().required("Contato obrigatório"),
  email: yup
    .string()
    .required("email obrigatório")
    .email("email precisa ser válido"),
  cellphone: yup.number().required("celular obrigatório").min(9),
});
