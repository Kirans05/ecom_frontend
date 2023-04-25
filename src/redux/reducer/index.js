import { combineReducers } from "redux";
import { HomePageReducer } from "./HomePageReducer";
import { ProductPageReducer } from "./ProductPageReducer";

const rootReducer = combineReducers({
  HomePageReducer,
  ProductPageReducer,
});

export default rootReducer;
