import React from "react";
import { useNavigate } from "react-router-dom";

export const MsgItem = ({ msg, handleDelete, handleRead, handleCopyMail }) => {
  return (
    <div className="grid grid-cols-4 justify-start items-center w-full text-center border-[1px] rounded-md px-8 py-2">
      <div>
        <p>{msg.name + " " + msg.lastname}</p>
        <p>{msg.email}</p>
      </div>
      <div>
        <p>{msg.message}</p>
      </div>
      <div>
        <p>{msg.date}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex justify-center items-center w-full gap-1">
          <button
            className="rounded-md border-[1px] w-[50%] px-2 py-1 bg-indigo-500 text-white"
            onClick={() => handleCopyMail(msg.email)}
          >
            COPIAR EMAIL
          </button>
          <button
            className="rounded-md border-[1px] w-[50%] px-2 py-1 bg-red-500 text-white"
            onClick={() => handleDelete(msg._id)}
          >
            Eliminar
          </button>
        </div>
        <button
          className="rounded-md border-[1px] w-full px-2 py-1 bg-green-600 text-white"
          onClick={() => handleRead(msg._id)}
          style={{ display: msg.isReaded ? "none" : "block" }}
        >
          Marcar como leido
        </button>
      </div>
    </div>
  );
};
