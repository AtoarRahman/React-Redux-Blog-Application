import { LIST } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST:
            return {...state};

        default:
            return state;
    }
};

export default reducer;
