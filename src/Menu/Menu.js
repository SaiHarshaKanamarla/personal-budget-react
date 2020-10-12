import React from 'react';

import {    
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav>
        <ul>            
            <li><Link to="./index" title="Visit our HomePage">HomePage</Link></li>           
            <li><Link to="./about"  title="Visit the About Page">About</Link></li>
            <li><Link to="./login" title="Login to Your Account">Login</Link></li>            
        </ul>
    </nav>
    </div>
  );
}

export default Menu;
