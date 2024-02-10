import {ToDo} from "./Todo"

export function TodoList({todos, onDelete}){
    return(
        <ul>
            {todos.map((todo)=>{
              return  <ToDo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onDelete={onDelete}
                todoId={todo.id}
                />
            })}
        </ul>
    )
}


