import { MsgItem } from "@/components/admin/msgItem/msgItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useManagement } from "@/context/ManagementContext";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { MdArrowBackIos } from "react-icons/md";
import { VscListFilter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export const MsgManager = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    filteredMessages,
    selectedMessages,
    handleMessageChange,
    getMessages,
    updateMessageStatus,
    deleteMessage,
    messages,
  } = useManagement();

  useEffect(() => {
    getMessages();
  }, []);

  const handleReadMessage = (id) => {
    const msg = messages.find((msg) => msg._id === id);
    msg.isReaded = true;
    updateMessageStatus(id, msg);
    toast.success("Mensaje marcado como leido");
    getMessages();
  };

  const handleDeleteMessage = (id) => {
    deleteMessage(id);
    toast.success("Mensaje eliminado correctamente");
  };

  const handleCopyMsgMail = (email) => {
    navigator.clipboard.writeText(email);
    toast.success("Email copiado al portapapeles");
  };

  const unReadedMessages = filteredMessages.filter(
    (msg) => msg.isReaded === false
  );

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
          <DropdownMenu>
            {
              <DropdownMenuTrigger className="flex justify-center items-center gap-2 bg-white text-black px-3 py-1 border-red-200 rounded-md">
                <VscListFilter />
                {selectedMessages === ""
                  ? "Filtrar Mensajes"
                  : selectedMessages === true
                  ? "Leidos"
                  : selectedMessages === false
                  ? "No Leidos"
                  : ""}
              </DropdownMenuTrigger>
            }
            <DropdownMenuContent>
              <DropdownMenuLabel>Filtrar Mensajes</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleMessageChange("")}
                className={selectedMessages === "" ? "underline" : ""}
              >
                Todos
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleMessageChange(true)}
                className={selectedMessages === true ? "underline" : ""}
              >
                Leidos
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handleMessageChange(false)}
                className={selectedMessages === false ? "underline" : ""}
              >
                No Leidos
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-12 w-full">
        <h2 className="text-2xl font-bold">
          Bandeja de Entrada (
          {selectedMessages === false
            ? unReadedMessages.length
            : filteredMessages.length}
          )
        </h2>
        <div className="grid grid-cols-4 justify-around items-center text-center w-full border-[2px] border-black rounded-md p-8 py-2">
          <h3 className="font-bold">Datos del Usuario</h3>
          <h3 className="font-bold">Mensaje</h3>
          <h3 className="font-bold">Fecha</h3>
          <h3 className="font-bold">Acciones disponibles</h3>
        </div>
        {filteredMessages.length === 0 ? (
          <div className="flex flex-col justify-center h-[calc(100vh-375px)] items-center">
            <h2 className="text-2xl font-bold">NO HAY MENSAJES SIN LEER</h2>
            <p>Cuando recibas un nuevo mensaje, el mismo se mostrara aquí</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {filteredMessages
              .map((msg) => (
                <MsgItem
                  key={msg._id}
                  msg={msg}
                  handleRead={handleReadMessage}
                  handleDelete={handleDeleteMessage}
                  handleCopyMail={handleCopyMsgMail}
                />
              ))
              .reverse()}
          </div>
        )}
      </div>
    </div>
  );
};
