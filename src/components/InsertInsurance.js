import React from "react"
import "../styles/insertinformation.css"
import AddInsurance from "./Add_Insurance";
import { Logo } from './Logo';

export class InsertInsurance extends React.Component
{
    render()
    {
        return(
            <div className="information-container">
                <Logo className =" logoFig"/>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title" > Fill In Insurance Details</h1>
                <AddInsurance/>
            </div>
        )
    }
}