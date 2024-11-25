import React from "react";
import {
  CardItemsContainer,
  CardImgContainer,
  CardTxtContainer,
  ProdCardBtn,
  CardBtnContainer,
} from "./styles";
import { formatPrice } from "../../../utils/formatPrice";
import { toast } from "sonner";

export const ProductCard = ({ name, description, price, category, imageUrl }) => {

  const addProdToCart = () => {
    toast.success("Producto agregado al carrito", {
      position: "bottom-left",
    });
  };
  return (
    <CardItemsContainer>
      <CardImgContainer>
        <img src={imageUrl} alt={name} />
      </CardImgContainer>
      <CardTxtContainer>
        <h3>{name}</h3>
        <span>Peso: {description}</span>
        <span>{formatPrice(price)}</span>
      </CardTxtContainer>
      <CardBtnContainer>
        <ProdCardBtn
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1 }}
          onClick={() => addProdToCart()}
        >
          Agregar al carrito
        </ProdCardBtn>
      </CardBtnContainer>
    </CardItemsContainer>
  );
};
