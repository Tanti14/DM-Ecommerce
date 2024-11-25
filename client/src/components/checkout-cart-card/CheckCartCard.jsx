import React from "react";
import { CartCardContent, CartCardText } from "./styles";
import { formatPrice } from "../../utils/formatPrice";

export const CheckCartCard = ({ id, img, title, precio, quantity }) => {
  return (
    <CartCardContent>
      <img src={img} alt={title} />
      <CartCardText>
        <h2>{title}</h2>
        <span>{formatPrice(precio)}</span>
        <span>Cantidad: {quantity}</span>
      </CartCardText>
    </CartCardContent>
  );
};
