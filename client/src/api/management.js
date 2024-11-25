import axios from "./axios";

/* Products Management Routes */
export const getProductsRequest = () => axios.get("/products");
export const getProductRequest = (id) => axios.get(`/products/${id}`);

export const createProductRequest = (product) => axios.post("/products", product);
export const updateProductRequest = (id, product) => axios.put(`/products/${id}`, product);
export const deleteProductRequest = (id) => axios.delete(`/products/${id}`);

/* Categories Management Routes */
export const getCategoriesRequest = () => axios.get("/categories");
export const createCategoryRequest = (category) => axios.post("/categories", category);
export const updateCategoryRequest = (id, category) => axios.put(`/categories/${id}`, category);
export const deleteCategoryRequest = (id) => axios.delete(`/categories/${id}`);