import { combineReducers, createStore } from "redux";
import userReducer, { userDataReducer } from "./reducers/user.reducer";

const reducer = combineReducers({
  user: userReducer,
  userData: userDataReducer,
});
const store = createStore(reducer);

export default store;
