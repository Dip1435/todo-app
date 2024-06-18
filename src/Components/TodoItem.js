
export default function TodoItem({ itemData, id, removeData, editData , index }) {

    function handleDelete() {
        removeData(id)
    }
    function handleEdit() {
        editData(id)
        
    }
    
    return (
        <div className="text-center ">
            <li className="p-3 mb-2 bg-success text-white border rounded">
                <span><b>{ index}</b></span>
                    {Object.values(itemData).map((value, index) => <span className="px-5" key={index}>{value}</span>)}
                    <i  className= "bi bi-trash mx-3 bg-danger p-2 border rounded " onClick={handleDelete} ></i>
                    <i className="bi bi-pencil-square mx-3 bg-secondary p-2 border rounded " onClick={handleEdit} ></i>
            </li>
        </div>
    )
}