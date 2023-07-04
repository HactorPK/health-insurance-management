import React from "react"
import "../styles/insertemployee.css"
import Form from "./Form"
import { Logo } from './Logo';

export class Login extends React.Component
{
    render()
    {
        return(
    
    <div className="container-ins-employee" style={{width:"40vw"}}>
                <Logo className =" logoFig"/>
                <h2 className="title" > Employee Panel </h2>
                {<Form/>}
            </div>
        )
    }
}