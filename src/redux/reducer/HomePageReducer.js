const initialState = {
  productsData: [],
};

export const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addProductsData":
      return { ...state, productsData: [...action.payload] };

    default:
      return state;
  }
};
