import React from "react"
import "../styles/insertinformation.css"
import Form from "./Form"
import { Logo } from './Logo';

//login page with logo and form
export class Login extends React.Component
{
    render()
    {
        return(
    
    <div className="information-container" style={{width:"40vw"}}>
                <Logo className =" logoFig"/>
                <h2 className="title" > Employee Panel </h2>
                {<Form/>}
            </div>
        )
    }
}