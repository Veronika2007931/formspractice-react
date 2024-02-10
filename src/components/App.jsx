import React from "react"
import {TodoList} from "./TodoList/TodoList"
import {Component} from "react"
import initialTodos from "../todo.json"
import {TodoEditor} from "./TodoList/TodoEditor"
import { nanoid } from "nanoid"

export class App extends Component{

 state={
   
      todos: initialTodos,
      filter: '',
  
  }

deleteTodo=(todoId)=>{
  this.setState((prevState)=>{
    return{
      todos:prevState.todos.filter(todo=>todo.id !== todoId)
    }
  })
}

toggleCompleted = (todoId) => {
  this.setState(prevState => (
    {todos: prevState.todos.map(todo=> todo.id === todoId ?{...todo, 
      completed: !todo.completed} : todo)
   
    })
  )
}

  addToDo=(text) =>{
    const newToDo={
      text: text,
      // зверху запис який можна просто написати 
      // text тому що однакові ключ і значення
      completed: false,
      id:nanoid()
    }

    this.setState((prevState)=>{
      return{
        todos:[newToDo, ...prevState.todos]
      }
    })
  }

  componentDidUpdate(prevState){
    if(prevState.todos !== this.state.todos){
      localStorage.setItem('todos', JSON.stryngify(this.state.todos))
    }
  }

  componentDidUpdate(prevState){
  if(prevState.todos !== this.state.todos){
    window.localStorage.setItem('todos', JSON.stringify(this.state))
  }
  }

  render(){
    return (
      <div>
       
       {/* <TodoEditor addToDo={this.addToDo}/>
      <TodoList todos={this.state.todos} onDelete={this.deleteTodo}
      onToggleCompiled={this.toggleCompleted}/> */}
      </div>
    )}
};
