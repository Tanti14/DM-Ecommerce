import React from "react";
import { CartCardContent, CartCardText } from "./styles";
import { formatPrice } from "../../utils/formatPrice";

export const CheckCartCard = ({ id, name, description, price, imageUrl, quantity }) => {
  return (
    <CartCardContent>
      <img src={imageUrl} alt={name} />
      <CartCardText>
        <h2>{name}</h2>
        <span>{formatPrice(price)}</span>
        <span>Cantidad: {quantity}</span>
      </CartCardText>
    </CartCardContent>
  );
};
