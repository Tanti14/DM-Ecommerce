import React, { useEffect } from "react";
import {
  Button,
  CategoryButtons,
  StyledProdCards,
  StyledProdsContainer,
} from "./styles";
import "animate.css";
import { useManagement } from "@/context/ManagementContext";
import { ProdCard } from "@/components/products/product_card/prodcard";

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
            selected={selectedCategory === cat.categoryName}
            onClick={() => handleCategoryChange(cat.categoryName)}
          >
            {cat.categoryName}
          </Button>
        ))}
      </CategoryButtons>
      <StyledProdCards>
        {filteredProducts
          .map((product) => (
            <ProdCard
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
