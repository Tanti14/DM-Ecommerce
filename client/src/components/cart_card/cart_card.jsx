import React from "react";
import {
  CardBtn,
  CardRightSide,
  CartCardBtns,
  CartCardContent,
  CartCardText,
} from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import Swal from "sweetalert2";
import { toast } from "sonner";

export const CartCard = ({
  id,
  name,
  description,
  price,
  imageUrl,
  quantity,
}) => {
  const deleteCartItem = () => {
    if (quantity === 1) {
      Swal.fire({
        title: "Eliminar item del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffa500",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          toast.success("Se ha eliminado el item del carrito", {
            position: "bottom-left",
          });
          dispatch(removeFromCart(id));
        }
      });
    } else {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <CartCardContent>
      <img src={imageUrl} alt={name} />
      <CardRightSide>
        <CartCardText>
          <h2>{name}</h2>
          <span>{formatPrice(price)}</span>
        </CartCardText>
        <CartCardBtns>
          <CardBtn
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.09 }}
            onClick={() => dispatch(addToCart({ id, title, img, precio }))}
          >
            +
          </CardBtn>
          <span>{quantity}</span>
          <CardBtn
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.09 }}
            onClick={() => deleteCartItem()}
          >
            -
          </CardBtn>
        </CartCardBtns>
      </CardRightSide>
    </CartCardContent>
  );
};
