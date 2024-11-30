import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import Logo from "../../assets/img/login.svg";
import { useAuth } from "@/context/AuthContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginInitialValues, loginSchema } from "@/Formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

export const Login = () => {
  const { login, isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/controlpanel", { replace: true });
    }
  }, [isAuth]);

  return (
    <div className="grid grid-cols-2 w-full h-screen ">
      <div className="flex flex-col justify-center w-full bg-white px-20 gap-10">
        <h1 className="font-bold text-2xl">Iniciar sesion</h1>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginSchema}
          onSubmit={async (values, actions) => {
            await login(values);
            actions.setSubmitting(false);
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-5 w-[90%]"
            >
              <div className="flex flex-col w-full gap-3">
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
                  className="px-6 py-3 border-2 bg-slate-200 shadow-xl rounded-3xl focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor="password"
                  className="text-md block font-bold text-gray-400"
                >
                  Contraseña
                </label>
                <Field
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  className="px-6 py-3 border-2 bg-slate-200 shadow-xl rounded-3xl focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col w-full">
                {!values.email || !values.password ? (
                  <Button type="submit" disabled={true} className="rounded-3xl">
                    Iniciar sesion
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="rounded-3xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                    ) : (
                      "Iniciar sesion"
                    )}
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex flex-col justify-center items-center w-full p-10 bg-pink-600">
        <h2 className="font-bold text-2xl">Bienvenido a DM-Ecommerce</h2>
        <img src={Logo} alt="" className="w-[65%]" />
      </div>
    </div>
  );
};
