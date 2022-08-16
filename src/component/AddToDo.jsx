import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store/features/todo/todoSlice'
function AddToDo() {
    let [todoInput, setToDoInput] = useState();

    //const state = useSelector(function(state){state.todos});
    const dispatch = useDispatch();

    function addToDos(event) {

        event.preventDefault();
        let toDo = event.target.elements.todoinput.value;


        if (toDo) {


            
            dispatch(addToDo(toDo));


        }
    };


    return (
        <div>


            <form onSubmit={addToDos}>
                <input name="todoinput"></input><button type="submit">Add</button>



            </form>
        </div>

    )
}


export default AddToDo;