import React, { createContext, useState } from "react";
import api from "../utility/api";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  // Loading and error states for categories and products
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [errorCategories, setErrorCategories] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [errorProducts, setErrorProducts] = useState(null);

  // Fetch Categories
  const fetchCategories = async () => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await api.get("/store/categories/");
      setCategories(response.data.data);
    } catch (err) {
      setErrorCategories(
        err.response?.data?.error || "Error fetching categories"
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  // Create Category
  const createCategory = async (data) => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await api.post("/store/categories/", data);
      fetchCategories();
      return response.data;
    } catch (err) {
      setErrorCategories(
        err.response?.data?.error || "Error creating category"
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  // Fetch single Category
  const fetchSingleCategory = async (id) => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await api.get(`/store/categories/${id}/`);
      setCategory(response.data.data);
      return response.data;
    } catch (err) {
      setErrorCategories(
        err.response?.data?.error || "Error creating category"
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  // Update Category
  const updateCategory = async ({ id, name }) => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await api.put(`/store/categories/${id}/`, { name });
      fetchCategories();
      return response.data;
    } catch (err) {
      setErrorCategories(
        err.response?.data?.error || "Error creating category"
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  // Delete Category
  const deleteCategory = async (id) => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await api.delete(`/store/categories/${id}/`);
      fetchCategories(); // Re-fetch categories after creating a new one
      return response.data;
    } catch (err) {
      setErrorCategories(
        err.response?.data?.error || "Error creating category"
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    setLoadingProducts(true);
    setErrorProducts(null);
    try {
      const response = await api.get("/store/products/");
      setProducts(response.data.data);
    } catch (err) {
      setErrorProducts(err.response?.data?.error || "Error fetching products");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Create Product
  const createProduct = async (data) => {
    setLoadingProducts(true);
    setErrorProducts(null);
    try {
      const response = await api.post("/store/products/", data);
      fetchProducts(); // Re-fetch products after creating a new one
      return response.data;
    } catch (err) {
      setErrorProducts(err.response?.data?.error || "Error creating product");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Create Product
  const updateProduct = async ({id,data}) => {
    setLoadingProducts(true);
    setErrorProducts(null);
    try {
      const response = await api.put(`/store/products/${id}/`,data);
      fetchProducts(); // Re-fetch products after creating a new one
      return response.data;
    } catch (err) {
      setErrorProducts(err.response?.data?.error || "Error creating product");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    setLoadingProducts(true);
    setErrorProducts(null);
    try {
      const response = await api.delete(`/store/products/${id}/`);
      fetchProducts(); // Re-fetch products after creating a new one
      return response.data;
    } catch (err) {
      setErrorProducts(err.response?.data?.error || "Error creating product");
    } finally {
      setLoadingProducts(false);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        categories,
        category,
        fetchCategories,
        createCategory,
        updateCategory,
        fetchSingleCategory,
        deleteCategory,

        products,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,


        loadingCategories,
        errorCategories,
        loadingProducts,
        errorProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
