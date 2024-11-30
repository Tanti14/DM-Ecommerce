import { useManagement } from "@/context/ManagementContext";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const CategoryItem = ({ id, category, handleEditCategory }) => {
  const { deleteCategory, products, getProducts } = useManagement();

  useEffect(() => {
    getProducts();
  }, []);

  const deleteCategoryCheck = () => {
    if (products.some((product) => product.category === category)) {
      return Swal.fire({
        title: "<h2>No se puede borrar la Categoria</h2>",
        icon: "error",
        html: `
        <p>Existen productos asociados a esta categoria</p>
        <p><strong>- Eliminine los productos para poder continuar -</strong></p>
    `,
        confirmButtonText: "Entendido",
        confirmButtonColor: "#3085d6",
        customClass: {
          title: "text-2xl text-black font-bold",
          htmlContainer: "text-black",
        },
      });
    }

    Swal.fire({
      title: "<h2>Desea eliminar la categoria?</h2>",
      icon: "error",
      html: `
        <p>La categoria sera eliminada de la base de datos</p>
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
        deleteCategory(id);
        toast.success("Categoria eliminada correctamente");
      }
    });
  };

  return (
    <div className="flex justify-between items-center w-full border-[1px] rounded-md px-12 py-2">
      <p>{category}</p>
      <div className="flex justify-center items-center gap-6">
        <button
          className="rounded-md border-[1px] px-2 py-1 bg-indigo-500 text-white"
          onClick={() => handleEditCategory(id, category)}
        >
          Editar
        </button>
        <button
          className="rounded-md border-[1px] px-2 py-1 bg-red-500 text-white"
          onClick={() => deleteCategoryCheck()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
