/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { postsLoaded, sortByAuthor, sortByCategory } from '../../redux/post/actions';
import initialState from '../../redux/post/initialState';

export default function Post({post}) {
    const dispatch = useDispatch();
    const authors = useSelector((state) => state.authors);
    const categories = useSelector((state) => state.categories);

    const { title, photo, auth_id, category_id, created_at } = post;

    const authorSortHandler = (authId) =>{
        dispatch(postsLoaded(initialState));
        dispatch(sortByAuthor(authId));
    }

    const categorySortHandler = (catId) =>{
        dispatch(postsLoaded(initialState));
        dispatch(sortByCategory(catId));
    }

    const date1 = new Date(created_at);
    const date2 = new Date();
    const difference = date2.getTime() - date1.getTime();
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24));


    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={photo}
                    alt={title}
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
     
                {categories.map((category) => (
                    category.id === category_id && (
                        <div  key={category.id} className="flex-1 cursor-pointer">
                            <p className="text-sm font-medium text-indigo-600">
                                <span
                                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                    onClick={()=>categorySortHandler(category.id)}
                                >
                                    {category.name}
                                </span>
                            </p>
                            <a href="#" className="block mt-1">
                                <p
                                    className="text-xl font-semibold text-gray-900"
                                >
                                    {title}
                                </p>
                            </a>
                        </div>
                    )
                ))}
                
                {authors.map((auth) => (
                    auth.id === auth_id && (
                        <div  key={auth.id} className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full cursor-pointer"
                                    src={auth.photo}
                                    alt={auth.name}
                                    onClick={()=>authorSortHandler(auth.id)}
                                />
                            </div>
                            <div className="ml-3">
                                <p
                                    className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                                    onClick={()=>authorSortHandler(auth.id)}
                                >
                                    {auth.name}
                                </p>
                                <div
                                    className="flex space-x-1 text-sm text-gray-500"
                                >
                                    <time dateTime="2020-03-16"
                                        >{created_at}
                                    </time>
                                    <span aria-hidden="true">
                                        &middot;
                                    </span>
                                    <span> {totalDays > 1 ? `${totalDays} days` : `${totalDays} day`} </span>
                                </div>
                            </div>
                        </div>
                    )
                        
                ))}
                
            </div>
        </div>
    )
}
