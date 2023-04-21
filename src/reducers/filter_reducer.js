import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  const { type, payload } = action;

  if (type === LOAD_PRODUCTS) {
    const allProducts = payload;
    let maxPrice = Math.max(...allProducts.map((el) => el.price));
    return {
      ...state,
      all_products: allProducts,
      filtered_products: [...allProducts],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (type === SET_LISTVIEW) return { ...state, grid_view: false };
  if (type === SET_GRIDVIEW) return { ...state, grid_view: true };
  if (type === UPDATE_SORT) return { ...state, sort: payload };
  if (type === UPDATE_FILTERS) {
    const { name, value } = payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (type === CLEAR_FILTERS)
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        shipping: false,
        price: state.filters.max_price,
      },
    };

  if (type === SORT_PRODUCTS) {
    const { sort } = state;

    let products = [...state.filtered_products];

    if (sort === "lowest-price")
      products = products.sort((a, b) => a.price - b.price);
    if (sort === "highest-price")
      products = products.sort((a, b) => -(a.price - b.price));
    if (sort === "a-z")
      products = products.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "z-a")
      products = products.sort((a, b) => -a.name.localeCompare(b.name));

    return { ...state, filtered_products: products };
  }
  if (type === FILTER_PRODUCTS) {
    const { text, category, company, color, price, shipping } = state.filters;

    // need refresh data as using more filter narrow the data if i use new filter i need refresh data.
    let products = [...state.all_products];

    if (text !== "")
      products = products.filter((product) =>
        product.name.toLowerCase().startsWith(text.toLowerCase())
      );
    if (category !== "all")
      products = products.filter((product) => product.category === category);
    if (company !== "all")
      products = products.filter((product) => product.company === company);
    if (color !== "all")
      products = products.filter((product) =>
        product.colors.find((prdColor) => prdColor === color)
      );
    if (price) products = products.filter((product) => product.price < price);

    if (shipping) products = products.filter((product) => product.shipping);

    return { ...state, filtered_products: products };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
