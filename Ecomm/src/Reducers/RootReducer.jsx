import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
  ItemsReducer :ItemsReducer,
  CartReducer : CartReducer
})

export default RootReducer