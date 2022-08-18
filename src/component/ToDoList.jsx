
import ToDo from "./ToDo";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markSelectAsComplete, deleteSelectedItems } from '../store/features/todo/todoSlice';
import { searchValue } from '../store/features/search/searchToDosSlice';



function ToDoList() {
    let [selectedList, setSelectedList] = useState([]);


    let [display, setDisplay] = useState("all");

    const dispatch = useDispatch();



    const todoList = useSelector(function (state) {
        if (state.searchToDos.searchVal) {
            let searchVal = state.searchToDos.searchVal.toLowerCase();
            return (state.todos.filter(todo => todo.task.toLowerCase().startsWith(searchVal)));

        } else {
            switch (display) {
                case 'all':
                    return state.todos;

                case 'completed':
                    return (state.todos.filter(todo => todo.completed));

                case 'not-completed':
                    return (state.todos.filter(todo => !todo.completed));

                default:
                    return state.todos;
            }
        }


    });





    function markSelectedAsComplete() {
        dispatch(markSelectAsComplete());

    };


    function deleteSelected() {
        dispatch(deleteSelectedItems());

    };

    function filterTasks(event) {
        let taskFilter = event.target.value;
        switch (taskFilter) {
            case 'all':
                setDisplay("all");
                break;

            case 'completed':
                setDisplay("completed");
                break;

            case 'not-completed':
                setDisplay("not-completed");
                break;
            default:
                setDisplay("all");
        }

    };

    return (





        <div className="table-responsive todo-List h-100">

            <div className="row  w-49 mx-auto">

                <div className="col-12">
                    <label htmlFor="display">Filter Tasks: &nbsp;</label>
                    <select name="display" id="display" onChange={filterTasks}>
                        <option value="completed">Display Completed</option>
                        <option value="not-completed">Display Not Completed</option>
                        <option value="all" selected>Display All</option>

                    </select>
                </div>
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



            {todoList.length > 0 ?
                <div className="row text-right ">
                    <div className="col-10  ">
                        <button className="btn btn-success text-right" onClick={markSelectedAsComplete}>Mark As Complete</button>


                    </div>
                    <div className="col">

                        <button className="btn btn-danger" onClick={deleteSelected}>Delete</button>

                    </div>



                </div>
                : null}

            {/* <div>
                <button className="btn btn-primary" onClick={displayCompleted}>Display Completed</button>
                <button className="btn btn-primary" onClick={displayNotCompleted}>Display Not Completed</button>
                <button className="btn btn-primary" onClick={displayAll}>DisplayAll</button>
            </div> */}






        </div>


    )


}


export default ToDoList;