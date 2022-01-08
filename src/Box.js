import { useState } from "react";

//creates a box that accepts props width, height, backgroundColor

const Box = ({id, width, height, backgroundColor, handleRemove}) => { 
    const remove = () => handleRemove(id);
    
    return (
        <div className="Box" 
            style={{width, height, backgroundColor}}  
        >
            <button onClick={remove}>Remove The Box!</button>
        </div>
    )
}

export default Box;