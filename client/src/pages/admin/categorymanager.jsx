import React, { useEffect, useState } from "react";
import { CategoryItem } from "@/components/admin/categoryItem/categoryItem";
import { useManagement } from "@/context/ManagementContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { newCategorySchema } from "@/Formik/newCategorySchema";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import toast from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

export const CategoryManager = () => {
  const { categories, getCategories, createCategory, updateCategory } =
    useManagement();

  const { user, isAuth } = useAuth();

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [catego, setCatego] = useState({
    id: "",
    categoryName: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === "panel-overlay") {
      setIsPanelOpen(false);
      setCatego({ id: "", categoryName: "" });
    }
  };

  const handleCancelEdit = () => {
    setIsPanelOpen(false);
    setCatego({ id: "", categoryName: "" });
  };

  const handleEditCategory = (id, category) => {
    setCatego({ id, categoryName: category });
    setIsPanelOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[125px] bg-white">
      <div className="flex justify-between items-center py-2  px-12 w-full bg-purple-700">
        <h1 className="text-white">
          BIENVENIDO: <b>{user.name}</b>
        </h1>
        <div className="flex justify-center items-center gap-5">
          <button
            className="flex justify-center items-center gap-1 bg-white px-2 py-1 rounded-md"
            onClick={() => navigate("/controlpanel")}
          >
            <MdArrowBackIos />
            Panel de Control
          </button>
          <button
            className="flex justify-center items-center gap-1 bg-white px-2 py-1 rounded-md"
            onClick={() => setIsPanelOpen(true)}
          >
            <IoAddCircleOutline />
            Nueva Categoria
          </button>
        </div>
      </div>

      {isPanelOpen && (
        <div
          id="panel-overlay"
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end"
          onClick={handleOutsideClick}
        >
          <div
            className="flex flex-col gap-3 bg-white w-1/3 h-full mt-[125px] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {catego.id ? (
              <h2 className="text-xl mb-4">Editar Categoria</h2>
            ) : (
              <h2 className="text-xl mb-4">Crear Nueva Categoria</h2>
            )}
            <div>
              <Formik
                initialValues={catego}
                validationSchema={newCategorySchema}
                onSubmit={async (values, actions) => {
                  if (catego.id) {
                    await updateCategory(catego.id, values);
                    toast.success("Categoria actualizada correctamente");
                    setCatego({ id: "", categoryName: "" });
                  } else {
                    if (
                      categories.find(
                        (cat) => cat.categoryName === values.categoryName
                      )
                    ) {
                      toast.error("La categoria ya existe");
                      return;
                    }
                    await createCategory(values);
                    toast.success("Categoria creada correctamente");
                  }
                  actions.setSubmitting(false);
                  setIsPanelOpen(false);
                  getCategories();
                }}
                enableReinitialize={true}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 p-2 w-full">
                      <label
                        htmlFor="categoryName"
                        className="text-md block font-bold text-gray-400"
                      >
                        Nombre de la categoria
                      </label>
                      <Field
                        name="categoryName"
                        id="categoryName"
                        placeholder="Ingrese el nombre de la categoria"
                        className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
                      />
                      <ErrorMessage
                        name="categoryName"
                        component="p"
                        className="text-red-600"
                      />

                      {catego.id ? (
                        <Button
                          type="submit"
                          className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                          ) : (
                            "Guardar"
                          )}
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
                            "Crear"
                          )}
                        </Button>
                      )}

                      <Button
                        onClick={() => handleCancelEdit()}
                        className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-md"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center gap-4 p-12 w-full">
        <h2 className="text-2xl font-bold">Gestor de Categorias</h2>
        <div className="flex justify-between items-center w-full border-[2px] border-black rounded-md px-12 py-2">
          <h3 className="font-bold">Nombre de la Categoria</h3>
          <h3 className="font-bold">Acciones disponibles</h3>
        </div>
        {categories.length === 0 ? (
          <div className="flex flex-col justify-center h-[calc(100vh-375px)] items-center">
            <h2 className="text-2xl font-bold">
              NO HAY CATEGORIAS PARA MOSTRAR
            </h2>
            <p>Cuando crees una nueva categoria, la misma se mostrara aquí</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {categories.map((cat) => (
              <CategoryItem
                key={cat._id}
                id={cat._id}
                category={cat.categoryName}
                handleEditCategory={handleEditCategory}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
