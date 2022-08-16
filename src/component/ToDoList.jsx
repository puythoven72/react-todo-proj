
import ToDo from "./ToDo";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markSelectAsComplete } from '../store/features/todo/todoSlice';
import { markAsComplete, deleteSelectedItems } from '../store/features/todo/todoSlice';


function ToDoList() {
    let [selectedList, setSelectedList] = useState([]);

    let [display, setDisplay] = useState("all");

    const todoList = useSelector(function (state) {

        switch (display) {
            case 'all':
                return state.todos;
                break;

            case 'completed':
                return (state.todos.filter(todo => todo.completed));
                break;

            case 'not-completed':
                return (state.todos.filter(todo => !todo.completed));
                break;
            default:
                console.log(`No Todos.`);
        }

    })










    const dispatch = useDispatch();

    function markSelectedAsComplete() {
        dispatch(markSelectAsComplete());

    };


    function deleteSelected() {
        dispatch(deleteSelectedItems());

    };

    function displayAll() {

    };
    function displayCompleted() {
        setDisplay("completed");
    };

    function displayNotCompleted() {
        setDisplay("not-completed");
    };

    function displayAll() {
        setDisplay("all");
    };







    return (





        <div className="table-responsive todo-List">

            <div className="row  w-49 mx-auto">
                <button className="btn btn-primary" onClick={displayCompleted}>Display Completed</button>
                <button className="btn btn-primary" onClick={displayNotCompleted}>Display Not Completed</button>
                <button className="btn btn-primary" onClick={displayAll}>DisplayAll</button>
            </div>

            <table className="table table-striped  table-bordered">

                <thead>
                    <tr className="table-primary">
                        <th scope="col-md-1"></th>
                        <th scope="col-md-9" >Task</th>
                        <th scope="col-md-1">Complete</th>
                        <th scope="col-md-1">Delete</th>
                    </tr>
                </thead>


                <tbody>
                    {

                        todoList.map(function (todo, index) {
                            return (
                                <ToDo todo={todo} />
                            );

                        })

                    }
                </tbody>
            </table>




            <div className="row  w-49 mx-auto">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={markSelectedAsComplete}>Mark Selected As Complete</button>


                </div>
                <div className="col-6 ">

                    <button className="btn btn-primary" onClick={deleteSelected}>Delete Selected</button>

                </div>



            </div>

            {/* <div>
                <button className="btn btn-primary" onClick={displayCompleted}>Display Completed</button>
                <button className="btn btn-primary" onClick={displayNotCompleted}>Display Not Completed</button>
                <button className="btn btn-primary" onClick={displayAll}>DisplayAll</button>
            </div> */}






        </div>


    )


}


export default ToDoList;