const initialState = {
  productsArray: [],
  brandsArr: [],
  categoryArr: [],
  variantArr: [],
  yearArr: [],
  modelArr: [],
  priceArr: [],
};

export const ProductPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateProductArray":
      return {
        ...state,
        productsArray: [...action.payload.data],
        brandsArr: [...action.payload.brand],
        categoryArr: [...action.payload.category],
        variantArr: [...action.payload.variant],
        yearArr: [...action.payload.year],
        modelArr: [...action.payload.model],
        priceArr: [...action.payload.priceRange],
      };

    default:
      return state;
  }
};
