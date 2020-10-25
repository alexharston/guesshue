import React, { useState } from 'react'

const Controls = props => {
    const [turn, setTurn] = useState(false);
    
    return (
        <div>
           <button onClick={e => (setTurn(true))}>End Turn</button> 
        </div>
    )
}

export default Controls;