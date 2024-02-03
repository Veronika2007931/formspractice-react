

export function ToDo({text, completed}){
   return(

    <li>
        <input type="checkbox" name="" id="" checked={completed}/>
        <p>{text}</p>
        <buttonm type="button" >Delete</buttonm>
    </li>

   )
}