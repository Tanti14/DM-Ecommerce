import React from "react";
import { ProductCard } from "../product_card/product_card";
import {
  ProdSectionContainer,
  ProdCardContainer,
  ShowMoreProds,
  ShowMoreProdsBtn,
} from "./styles";

export const ProductsSection = () => {

  return (
    <ProdSectionContainer>
      <h2>PRODUCTOS DESTACADOS</h2>
      <ProdCardContainer>
        <h1>Nada para mostrar</h1>
      </ProdCardContainer>
      <ShowMoreProds whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <ShowMoreProdsBtn to="/products" reloadDocument={true}>
          VER MÁS PRODUCTOS
        </ShowMoreProdsBtn>
      </ShowMoreProds>
    </ProdSectionContainer>
  );
};
