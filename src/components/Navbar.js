
import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";



const navbar = () => {
  return (
    
    <div className="header">
        <Link to="/">HOME</Link>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About Me</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/contact">Contact Me</Link>
        </li>
    </ul>
    </div>
  )
}

export default navbar