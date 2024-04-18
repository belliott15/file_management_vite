import { applyMiddleware, combineReducers, configureStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer.js";

const store = configureStore(
  combineReducers({ auth: authReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
