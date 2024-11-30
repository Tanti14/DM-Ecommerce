import * as Yup from "yup";
import { noNumbersRegex } from "../utils/re";

export const newCategorySchema = Yup.object({
  categoryName: Yup.string()
    .matches(noNumbersRegex, "No se permiten números")
    .required("Por favor, escriba el nombre de la categoria"),
});
