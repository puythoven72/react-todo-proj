
import { useSelector, useDispatch } from 'react-redux';
import { markAsComplete, markAsSelected, deleteSelectedItem } from '../store/features/todo/todoSlice';
import { markAsUnselected } from '../store/features/todo/todoSlice';
import completed from '../images/completed.png';
import notcomplete from '../images/not-complete.png';
import deleteItemIcon from '../images/delete.png';

function ToDo({ todo }) {


    const dispatch = useDispatch();
    function addToSelected(event) {
        let selectedToDoId = event.target.value;

        if (selectedToDoId) {
            let checkBox = document.querySelector('[name=' + selectedToDoId + ']');
            if (checkBox.checked) {
                dispatch(markAsSelected(selectedToDoId));

            } else {

                dispatch(markAsUnselected(selectedToDoId));
            }

        };

    }

    function markAsCompleted() {
        dispatch(markAsComplete(todo.taskId));

    }
    function deleteItem() {
        dispatch(deleteSelectedItem(todo.taskId));

    }




    return (
            <tr >
            <td> <input value={todo.taskId} type="checkbox" name={todo.taskId} onClick={addToSelected} checked={todo.selected} /></td>
            
              <td> {todo.task} </td>

               <td> <span>{todo.completed ? <img src={completed} alt="task Completed" /> : <img src={notcomplete} onClick={markAsCompleted} alt="Task Not Complete"/>}</span></td>
           
                <td><span><img src={deleteItemIcon} onClick={deleteItem} alt="Delete Task" /></span></td>

            </tr>
  
    )


}


export default ToDo;