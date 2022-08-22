
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/features/todo/todoSlice'
function AddToDo() {
 
    const dispatch = useDispatch();


    function addToDos(event) {
        event.preventDefault();
       let toDoField = event.target.elements.todoinput;

        if (toDoField.value) {
            dispatch(addToDo(toDoField.value));
            toDoField.value ="";
        }
    };


    return (
       
        <div>
            <form onSubmit={addToDos} className=" row todoinput">
            <div className=" col-md-11 col-sm-1" >
                    <input name="todoinput" className="form-control todoinput " type="text" placeholder="Add Task" aria-label="Add Task"></input>
                </div>
                <div className=" col-md-1 " >
                    <button type="submit" className="btn btn-secondary todoinput">Add</button>
                </div>

            </form>
        </div>
    )
}


export default AddToDo;