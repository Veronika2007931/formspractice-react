import {ToDo} from "./Todo"

export function TodoList({todos}){
    return(
        <ul>
            {todos.map((todo)=>{
              return  <ToDo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                />
            })}
        </ul>
    )
}


