import { createSlice } from "@reduxjs/toolkit";



const searchToDosSlice = createSlice(

    {
        name: "searchToDos",
        initialState:{ searchVal: ''},

        reducers: {
            searchValue: function (state, action) {
                return {
                    ...state,
                    searchVal: action.payload,
                  }
            },

        },

    }

);
export let { searchValue } = searchToDosSlice.actions;
export default searchToDosSlice;