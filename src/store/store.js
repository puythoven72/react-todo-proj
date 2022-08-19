import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";
import { combineReducers } from 'redux';
import searchToDosSlice from "./features/search/searchToDosSlice";
import contactSlice from "./features/contact/contactSlice";


const reducer = combineReducers({
    todos: todoSlice.reducer,
    searchToDos: searchToDosSlice.reducer,
    contact: contactSlice.reducer
})



const store = configureStore({
    reducer,


}

)

export default store;