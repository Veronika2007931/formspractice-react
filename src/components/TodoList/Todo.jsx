

export function ToDo({ todoId, text, completed, onDelete, toggleCompleted }){

 const handleDelete = ()=>{
    onDelete(todoId)
 }

 const handleChange=()=>{
    toggleCompleted(todoId)
 }
   return(

    <li>
        <input type="checkbox" name="" id="" checked={completed} onChange={handleChange}/>
        <p>{text}</p>
        <button type="button" onClick={handleDelete} >Delete</button>
    </li>

   )
}