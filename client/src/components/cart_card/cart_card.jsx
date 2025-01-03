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
import { useManagement } from "@/context/ManagementContext";
import toast from "react-hot-toast";

/* {id, name, description, price, imageUrl, quantity } */

export const CartCard = (item) => {
  const { removeFromCart, addToCart, decrementFromCart } = useManagement();

  const deleteCartItem = () => {
    if (item.quantity === 1) {
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
          toast.success("Se ha eliminado el item del carrito");
          removeFromCart(item.id);
        }
      });
    } else {
      decrementFromCart(item.id);
      /* Añadir decrementar items de carrito */
    }
  };

  return (
    <CartCardContent>
      <img src={item.imageUrl} alt={item.name} />
      <CardRightSide>
        <CartCardText>
          <h2>{item.name}</h2>
          <span>{formatPrice(item.price)}</span>
        </CartCardText>
        <CartCardBtns>
          <CardBtn
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.09 }}
            onClick={() => addToCart(item)}
          >
            +
          </CardBtn>
          <span>{item.quantity}</span>
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
