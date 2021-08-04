import React from "react"
import Typed from "react-typed"
import Example from "./Animation"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <Typed
                style={{color:"white"}}
                className="typed-text"
                strings={["HeLLo "," I'm Goanar Abraham","FullStack Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </div>
            <div className="buttons">
                <button className=" btn btn-success m-2 px-2 button">Protfolio</button>
                <button className="m-2 px-2 btn btn-danger" onClick={()=>alert("clicked")}>Download CV</button>
            </div>
            <Example/>
        </div>
    )
}

export default Header
