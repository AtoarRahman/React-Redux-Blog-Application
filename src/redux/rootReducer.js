import { combineReducers } from "redux";
import postReducer from "./post/reducer";
import authReducer from "./author/reducer";
import categoryReducer from "./category/reducer";

const rootReducer = combineReducers({
    posts: postReducer,
    authors: authReducer,
    categories: categoryReducer,
});

export default rootReducer;
