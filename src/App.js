import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ToDoList from './component/ToDoList';
import AddToDo from './component/AddToDo';
import Navigation from './component/Navigation';



function App() {




  return (
    <div className="App">
      <main role="main" className ="container">
        <AddToDo />
        <ToDoList />
      </main>

    </div>
  );
}

export default App;
