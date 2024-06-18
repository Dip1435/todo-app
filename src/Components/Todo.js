import {  useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {

    const [todoList, setTodoList] = useState([])
    const[update , setUpdate] = useState(null)

    function addItem(todoObj) {
        if (update) {
            setTodoList(todoList.map((data, index) => data.id === update.id ? todoObj : data)) 
            setUpdate(null)
        } else {
            setTodoList([...todoList, todoObj])
        }
    }
    
    
   

    function removeItem(id) {
        setTodoList(todoList.filter((data) => data.id !== id)) 
    }
    function editData(id) {
        setUpdate(todoList.find((data) => data.id === id))
        
    }

    // todoList = todoList.toSorted((a,b) => b.id - a.id)
    return (
        <div className="container bg-success-subtle mt-3 border rounded shadow p-3 mb-5 bg-body-tertiary rounded">
            <h2 className="mt-3 text-bg-success border rounded p-3">TO DO APP</h2>
            <TodoForm addItem={addItem} update ={update} />
            <hr className="border border-black border-2 opacity-50"/>
            <TodoList todoList={todoList} removeItem={removeItem} editData={editData} />
        </div>
    )
}