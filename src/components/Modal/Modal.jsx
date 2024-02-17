import React, { Component } from 'react';
import { Backdrop, ModalContent } from "./Modal.styled";

export  class Modal extends Component {
componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown)
}

componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeyDown)
}

handleKeyDown =  (e)=>{
    if(e.code === 'Escape'){
   console.log(e.code)
   this.props.onClose()
 }
}

handleBackdropClick=(e)=>{
    if(e.target === e.currentTarget){
        this.props.onClose()
    }
}

render() {
return (
<Backdrop onClick={this.handleBackdropClick}>
<ModalContent>{this.props.children}</ModalContent>
</Backdrop>
);
}
}