import {Component} from 'react'


export class TodoEditor extends Component{
state={
 
    goal:''
}

onFormSubmit=(event)=>{
    event.preventDefault()
    this.props.adToDo(event.currentTarget.elements.goal.value)
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
            <button type="submit"></button>
        </form>
    )}
}