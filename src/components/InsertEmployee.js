import React from "react"
import "../styles/insertinformation.css"
import AddEditEmployee from "./AddEditEmployee";
import { Logo } from './Logo';

//used when filling in or updating employee details
//using classname "information container" as a template css
export class InsertEmployee extends React.Component
{
    render()
    {
        return(
            <div className="information-container">
                <Logo className =" logoFig"/>
                <h1 className="title" > Fill in Employee Details </h1>
                <AddEditEmployee/>
            </div>
        )
    }
}