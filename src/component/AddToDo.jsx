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


            <form onSubmit={addToDos} className=" row">
                <div className=" col-md-11 col-sm-1" >
                    <input name="todoinput" className="form-control todoinput " type="text" placeholder="Add Task" aria-label="Add Task"></input>
                </div>
                <div className="col col-md-1 " >
                    <button type="submit" className="btn btn-secondary ">Add</button>
                </div>

            </form>

        </div>






    )
}


export default AddToDo;