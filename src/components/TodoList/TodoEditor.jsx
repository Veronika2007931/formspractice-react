import { Btn } from 'components/Button/Button'
import {Component} from 'react'
import { CgPlayListAdd } from "react-icons/cg";



export class TodoEditor extends Component{
state={
 
    goal:''
}

onFormSubmit=(event)=>{
    event.preventDefault()
    this.props.addToDo(event.currentTarget.elements.goal.value)
    this.setState({goal: ''})
}

onTextareaClick=(event)=>{
    this.setState({
        goal:event.currentTarget.value
    })
}
   render(){ 
    return(
        <form onSubmit={this.onFormSubmit} >
            <textarea name="goal" value={this.state.goal} onChange={this.onTextareaClick}></textarea>
            <Btn type="submit"><CgPlayListAdd /></Btn>
        </form>
    )}
}