import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice(
    {
        name: "contact",

        initialState: [],



        reducers: {

            addContact: function (state, action) {
                let contactOb = action.payload;
                state.push(contactOb);
            }




        }

    }

);

export let { addContact } = contactSlice.actions;

export default contactSlice;