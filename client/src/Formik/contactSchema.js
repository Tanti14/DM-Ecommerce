import * as Yup from "yup";
import { noNumbersRegex } from "../utils/re";

export const contactSchema = Yup.object({
  name: Yup.string()
    .matches(noNumbersRegex, "El nombre no es valido")
    .required("Por favor, ingrese su nombre"),
  lastname: Yup.string()
    .matches(noNumbersRegex, "El apellido no es valido")
    .required("Por favor, ingrese su apellido"),
  email: Yup.string()
    .email("El email no es invalido")
    .required("Por favor, ingrese su email"),
  consulta: Yup.string().required("Por favor, ingrese un mensaje"),
});
