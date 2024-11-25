import React, { useEffect, useState } from "react";
import {
  Button,
  CategoryButtons,
  StyledProdCards,
  StyledProdsContainer,
} from "./styles";
import { ProductCard } from "../../components/products/product_card/product_card";
import "animate.css";
import { useManagement } from "@/context/ManagementContext";

export const ProductsScreen = () => {
  const {
    getProducts,
    categories,
    getCategories,
    selectedCategory,
    handleCategoryChange,
    filteredProducts,
  } = useManagement();

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  /* console.log(categories) */

  return (
    <StyledProdsContainer>
      <h1 className="text-4xl font-bold">CATÁLOGO DE PRODUCTOS</h1>
      <CategoryButtons className="animate__animated animate__fadeInUp">
        <Button
          selected={"all" === selectedCategory}
          onClick={() => handleCategoryChange("all")}
        >
          Todos
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat._id}
            selected={selectedCategory === cat.category}
            onClick={() => handleCategoryChange(cat.category)}
          >
            {cat.category}
          </Button>
        ))}
      </CategoryButtons>
      <StyledProdCards>
        {filteredProducts
          .map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              imageUrl={product.imageUrl}
            />
          ))
          .reverse()}
      </StyledProdCards>
    </StyledProdsContainer>
  );
};
