import React from "react";
import { Button } from "../../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { formatPrice } from "@/utils/formatPrice";
import Swal from "sweetalert2";
import { useManagement } from "@/context/ManagementContext";

export const Compo = ({ id, name, description, price, imageUrl, disabled }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-2 py-7 gap-7 w-[300px] bg-white border-[1px] border-black">
      <div>
        <img className="w-[250px] h-[250px]" src={imageUrl} alt={name} />
      </div>
      <div className="flex flex-col justify-center items-start w-full gap-2 px-5">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>Peso: {description}</p>
        <p>{formatPrice(price)}</p>
      </div>
      <div className="flex justify-center items-center gap-6 w-full">
        <Button
          className="w-[35%] bg-gray-400"
          onClick={() => navigate(`/editproduct/form/${id}`)}
          disabled={disabled}
        >
          Editar
        </Button>
        <Button
          className="w-[35%] bg-red-400"
          onClick={() => navigate("/")}
          disabled={disabled}
        >
          Borrar
        </Button>
      </div>
    </div>
  );
};
