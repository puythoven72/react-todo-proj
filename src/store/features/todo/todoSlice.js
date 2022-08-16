import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice(

    {
        name: "todos",
        initialState: [],

        reducers: {
            addToDo: function (state, action) {
                let rmvSpaceId = action.payload.replaceAll(" ", "");
                let todo = {
                    taskId: (rmvSpaceId + Math.floor(Math.random() * 1000)),
                    task: action.payload,
                    completed: false,
                    selected: false,
                };

                state.push(todo);
            },
            markSelectAsComplete: function (state) {
                //let taskId = action.payload;
                state.map(function(todo){
                    if(todo.selected){
                        todo.completed = true;
                        todo.selected = false;
                    }
                })

            },

            deleteSelectedItems: function (state) {
              return (state = state.filter(todo => !todo.selected));        
            },


            deleteSelectedItem: function (state,action) {
                let taskId = action.payload;


                return (state = state.filter(todo =>  todo.taskId !== taskId));        
              },


            markAsComplete: function (state,action) {
                let taskId = action.payload;
                const todo = state.find((todo) => todo.taskId === taskId);
                todo.completed = true;
                todo.selected = false;

            },

            markAsSelected: function (state, action) {
                let taskId = action.payload;
                const todo = state.find((todo) => todo.taskId === taskId);
                todo.selected = true;


            },
            markAsUnselected: function (state, action) {
                let taskId = action.payload;
                const todo = state.find((todo) => todo.taskId === taskId);
                todo.selected = false;


            },


        //    returnAllCompleted: function (state) {
        //         return (state.filter(todo => todo.completed));        
        //       },


        },




    }


);
export let { addToDo,markSelectAsComplete ,markAsSelected,markAsComplete,markAsUnselected,deleteSelectedItems,deleteSelectedItem} = todoSlice.actions;
export default todoSlice;