
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { searchValue } from '../store/features/search/searchToDosSlice';



function Navigation() {

    //let [searchTask,setSearchTask] = useState("");
    const dispatch = useDispatch();


    function searchToDos(event) {
        event.preventDefault();
        let toDoSearch = event.target.value;
        dispatch(searchValue(toDoSearch));
    };


    return (

        <div className="container">
             <nav className="navbar navbar-expand-md navbar-light nav-color fixed-top"> 
            {/* <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"> */}

    
                <span className="navbar-brand title-font"> Redux Task List</span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item title-font">

                            <NavLink to="/" className="nav-link">Tasks</NavLink>
                        </li>
                        <li className="nav-item title-font">

                            <NavLink to="/contact" className="nav-link">Comments</NavLink>
                        </li>
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={searchToDos}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search Tasks" aria-label="Search" name='searchTask' onChange={searchToDos} on />
                        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit" >Search</button> */}
                    </form>
                </div>
            </nav>


        </div>

    )


}

export default Navigation;




