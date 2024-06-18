import { useEffect, useState } from "react"

export default function TodoForm({ addItem, update }) {

    const [todo, setTodo] = useState("")
    const [todotime, setTodoTime] = useState("00:00")
    const [todostatus, setTodoStatus] = useState("pending")
    let [id, setId] = useState(1)

    useEffect(() => {
        if (update) {
            setTodo(update.type)
            setTodoTime(update.estimationTime)
            setTodoStatus(update.status)
        }
    },[update])

    function handleInput() {
        let regEx = /[0-9]/g

        let todoObj = {
            id: update ? update.id : id,
            type: todo,
            estimationTime: todotime,
            status: todostatus
        }

        if (regEx.test(todo) || todo === "") {
            alert("Please Enter Todo")
        } else if (todotime < 0) {
            alert("Enter Valid Estimation Time")
        } else if (todostatus === "" || todotime === "") {
            setTodoStatus("pending")  
            setTodoTime("00:00")
            addItem(todoObj)
            // if (!update) setId(id + 1)
            // setTodo("")
        } 
            
        else {
            addItem(todoObj)
            if (!update) setId(id + 1)
            setTodo("")
            setTodoTime("00:00")
            setTodoStatus("pending")
        }
    }

    return (
        <div className="container ">

            <form className="mt-5">

                <input className="form-control border-success border-opacity-25" type="text" placeholder="Enter To Do" value={todo} onChange={(e) => setTodo(e.target.value)}></input><br /><br />
                <select className="form-select border-success border-opacity-25" value={todostatus}  onChange={(e) => setTodoStatus(e.target.value)}>
                    <option value={"pending"}>pending</option>
                    <option value={"started"}>started</option>
                    <option value={"complete"}>complete</option>
                </select><br /><br />
                <input className="form-control border-success border-opacity-25" type="number" min={0} placeholder="Estimation Time"  value={todotime} onChange={(e) => setTodoTime(e.target.value)}></input><br /><br />
                <button className="btn btn-success" onClick={(e) => { e.preventDefault(); handleInput() }}>{update ? "Save" : "Add"}</button>

            </form>
        </div>
    )
}