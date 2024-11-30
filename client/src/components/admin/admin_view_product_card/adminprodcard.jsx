import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "@/utils/formatPrice";
import { useManagement } from "@/context/ManagementContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const AdminProdCard = ({ id, name, description, price, imageUrl, disabled }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useManagement();

  const deleteProdCheck = () => {
    Swal.fire({
      title: "<h2>Desea eliminar el producto?</h2>",
      icon: "error",
      html: `
      <p>El producto se borrara de la base de datos</p>
      <p><strong>- Este cambio no se puede revertir -</strong></p>
  `,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Borrar",
      confirmButtonColor: "#d33",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#3085d6",
      background: "white",
      customClass: {
        title: "text-3xl text-black font-bold",
        htmlContainer: "text-black",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Producto eliminado correctamente");
        deleteProduct(id);
      }
    });
  };

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
          onClick={() => deleteProdCheck()}
          disabled={disabled}
        >
          Borrar
        </Button>
      </div>
    </div>
  );
};
