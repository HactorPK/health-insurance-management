import React from "react"
import "../styles/employeePanel.css"
import Home from "./Home"
import { Logo } from './Logo';

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