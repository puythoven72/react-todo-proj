
import ToDo from "./ToDo";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markSelectAsComplete } from '../store/features/todo/todoSlice';
import { markAsComplete,deleteSelectedItems } from '../store/features/todo/todoSlice';


function ToDoList() {
    let [selectedList, setSelectedList] = useState([]);

    let [display,setDisplay] = useState("all");

    const todoList = useSelector(function (state) {

        return state.todos;

    })



      





    const dispatch = useDispatch();

    function markSelectedAsComplete() {
        dispatch(markSelectAsComplete());  

    };


    function deleteSelected() {
        dispatch(deleteSelectedItems());  

    };

  
 


  

    return (
        <div>
            {/* <ul> */}
            {

                todoList.map(function (todo, index) {
                    return (
                        <ToDo todo={todo} setSelectedList={setSelectedList} />
                    );

                })

            }
            <div>
                <button className = "btn btn-primary" onClick={markSelectedAsComplete}>Mark Selected As Complete</button>
                <button className = "btn btn-primary" onClick={deleteSelected}>Delete Selected</button>
            </div>

            <div>
               
            </div>



            {/* </ul> */}


        </div>


    )


}


export default ToDoList;