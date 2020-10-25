import React, { useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import Logo from './Logo';

const Nav = props => {
    const { loading } = props;
    
    if (loading) {
     return (
         <nav>
             <Logo />
         </nav>
     )   
    }
    return (
        <nav>
            <Logo />
        </nav>
    );
};

Nav.propTypes = {
    loading: PropTypes.bool
};

export default Nav;