import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { motion } from "framer-motion";
import { useManagement } from "@/context/ManagementContext";

export const ProdCard = ({ id, name, description, price, imageUrl }) => {
  const { cart, addToCart } = useManagement();

  console.log(cart);
  return (
    <div className="flex flex-col items-center gap-6 bg-white border-[2px] w-[350px] border-black shadow-2xl">
      <div className="w-full">
        <img className="w-full" src={imageUrl} alt={name} />
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="text-center">{description}</p>
        <p className="font-bold text-lg">{formatPrice(price)}</p>
      </div>

      <div className="w-full p-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-orange-400 w-full p-2 text-white font-bold"
          onClick={() => addToCart({ id, name, description, price, imageUrl })}
        >
          Agregar
        </motion.button>
      </div>
    </div>
  );
};
