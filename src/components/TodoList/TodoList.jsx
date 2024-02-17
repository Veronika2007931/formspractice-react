import {ToDo} from "./Todo"

export function TodoList({todos, onDelete, onToggleCompeled}){
    return(
        <ul>
            {todos.map((todo)=>{
              return  <ToDo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onDelete={onDelete}
                toggleCompleted={onToggleCompeled}
                todoId={todo.id}
                />
            })}
        </ul>
    )
}


