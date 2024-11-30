import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminProdCard } from "../../components/admin/admin_view_product_card/adminprodcard";

import { VscListFilter } from "react-icons/vsc";
import { GrConfigure } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { useManagement } from "@/context/ManagementContext";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";

export const ControlPanel = () => {
  const {
    getProducts,
    categories,
    getCategories,
    selectedCategory,
    handleCategoryChange,
    filteredProducts,
  } = useManagement();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  useEffect(() => {
    getProducts();
    getCategories();
    handleCategoryChange("all");
  }, []);

  const handleCreateProduct = () => {
    if (categories.length === 0) {
      toast(
        <div className="flex flex-col">
          <h1 className="font-bold">NO HAY CATEGORIAS DISPONIBLES</h1>
          <p className="text-md">
            Por favor, crea una categoria para poder subir un producto
          </p>
        </div>,
        {
          icon: "🚨",
          style: {
            borderRadius: "10px",
            maxWidth: "600px",
          },
        }
      );
    } else {
      navigate("/newproduct/form");
    }
  };

  const logoutCheck = () => {
    Swal.fire({
      title: "Deseas cerrar sesion?",
      text: "Para usar el sistema tendras loguearte nuevamente",
      icon: "warning",
      confirmButtonText: "Cerrar sesion",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        toast("Sesion cerrada correctamente", {
          duration: 4000,
          icon: "👋",
          style: {
            borderRadius: "10px",
            maxWidth: "600px",
          },
        });
        logout();
        navigate("/");
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
            onClick={() => handleCreateProduct()}
          >
            <IoAddCircleOutline />
            Añadir Producto
          </button>
          <DropdownMenu>
            {
              <DropdownMenuTrigger className="flex justify-center items-center gap-2 bg-white text-black px-3 py-1 border-red-200 rounded-md">
                <VscListFilter />
                {selectedCategory === "all"
                  ? "Filtrar Productos"
                  : selectedCategory}
              </DropdownMenuTrigger>
            }
            <DropdownMenuContent>
              <DropdownMenuLabel>Filtrar Productos</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleCategoryChange("all")}
                className={selectedCategory === "all" ? "underline" : ""}
              >
                Todos
              </DropdownMenuItem>
              {categories.map((cat) => (
                <DropdownMenuItem
                  key={cat._id}
                  onClick={() => handleCategoryChange(cat.categoryName)}
                  className={
                    selectedCategory === cat.categoryName ? "underline" : ""
                  }
                >
                  {cat.categoryName}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            {
              <DropdownMenuTrigger className="flex justify-center items-center gap-2 bg-white text-black px-3 py-1 border-red-200 rounded-md">
                <GrConfigure />
                Gestionar
              </DropdownMenuTrigger>
            }
            <DropdownMenuContent>
              <DropdownMenuLabel>ADMINISTRAR WEB</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/newproduct")}>
                Mensajes
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/categorymanager")}>
                Gestionar Categorias
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/")}>
                Gestionar Usuarios
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => logoutCheck()}>
                Cerrar sesion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-170px)]">
          <h2 className="text-2xl font-bold">NO HAY PRODUCTOS PARA MOSTRAR</h2>
          <p>Cuando crees un producto nuevo, el mismo se mostrara aquí</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 p-12 gap-6">
          {filteredProducts.map((product) => (
            <AdminProdCard
              key={product._id}
              id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};
