import { createStore } from "redux";
import { textListReducer } from "../src/redux/textsReducer";

const store = createStore(textListReducer);

export default store;
