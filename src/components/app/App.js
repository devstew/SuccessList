import React from "react";
import AppHeader from "../app-header/AppHeader";
import SearchPanel from "../search-panel/SearchPanel";
import ItemStatusFilter from "../item-status-filter/ItemStatusFilter";
import TodoList from "../todo-list/TodoList";
import './App.css';


const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id:1},
        {label: 'Make awesome App', important: true, id:2},
        {label: 'Have a breakfast', important: false, id:3}
    ];

    return (
        <div className='todo-app'>
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;