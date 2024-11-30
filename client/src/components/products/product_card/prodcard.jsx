import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export const ProdCard = ({ name, description, price, imageUrl }) => {
  const addProdToCart = () => {
    toast.success("Producto agregado al carrito");
  };
  return (
    <div className="flex flex-col items-center px-2 py-7 gap-7 w-[300px] bg-white border-[1px] border-black">
      <div>
        <img className="w-[250px] h-[250px]" src={imageUrl} alt={name} />
      </div>
      <div className="flex flex-col justify-center items-start w-full gap-2 px-5">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>Peso: {description}</p>
        <p>{formatPrice(price)}</p>
      </div>
      <div className="flex justify-center items-center gap-6 w-full">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1 }}
          className="bg-orange-500 w-full py-[5px]"
          onClick={() => addProdToCart()}
        >
          Agregar
        </motion.button>
      </div>
    </div>
  );
};
