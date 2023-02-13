import React from "react";
import {NavLink} from 'react-router-dom';
import '../App.css';
function Header(){
    return(
        <>
        <h1 className="heading">Wander The Himalayas</h1>
        {/* <h2 className="heading2">Go Where You Feel The Most Alive</h2> */}
        <h2 className="heading2">Everything Himayalan</h2>
        <div className="nav">
            <NavLink to="/Home" style={{color:"white"}}>Home</NavLink>
            <NavLink to="/Places" style={{color:"white"}}>Places</NavLink>
            <NavLink to="/Food" style={{color:"white"}}>Food</NavLink>
            {/* <NavLink to="/Home/Write" style={{color:"white"}}>Write</NavLink> */}
            <NavLink to="/Contact" style={{color:"white"}}>FeedBack</NavLink>
           
        </div>
        </>
    )
    
}
export default Header;
