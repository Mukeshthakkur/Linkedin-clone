import React from 'react'
import "./inputOption.css"; 

function inputOption({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }} /> 
            <h2 className='title'>{title}</h2>
        </div>
    )
}

export default inputOption; 