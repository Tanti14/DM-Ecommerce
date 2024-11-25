import { Compo } from "@/components/products/admin_view_product_card/prodcard";
import { Button } from "@/components/ui/button";
import { useManagement } from "@/context/ManagementContext";
import { newProdSchema } from "@/Formik/newProdSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const NewProduct = () => {
  const {
    categories,
    getCategories,
    createProduct,
    getProduct,
    updateProduct,
  } = useManagement();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        const data = await getProduct(params.id);
        setProduct(data);
      }
    };
    fetchProduct();
    getCategories();
  }, []);

  return (
    <div className="w-full">
      <Formik
        initialValues={product}
        validationSchema={newProdSchema}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateProduct(params.id, values);
            toast.success("Producto actualizado correctamente");
          } else {
            await createProduct(values);
            toast.success("Producto creado correctamente");
          }
          actions.setSubmitting(false);
          navigate("/controlpanel", { replace: true });
        }}
        enableReinitialize={true}
      >
        {({ handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 w-full"
          >
            <div className="flex flex-col gap-2 w-full p-12 bg-black">
              <div className="flex justify-between items-center">
                <div>
                  {params.id ? (
                    <h3 className="text-xl text-white font-bold">
                      Editar Producto
                    </h3>
                  ) : (
                    <h3 className="text-xl text-white font-bold">
                      Publicar nuevo Producto
                    </h3>
                  )}
                </div>
                <div>
                  <Link
                    to={"/controlpanel"}
                    className="text-white font-bold bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-500"
                  >
                    Volver atras
                  </Link>
                </div>
              </div>
              {/* ========================================= */}
              <label
                htmlFor="name"
                className="text-md block font-bold text-gray-400"
              >
                Nombre del Producto
              </label>
              <Field
                name="name"
                id="name"
                placeholder="Ingrese el nombre del Producto"
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="description"
                className="text-md block font-bold text-gray-400"
              >
                Descripción
              </label>
              <Field
                name="description"
                id="description"
                placeholder="Ingrese una descripción. (Max 40 caracteres)."
                maxLength="40"
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none resize-none"
              />
              <ErrorMessage
                component="p"
                name="description"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="price"
                className="text-md block font-bold text-gray-400"
              >
                Precio
              </label>
              <Field
                name="price"
                id="price"
                placeholder="Ingrese el precio del producto. (Solo números)."
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none resize-none"
              />
              <ErrorMessage
                component="p"
                name="price"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="category"
                className="text-md block font-bold text-gray-400"
              >
                Categoria
              </label>
              {/* <Field
                name="category"
                id="category"
                placeholder="Ingrese la Categoria del producto. (No repetir)."
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none resize-none"
              /> */}
              <Field name="category" id="category" as="select" className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg">
                <option value="">Seleccione una categoria</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.category}>
                    {cat.category}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                component="p"
                name="category"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="imageUrl"
                className="text-md block font-bold text-gray-400"
              >
                URL de Imagen
              </label>
              <Field
                name="imageUrl"
                id="imageURL"
                placeholder="Ingrese la URL de la imagen."
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none resize-none"
              />
              <ErrorMessage
                component="p"
                name="imageUrl"
                className="text-red-600"
              />
              {/* ========================================= */}
              {params.id ? (
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-md"
                >
                  Actualizar
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                  ) : (
                    "Publicar"
                  )}
                </Button>
              )}
            </div>

            {/* ========================================= */}
            <div className="flex justify-center items-center">
              <Compo
                name={values.name}
                description={values.description}
                price={values.price}
                imageUrl={values.imageUrl}
                disabled={true}
              />
            </div>
          </Form>
        )}
      </Formik>

      {/* <p className="font-bold text-center">
          Corroborar que la informacion de los campos cumpla con los requisitos
          establecidos
        </p> */}
    </div>
  );
};
