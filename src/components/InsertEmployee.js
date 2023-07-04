import React from "react"
import "../styles/insertemployee.css"
import AddEditEmployee from "./AddEditEmployee";
import { Logo } from './Logo';

export class InsertEmployee extends React.Component
{
    render()
    {
        return(
            <div className="container-ins-employee">
                <Logo className =" logoFig"/>
                <h1 className="title" > Insert New Employee </h1>
                <AddEditEmployee/>
            </div>
        )
    }
}