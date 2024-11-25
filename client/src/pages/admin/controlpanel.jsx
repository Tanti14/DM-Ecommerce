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
import { Compo } from "../../components/products/admin_view_product_card/prodcard";

import { VscListFilter } from "react-icons/vsc";
import { GrConfigure } from "react-icons/gr";
import { useManagement } from "@/context/ManagementContext";

export const ControlPanel = () => {
  const {
    getProducts,
    products,
    categories,
    getCategories,
    selectedCategory,
    handleCategoryChange,
    filteredProducts,
  } = useManagement();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    getCategories();
    handleCategoryChange("all");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-[125px] bg-white">
      <div className="flex justify-between items-center py-2  px-12 w-full bg-purple-700">
        <h1 className="text-white">BIENVENIDO: </h1>
        <div className="flex justify-center items-center gap-5">
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
                  onClick={() => handleCategoryChange(cat.category)}
                  className={
                    selectedCategory === cat.category ? "underline" : ""
                  }
                >
                  {cat.category}
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
              <DropdownMenuItem onClick={() => navigate("/newproduct/form")}>
                Nuevo Producto
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/newproduct/form")}>
                Nueva Categoria
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/")}>
                Alta Administrador
              </DropdownMenuItem>
              <DropdownMenuItem>Cerrar sesion</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col items-center py-8">
        {}
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <h1>No hay productos para mostrar</h1>
          ) : (
            filteredProducts.map((product) => (
              <Compo
                key={product._id}
                id={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
