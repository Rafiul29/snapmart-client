import React, { createContext, useState } from "react";
import api from "../utility/api";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);

  // Loading and error states
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [errorCategories, setErrorCategories] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [errorProducts, setErrorProducts] = useState(null);
  const [loadingStocks, setLoadingStocks] = useState(false);
  const [errorStocks, setErrorStocks] = useState(null);

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
        err.response?.data?.error ||  err.response?.data?.detail || "Error creating category"
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
        err.response?.data?.error || "Error fetching category"
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
        err.response?.data?.error || "Error updating category"
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
      fetchCategories();
      return response.data;
    } catch (err) {
      setErrorCategories(
        err.response?.data?.error || "Error deleting category"
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
      fetchProducts();
      return response.data;
    } catch (err) {
      setErrorProducts(err.response?.data?.error ||  err.response?.data?.detail || "Error creating product");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Update Product
  const updateProduct = async ({ id, data }) => {
    setLoadingProducts(true);
    setErrorProducts(null);
    try {
      const response = await api.put(`/store/products/${id}/`, data);
      fetchProducts();
      return response.data;
    } catch (err) {
      setErrorProducts(err.response?.data?.error || "Error updating product");
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
      fetchProducts();
      return response.data;
    } catch (err) {
      setErrorProducts(err.response?.data?.error || "Error deleting product");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Fetch Stocks
  const fetchStocks = async () => {
    setLoadingStocks(true);
    setErrorStocks(null);
    try {
      const response = await api.get("/store/stocks/");
      setStocks(response.data.data);
    } catch (err) {
      setErrorStocks(err.response?.data?.error || "Error fetching stocks");
    } finally {
      setLoadingStocks(false);
    }
  };

  // Create Stock
  const createStock = async (data) => {
    setLoadingStocks(true);
    setErrorStocks(null);
    try {
      const response = await api.post("/store/stocks/", data);
      fetchStocks();
      return response.data;
    } catch (err) {
      setErrorStocks(err.response?.data?.error ||   err.response?.data?.detail ||"Error creating stock");
    } finally {
      setLoadingStocks(false);
    }
  };

  // Update Stock
  const updateStock = async ({ id, data }) => {
    setLoadingStocks(true);
    setErrorStocks(null);
    try {
      const response = await api.put(`/store/stocks/${id}/`, data);
      fetchStocks();
      return response.data;
    } catch (err) {
      setErrorStocks(err.response?.data?.error || "Error updating stock");
    } finally {
      setLoadingStocks(false);
    }
  };

  // Delete Stock
  const deleteStock = async (id) => {
    setLoadingStocks(true);
    setErrorStocks(null);
    try {
      const response = await api.delete(`/store/stocks/${id}/`);
      fetchStocks();
      return response.data;
    } catch (err) {
      setErrorStocks(err.response?.data?.error  || "Error deleting stock");
    } finally {
      setLoadingStocks(false);
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

        stocks,
        fetchStocks,
        createStock,
        updateStock,
        deleteStock,

        loadingCategories,
        errorCategories,
        loadingProducts,
        errorProducts,
        loadingStocks,
        errorStocks,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
