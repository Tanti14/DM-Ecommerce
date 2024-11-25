import { Button } from "@/components/ui/button";
import React from "react";
import Logo from "../../assets/img/login.svg";
import { useAuth } from "@/context/AuthContext";

export const Login = () => {

  const {login, errors: loginErrors, isAuth} = useAuth();

  return (
    <div className="grid grid-cols-2 w-full h-screen">
      <div className="w-full bg-white p-20 gap-10 flex flex-col justify-center ">
        <h1 className="font-bold text-2xl">Iniciar sesion</h1>
        <form className="flex flex-col justify-center items-center gap-5 w-full">
          <div className="flex flex-col w-[90%]">
            <label htmlFor="username" className="font-bold">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              placeholder="Ingrese su nombre de usuario"
              className="p-2 border-2 bg-slate-200 shadow-xl rounded-3xl focus:outline-none"
            />
          </div>

          <div className="flex flex-col w-[90%]">
            <label htmlFor="password" className="font-bold">
              Contraseña
            </label>
            <input
              type="text"
              id="password"
              placeholder="Ingrese su contraseña"
              className="p-2 border-2 bg-slate-200 shadow-xl rounded-3xl focus:outline-none"
            />
          </div>

          <div className="flex flex-col w-[90%]">
            <Button className="rounded-3xl">Iniciar sesion</Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-pink-600">
        <h2 className="font-bold text-2xl">Bienvenido a DM-Ecommerce</h2>
        <img src={Logo} alt="" className="w-[65%]" />
      </div>
    </div>
  );
};
