import React from "react";

export const CategoryItem = ({ category, handleEdit, handleDelete }) => {
  return (
    <div className="flex justify-between items-center w-full border-[1px] rounded-md px-12 py-2">
      <p>{category.categoryName}</p>
      <div className="flex justify-center items-center gap-6">
        <button
          className="rounded-md border-[1px] px-2 py-1 bg-indigo-500 text-white"
          onClick={() => handleEdit(category)}
        >
          Editar
        </button>
        <button
          className="rounded-md border-[1px] px-2 py-1 bg-red-500 text-white"
          onClick={() => handleDelete(category._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
