import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";
import { combineReducers } from 'redux';
import searchToDosSlice from "./features/search/searchToDosSlice";


 const reducer = combineReducers({
     todos: todoSlice.reducer,
   searchToDos: searchToDosSlice.reducer
   })



const store = configureStore({
    reducer,


}

)

export default store;