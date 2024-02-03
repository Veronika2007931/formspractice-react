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

  render(){
    return (
      <div>
       
       <TodoEditor addToDo={this.addToDo}/>
      <TodoList todos={this.state.todos}/>
      </div>
    )}
};
