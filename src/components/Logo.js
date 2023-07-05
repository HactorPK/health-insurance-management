import React from "react"
import "../styles/logo.css"

//logo creation with 3 rings
//most detailing done in logo.css file
export class Logo extends React.Component
{
    render()
    {
        return(
            <div className ="logo">
                <div className = "ring"></div>
                <div className = "ring"></div>
                <div className = "ring"></div>
                <h1 className ="logoName">EmpHealth</h1>
            </div>
        )

    }
    
}

export default Logo;