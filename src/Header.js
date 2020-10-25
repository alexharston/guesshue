import React, { useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import Logo from './Logo';
import Nav from './Nav';


const Header = (props) => {
    const [name, setName] = useState("");
    
    return (
        <div>
            <Nav/>
            <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default Header;
