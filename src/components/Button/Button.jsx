import {Button} from "./button.styled"


export const Btn =({children=null, onClick})=>{
    return <Button onClick={onClick}>{children}</Button>
}