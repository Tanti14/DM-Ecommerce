import React, { createContext, useState, useContext, useEffect } from "react";
import {
  createProductRequest,
  getProductsRequest,
  getProductRequest,
  updateProductRequest,
  deleteProductRequest,
  getCategoriesRequest,
  createCategoryRequest,
  updateCategoryRequest,
  deleteCategoryRequest,
} from "../api/management";

import {
  getUsersRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
} from "../api/users";
import { use } from "react";

const ManagementContext = createContext();

export const useManagement = () => {
  const context = useContext(ManagementContext);
  if (!context) {
    throw new Error("useManagement must be used within an ManagementProvider");
  }
  return context;
};

export const ManagementProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const Products = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }

    acc[product.category] = [...acc[product.category], product];
    return acc;
  }, {});

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all" ? products : Products[selectedCategory] || [];

  /* Categories Management */
  const getCategories = async () => {
    try {
      const res = await getCategoriesRequest();
      setCategories(res.data);
    } catch (error) {
      console.log("No hay categorias");
    }
  };

  const createCategory = async (category) => {
    try {
      const res = await createCategoryRequest(category);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      const res = await updateCategoryRequest(id, category);
      console.log("Category updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryRequest(id);

      if (res.status === 200) {
        setCategories(categories.filter((category) => category._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================================================================== */
  /* Cart Management */

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id) => {
    const product = cart.find((product) => product._id === id);
    setCart([...cart, product]);
  };

  const decreaseQuantity = (id) => {
    const product = cart.find((product) => product._id === id);
    setCart([...cart, product]);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  };

  /* =========================================================================== */
  /* Products Management */
  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
      console.log("No se encontraron productos");
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id);
      return res.data;
    } catch (error) {
      console.log("No se encontro el producto solicitado");
    }
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      console.log("Product updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 200) {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================================================================== */
  /* User Management */
  const getUsers = async () => {
    try {
      const res = await getUsersRequest();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (user) => {
    try {
      const res = await createUserRequest(user);
      console.log(res.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const res = await updateUserRequest(id, user);
      console.log("User updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await deleteUserRequest(id);
      if (res.status === 200) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ManagementContext.Provider
      value={{
        products,
        getProducts,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        filteredProducts,
        categories,
        getCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        selectedCategory,
        handleCategoryChange,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        users,
        getUsers,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </ManagementContext.Provider>
  );
};
