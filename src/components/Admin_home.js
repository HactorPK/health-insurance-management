import React from "react"
import "../styles/employeePanel.css"
import Home from "./Home"
import { Logo } from './Logo';

//this is the home page, decoupled it for reusability in other account type
export class AdminHome extends React.Component
{
    render()
    {
        return(
            <div className="container-employee">
                <Logo/>
                {<Home/>}
            </div>
        )
    }
}