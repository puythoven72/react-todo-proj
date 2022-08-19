
import ToDo from "./ToDo";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markSelectAsComplete, deleteSelectedItems, markAllAsSelected,markAllAsUnSelected } from '../store/features/todo/todoSlice';




function ToDoList() {

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

    function handleAllSelect() {
        
        let markAllCheckBox = document.querySelector('[name = select-all]');
        
        if(markAllCheckBox.checked){
            dispatch(markAllAsSelected());

        }else{

            dispatch(markAllAsUnSelected());
        }


        
    };



    function markSelectedAsComplete() {
        dispatch(markSelectAsComplete());
       
        let markAllCheckBox = document.querySelector('[name = select-all]');
        markAllCheckBox.checked =false;
    };


    function deleteSelected() {
        dispatch(deleteSelectedItems());
        let markAllCheckBox = document.querySelector('[name = select-all]');
        markAllCheckBox.checked =false;

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
        <div className="table-responsive todo-List">

            <div className="row  w-49 mx-auto filter-section">

                <div className="col-12">
                    <label htmlFor="display"><h5>Filter Tasks: &nbsp;</h5></label>
                    <select name="display" id="display" onChange={filterTasks}>
                        <option value="completed">Display Completed</option>
                        <option value="not-completed">Display Not Completed</option>
                        <option value="all" selected>Display All</option>

                    </select>
                </div>
            </div>
 <div className="  table-wrapper"> 
            <table className="table table-striped  table-bordered task-table">

                <thead>
                    <tr className="table-primary">
                        <th scope="col-1" className="col-1"><input type="checkbox" name="select-all" onClick={handleAllSelect} /></th>
                        <th scope="col-9" className="col-9 ">Task</th>
                        <th scope="col-1" className=" col-1" >Complete</th>
                        <th scope="col-1"  className=" col-1">Delete</th>
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

             </div> 

            {todoList.length > 0 ?
                <div className="row text-center update-buttons">
                    <div className="col-md-6 col-sm-1">
                        <button className="btn btn-success update-button " onClick={markSelectedAsComplete}>Complete</button>

                    </div>
                    <div className="col-md-6 col-sm-1">

                        <button className="btn btn-danger update-button" onClick={deleteSelected}>Delete</button>

                    </div>
                </div>
                : null}

        </div>

    )

}


export default ToDoList;