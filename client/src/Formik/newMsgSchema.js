import * as Yup from "yup";
import { emailRegex } from "../utils/re";

export const newMsgSchema = Yup.object({
  name: Yup.string().required("Por favor, escriba su nombre"),
  lastname: Yup.string().required("Por favor, escriba su apellido"),
  email: Yup.string()
    .matches(emailRegex, "Ingrese un email valido")
    .required("Por favor, escriba su email"),
  message: Yup.string().required("Por favor, escriba su mensaje"),
});
