import { useAuth } from "@/context/AuthContext";
import React from "react";

export const UserItem = ({ usuario, handleDelete, handleEdit }) => {
  const { user } = useAuth();

  return (
    <div className="grid grid-cols-4 justify-start items-center w-full text-center border-[1px] rounded-md px-8 py-2">
      <p>{usuario.name}</p>
      <p>{usuario.email}</p>
      <p>{user.email === usuario.email ? "Si" : "No"}</p>
      <div className="flex justify-center items-center gap-6">
        <button
          className="rounded-md border-[1px] px-2 py-1 bg-indigo-500 text-white"
          onClick={() => handleEdit(usuario)}
        >
          Editar
        </button>
        <button
          className="rounded-md border-[1px] px-2 py-1 bg-red-500 text-white"
          onClick={() => handleDelete(usuario._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
