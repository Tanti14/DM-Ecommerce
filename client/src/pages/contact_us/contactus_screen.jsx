import React, { useState } from "react";
import contactbg from "../../assets/img/contactus.svg";
import { StyledFormScreen } from "./styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { newMsgSchema } from "../../Formik/index.js";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useManagement } from "@/context/ManagementContext";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const ContactusScreen = () => {
  const navigate = useNavigate();

  const { sendMessage } = useManagement();

  const [msg, setMsg] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  return (
    <StyledFormScreen>
      <Formik
        initialValues={msg}
        validationSchema={newMsgSchema}
        onSubmit={async (values, actions) => {
          await sendMessage(values);
          toast.success("Mensaje enviado correctamente");
          actions.setSubmitting(false);
          navigate("/", { replace: true });
        }}
        enableReinitialize={true}
      >
        {({ handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col justify-center gap-2 w-full bg-pink-400 rounded-lg p-12">
              <div>
                <h3 className="text-xl text-white font-bold">
                  FORMULARIO DE CONTACTO
                </h3>
              </div>
              {/* ========================================= */}
              <label
                htmlFor="name"
                className="text-md block font-bold text-gray-400"
              >
                Nombre
              </label>
              <Field
                name="name"
                id="name"
                placeholder="Ingrese su nombre"
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="lastname"
                className="text-md block font-bold text-gray-400"
              >
                Apellido
              </label>
              <Field
                name="lastname"
                id="lastname"
                placeholder="Ingrese su apellido"
                maxLength="40"
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
              />
              <ErrorMessage
                component="p"
                name="lastname"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="email"
                className="text-md block font-bold text-gray-400"
              >
                Email
              </label>
              <Field
                name="email"
                id="email"
                placeholder="Ingrese su email"
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg appearance-none"
              />
              <ErrorMessage
                component="p"
                name="email"
                className="text-red-600"
              />
              {/* ========================================= */}
              <label
                htmlFor="message"
                className="text-md block font-bold text-gray-400"
              >
                Mensaje
              </label>
              <Field
                name="message"
                id="message"
                as="textarea"
                className="py-2 px-3 border-2 rounded-md focus: outline-none focus:shadow-outline shadow-lg resize-none"
              ></Field>
              <ErrorMessage
                component="p"
                name="message"
                className="text-red-600"
              />
              {/* ========================================= */}
              <Button
                type="submit"
                className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md"
                disabled={
                  isSubmitting ||
                  !values.name ||
                  !values.lastname ||
                  !values.email ||
                  !values.message
                }
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                ) : (
                  "Enviar"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <img src={contactbg} alt="Contact Page Image" />
    </StyledFormScreen>
  );
};
