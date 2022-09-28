import { POSTSLOADED, SORTBYAUTHOR, SORTBYCATEGORY, SEARCHBYINPUT } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTSLOADED:
            return action.payload;

        case SORTBYAUTHOR:
            return state.filter((post) => post.auth_id === action.payload);

        case SORTBYCATEGORY:
            return state.filter((post) => post.category_id === action.payload);

        case SEARCHBYINPUT:
            return state.filter((post) => post.title.toString().toLowerCase().includes(action.payload.toLowerCase()));

        default:
            return state;
    }
};

export default reducer;
