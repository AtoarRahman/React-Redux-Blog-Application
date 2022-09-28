/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import searchIcon from '../../assets/images/search.svg';
import { useDispatch } from "react-redux";
import { postsLoaded, searchByInput } from '../../redux/post/actions';
import initialState from '../../redux/post/initialState';

export default function Search() {
  const dispatch = useDispatch();

  // debounce handler
  const debounce = (fn) => {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(context, args);
        }, 500);
    };
  };

  const handleChange = (value) => {
    dispatch(postsLoaded(initialState));
    dispatch(searchByInput(value));
  };

  const optimizedFn = useCallback(debounce(handleChange), []);
  

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
            className="outline-none border-none bg-gray-50 h-full w-full mr-2"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(e)=>optimizedFn(e.target.value)}
        />
        <img
            className="inline h-6 cursor-pointer"
            src={searchIcon}
            alt="Search"
        />
    </div>
  )
}
