import * as Yup from "yup";
import { emailRegex, passwordRegex } from "../utils/re";

export const loginSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Por favor, ingrese un email valido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "La contraseña debe tener al menos 6 caracteres, una mayuscula, una minuscula y un número"
    )
    .required("La contraseña es obligatoria"),
});
