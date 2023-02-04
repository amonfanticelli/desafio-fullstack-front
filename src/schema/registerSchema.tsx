import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("campo obrigatório").min(3),
  email: yup
    .string()
    .required("campo obrigatório")
    .email("é necessário um email válido"),
  cellphone: yup.string().required("campo obrigatório").min(9),
  password: yup.string().required("deve conter uma senha"),
  // .matches(/(\d)/, "deve conter ao menos 1 número")
  // .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
  // .min(8, "deve conter ao menos 8 caracteres"),
  userPasswordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "A senha não está igual a digitada"),
});
