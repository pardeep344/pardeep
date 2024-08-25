import { Component } from "react";
import{Menuitems} from "./Menuitems"
import"./Navbar.css";
import { Link } from "react-router-dom";
 
import React, { useState } from 'react';
 
class Navbar extends Component{
    state={clicked:false}
    handleclick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
             <>
                <nav className="navbaritems">
                <h1 className="navbar-logo">Trip</h1>
                <div className="menu-icons" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                     
                     
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {
                    Menuitems.map((item,index)=>{
                        return(
                            <li key={index}><Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link></li>
                        )
                    })
                }
                <button><Link className=".nav-links-mobile btn" to="/signup">
                Sign up
              </Link></button>
              
                    
                    
                </ul>
                </nav>
             </>
        )
    }
}

export default Navbar;