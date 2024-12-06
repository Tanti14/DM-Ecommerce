import React, { useEffect, useState } from "react";
import { useManagement } from "@/context/ManagementContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { newUserSchema } from "@/Formik";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import toast from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";
import { UserItem } from "@/components/admin/userItem/userItem";
import Swal from "sweetalert2";

export const UserManager = () => {
  const { users, getUsers, createUser, updateUser, deleteUser } =
    useManagement();

  const { user, isAuth } = useAuth();

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [inUser, setInUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === "panel-overlay") {
      setIsPanelOpen(false);
      setInUser({ name: "", email: "", password: "" });
    }
  };

  const handleCancelEdit = () => {
    setIsPanelOpen(false);
    setInUser({ name: "", email: "", password: "" });
  };

  const handleEditUser = (user) => {
    setInUser({ ...user });
    setIsPanelOpen(true);
  };

  const handleDeleteUser = (id) => {
    if (isAuth) {
      toast.error("No puedes eliminar un Usuario si la sesion esta activa");
      return;
    }

    Swal.fire({
      title: "<h2>Desea eliminar el usuario?</h2>",
      icon: "error",
      html: `
                  <p>El usuario sera eliminado de la base de datos</p>
                  <p><strong>- Esta accion no se puede revertir -</strong></p>
              `,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#d33",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#3085d6",
      customClass: {
        title: "text-2xl text-black font-bold",
        htmlContainer: "text-black",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        toast.success("Usuario eliminado correctamente");
      }
    });
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
            Nuevo Usuario
          </button>
        </div>
      </div>

      {isPanelOpen && (
        <div
          id="panel-overlay"
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end overflow-scroll"
          onClick={handleOutsideClick}
        >
          <div
            className="flex flex-col gap-3 bg-white w-1/3 h-full mt-[125px] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {inUser._id ? (
              <h2 className="text-xl mb-4">Editar Usuario</h2>
            ) : (
              <h2 className="text-xl mb-4">Crear Nuevo Usuario</h2>
            )}
            <div>
              <Formik
                initialValues={inUser}
                validationSchema={newUserSchema}
                onSubmit={async (values, actions) => {
                  if (inUser._id) {
                    await updateUser(inUser._id, values);
                    toast.success("Usuario actualizado correctamente");
                    setInUser({ name: "", email: "", password: "" });
                  } else {
                    if (users.find((user) => user.name === values.name)) {
                      toast.error("El usuario ya existe");
                      return;
                    }
                    if (users.find((user) => user.email === values.email)) {
                      toast.error("El email ya se encuentra en uso");
                      return;
                    }
                    await createUser(values);
                    toast.success("Usuario creado correctamente");
                  }
                  actions.setSubmitting(false);
                  setIsPanelOpen(false);
                  getUsers();
                }}
                enableReinitialize={true}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="name"
                        className="text-md block font-bold text-gray-400"
                      >
                        Nombre de Usuario
                      </label>
                      <Field
                        name="name"
                        id="name"
                        placeholder="Ingrese el nombre del usuario"
                        className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-red-600"
                      />

                      <label
                        htmlFor="email"
                        className="text-md block font-bold text-gray-400"
                      >
                        Email del Usuario
                      </label>
                      <Field
                        name="email"
                        id="email"
                        placeholder="Ingrese el email del usuario"
                        className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-600"
                      />

                      <label
                        htmlFor="password"
                        className="text-md block font-bold text-gray-400"
                      >
                        Contraseña del Usuario
                      </label>
                      <Field
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Ingrese la contraseña del usuario"
                        className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
                      />
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-600"
                      />

                      {inUser._id ? (
                        <Button
                          type="submit"
                          className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                          ) : (
                            "Editar Usuario"
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
                            "Crear Usuario"
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
      <div className="flex flex-col justify-center gap-4 p-8 w-full 2xl:h-full sm:h-[calc(100vh-170px)] sm:justify-start">
        <h2 className="text-2xl font-bold">Gestor de Usuarios</h2>
        <div className="grid grid-cols-4 justify-around items-center text-center w-full border-[2px] border-black rounded-md p-8 py-2">
          <h3 className="font-bold">Nombre del Usuario</h3>
          <h3 className="font-bold">Email del usuario</h3>
          <h3 className="font-bold">Autenticado</h3>
          <h3 className="font-bold">Acciones disponibles</h3>
        </div>
        {users.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">NO HAY USUARIOS PARA MOSTRAR</h2>
            <p>Cuando crees un nuevo usuario, el mismo se mostrara aquí</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {users.map((user) => (
              <UserItem
                key={user._id}
                usuario={user}
                handleDelete={handleDeleteUser}
                handleEdit={handleEditUser}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
