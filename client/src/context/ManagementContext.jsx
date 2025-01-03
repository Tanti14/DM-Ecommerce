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

import {
  deleteMessageRequest,
  getMessagesRequest,
  sendMessageRequest,
  updateMessageStatusRequest,
} from "../api/msg";

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

  /* =================================================================== */
  /* Filtrado de Productos */
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

  /* =================================================================== */

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
  /* =========================================================================== */
  /* Messages Management */
  const [messages, setMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState(false);

  /* Filtrado de Mensajes */
  const Messages = messages.reduce((acc, message) => {
    if (!acc[message.isReaded]) {
      acc[message.isReaded] = [];
    }

    acc[message.isReaded] = [...acc[message.isReaded], message];
    return acc;
  }, {});

  const handleMessageChange = (isReaded) => {
    setSelectedMessages(isReaded);
    getMessages();
  };

  const filteredMessages =
    selectedMessages === "" ? messages : Messages[selectedMessages] || [];

  /* Controllers de Mensajes */
  const getMessages = async () => {
    try {
      const res = await getMessagesRequest();
      setMessages(res.data);
    } catch (error) {
      /* console.log(error); */
    }
  };

  const sendMessage = async (msg) => {
    try {
      const res = await sendMessageRequest(msg);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMessageStatus = async (id, msg) => {
    try {
      const res = await updateMessageStatusRequest(id, msg);
      if (res.status === 200) {
        /* setMessages(messages.map((message) => message._id === id)); */
        setMessages((prevMessages) =>
          prevMessages.map((message) =>
            message._id === id ? { ...message, isReaded: true } : message
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const res = await deleteMessageRequest(id);
      if (res.status === 200) {
        setMessages(messages.filter((message) => message._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================================================================== */
  /* Cart Management */

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const decrementFromCart = (productId) => {
    const productInCartIndex = cart.findIndex((item) => item.id === productId);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;
      return setCart(newCart);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
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
        users,
        getUsers,
        createUser,
        updateUser,
        deleteUser,
        getMessages,
        sendMessage,
        updateMessageStatus,
        deleteMessage,
        messages,
        filteredMessages,
        selectedMessages,
        handleMessageChange,
        cart,
        addToCart,
        decrementFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ManagementContext.Provider>
  );
};
