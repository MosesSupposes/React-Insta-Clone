import React from 'react'
import './SearchBar.css'

export default function SearchBar(props){
    return (
        <div className="header-container">
            <div className="logo-title">
                <i className="fab fa-instagram "></i>
                <h1>Instagram</h1>
            </div>
            <input className="input" placeholder="🔍 Search" />
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}


