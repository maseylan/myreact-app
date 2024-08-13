import React, { useState } from "react";
import { Routes,Route } from 'react-router-dom';
import '../App.css';
import Homepage from './Homepage' ;
import Aboutme from './Aboutme' ;

function Navbar1 () {
    return ( 
        <div>
            <nav className="nav">
            <a href="#" className="nav-item">Homepage</a>
            <Homepage />
            <a href="#" className="nav-item">About Me</a>
            <Aboutme />
            </nav>
            

        </div>
    ) ;
} 

export default {fetch,Navbar1} ;