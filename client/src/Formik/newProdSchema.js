import * as Yup from "yup";
import { noNumbersRegex, onlyNumbersRegex, urlRegex } from "../utils/re";

export const newProdSchema = Yup.object({
  name: Yup.string().required("Por favor, escriba el nombre del producto"),
  description: Yup.string().required("Por favor, escriba una descripcion"),
  price: Yup.string()
    .matches(onlyNumbersRegex, "Formato de precio incorrecto")
    .required("Por favor, ingrese el precio del producto"),
  category: Yup.string().required("Por favor, escriba una categoria"),
  imageUrl: Yup.string()
    .matches(urlRegex, "Ingrese una URL valida")
    .required("Por favor, ingrese la URL de la imagen"),
});
