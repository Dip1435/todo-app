import TodoItem from "./TodoItem";

export default function TodoList({ todoList, removeItem, editData }) {

    return (
        (todoList.length > 0) ? <ul className="list-group justify-content-center"> {(todoList.map((data, index) => <TodoItem key={index} itemData={data} id={data.id}   removeData={removeItem} editData={editData} />))} </ul> : <h5>No todo</h5>
    )

}