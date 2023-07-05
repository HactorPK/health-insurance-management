import React from "react"
import "../styles/insertinformation.css"
import AddInsurance from "./Add_Insurance";
import { Logo } from './Logo';

//used when filling in or updating policy details
//using classname "information-container" as a template css
export class InsertInsurance extends React.Component
{
    render()
    {
        return(
            <div className="information-container">
                <Logo className =" logoFig"/>
                <h1 className="title" > Fill In Insurance Details</h1>
                <AddInsurance/>
            </div>
        )
    }
}