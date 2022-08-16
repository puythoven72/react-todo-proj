import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ToDoList from './component/ToDoList';
import AddToDo from './component/AddToDo';



function App() {


 
  
  return (
    <div className="App">
     
          <AddToDo/>
          <ToDoList/>

       
    </div>
  );
}

export default App;
