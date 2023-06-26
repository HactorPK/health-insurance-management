import React from "react"
import "../styles/employeePanel.css"
import AddEditEmployee from "./AddEditEmployee";
import { Logo } from './Logo';

export class InsertEmployee extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <Logo className =" logoFig"/>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title" > Insert New Employee </h1>
                <AddEditEmployee/>
            </div>
        )
    }
}