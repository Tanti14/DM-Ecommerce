import React, { useEffect } from "react";
import {
  ProdSectionContainer,
  ProdCardContainer,
  ShowMoreProds,
  ShowMoreProdsBtn,
} from "./styles";
import { useManagement } from "@/context/ManagementContext";
import { ProdCard } from "../product_card/prodcard";

export const ProductsSection = () => {
  const { getProducts, products } = useManagement();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProdSectionContainer>
      <h2>PRODUCTOS DESTACADOS</h2>
      <ProdCardContainer>
        {products.length === 0 ? (
          <h1>NO HAY PRODUCTOS DESTACADOS DISPONIBLES</h1>
        ) : (
          products.map((product) => (
            <ProdCard
              key={product._id}
              id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </ProdCardContainer>
      <ShowMoreProds whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <ShowMoreProdsBtn to="/products">VER MÁS PRODUCTOS</ShowMoreProdsBtn>
      </ShowMoreProds>
    </ProdSectionContainer>
  );
};
