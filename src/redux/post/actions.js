import { POSTSLOADED, SORTBYAUTHOR, SORTBYCATEGORY, SEARCHBYINPUT } from "./actionTypes";

export const postsLoaded = (posts) => {
    return {
        type: POSTSLOADED,
        payload: posts,
    };
};

export const sortByAuthor = (id) => {
    return {
        type: SORTBYAUTHOR,
        payload: id,
    };
};

export const sortByCategory = (id) => {
    return {
        type: SORTBYCATEGORY,
        payload: id,
    };
};

export const searchByInput = (value) => {
    return {
        type: SEARCHBYINPUT,
        payload: value,
    };
};
