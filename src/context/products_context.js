import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,

  sidebar_open: false,

  single_product: null,
  single_product_loading: false,
  single_product_error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const getSingleProduct = async (single_product_url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const res = await axios.get(single_product_url);
      const product = res.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
    } catch {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  const openSidebar = () => dispatch({ type: SIDEBAR_OPEN });
  const closeSidebar = () => dispatch({ type: SIDEBAR_CLOSE });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        getProducts,
        getSingleProduct,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
