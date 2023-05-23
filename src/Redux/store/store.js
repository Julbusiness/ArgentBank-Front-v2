import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
	reducer: rootReducer,
	devTool: true,
});

export default store;
