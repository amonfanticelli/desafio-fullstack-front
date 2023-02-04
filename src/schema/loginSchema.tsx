import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("campo obrigatório")
    .email("é necessário um email válido"),
  password: yup.string().required("é necessário uma senha"),
});
