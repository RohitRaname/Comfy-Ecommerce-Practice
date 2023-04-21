import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  all_products: [],
  filtered_products: [],

  grid_view: true,
  sort: "lowest-price",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    max_price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  const loadProducts = () =>
    dispatch({ type: LOAD_PRODUCTS, payload: products });

  const setGridView = () => dispatch({ type: SET_GRIDVIEW });

  const setListView = () => dispatch({ type: SET_LISTVIEW });

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const sortProducts = () => dispatch({ type: SORT_PRODUCTS });

  const updateFilters = (e) => {
    const target = e.target;
    let { name, value } = target;

    if (target.type === "radio") {
      value = target.checked;
    }
    dispatch({
      type: UPDATE_FILTERS,
      payload: { name, value },
    });
  };

  const filterProducts = () => dispatch({ type: FILTER_PRODUCTS });

  const clearFilters = () => dispatch({ type: CLEAR_FILTERS });

  // get fresh filterProduct when user select filter options
  useEffect(() => {
    filterProducts();
    sortProducts();
  }, [state.filters, state.sort]);

  // load newFreshAllProducts when products are refetched
  useEffect(() => {
    loadProducts();
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
