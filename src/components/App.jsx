import React from "react"
import {TodoList} from "./TodoList/TodoList"
import {Component} from "react"
import initialTodos from "../todo.json"
import {Modal} from "./Modal/Modal.jsx"
import {TodoEditor} from "./TodoList/TodoEditor"
import { nanoid } from "nanoid"
import {Btn} from "./Button/Button"
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Filter } from "./Filter/Filter"



export class App extends Component{

 state={
   
      todos: initialTodos,
      filter: '',
  
  }

  changeFilter=(e)=>{
    this.setState({
      filter:e.currentTarget.value
    })
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

    this.toggleModal()
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

  toggleModal = () => {
    this.setState(prev=>({showModal: !prev.showModal}))
    }
  visibleTask=()=>{
   return this.state.todos.filter(toDo=>toDo.text.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  render(){
    const visibleTask =this.visibleTask()
    return (
      
      <div>
       <Btn type="button" onClick={this.toggleModal}><FaPlus size={40}/></Btn>
{this.state.showModal && <Modal onClose={this.toggleModal}>
<Btn type="button" onClick={this.toggleModal}><IoMdClose /></Btn>
<TodoEditor addToDo={this.addToDo}/>
<Filter value={this.state.filter}  onChange={this.changeFilter}></Filter>
<p>Напишіть свою задачу</p>
</Modal>}
       
      <TodoList todos={visibleTask} onDelete={this.deleteTodo}
      onToggleCompeled={this.toggleCompleted}/>
      </div>
    )}
};
