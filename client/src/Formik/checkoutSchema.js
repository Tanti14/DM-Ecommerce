import * as Yup from "yup";
import { noNumbersRegex, onlyNumbersRegex } from "../utils/re";

export const checkoutSchema = Yup.object({
  name: Yup.string()
    .matches(noNumbersRegex, "El nombre no es valido")
    .required("Por favor, ingrese su nombre"),
  lastname: Yup.string()
    .matches(noNumbersRegex, "El apellido no es valido")
    .required("Por favor, ingrese su apellido"),
  phone: Yup.string()
    .matches(onlyNumbersRegex, "El número no es valido")
    .required("Por favor, ingrese su número"),
  email: Yup.string()
    .email("El email no es invalido")
    .required("Por favor, ingrese su email"),
  adress: Yup.string().required("Por favor, ingrese su dirección"),
});
