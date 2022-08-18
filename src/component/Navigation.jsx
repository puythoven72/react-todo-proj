import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { searchValue } from '../store/features/search/searchToDosSlice';



function Navigation() {

    //let [searchTask,setSearchTask] = useState("");
    const dispatch = useDispatch();


    const todoList = useSelector(function (state) {

        return state.todos;

    })



    function searchToDos(event) {
        event.preventDefault();
        let toDoSearch = event.target.value;
        dispatch(searchValue(toDoSearch));
    };


    return (

        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <span className="navbar-brand"> Redux Task List</span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="#">Tasks <span className="sr-only">(current)</span></a> */}
                            <NavLink to="/" className="nav-link">Tasks</NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={searchToDos}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name='searchTask' onChange={searchToDos} on />
                        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit" >Search</button> */}
                    </form>
                </div>
            </nav>


        </div>

    )


}

export default Navigation;




