import React from "react"
import headImg from "./troll.png"


export default function Header() {
    return (
        <header className="header">
            <img 
                style={{width:"60px",height:"60px"}}
                src={headImg} 
                className="header--image"
            />
            <h2 style={{fontWeight:"bold"}} className="header--title">Meme Generator</h2>
            <h4 style={{fontWeight:"bold"}} className="header--project">React Course - ST4</h4>
        </header>
    )
}