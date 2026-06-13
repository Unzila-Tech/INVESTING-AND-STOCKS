import React from 'react';
import { Link } from 'react-router';
function Navbar() {
    return ( 
    
<nav class="navbar navbar-expand-lg ">
  <div class="container p-2">
    <Link class="navbar-brand" to="/">
        <img src="media/images/logo.svg" alt="logo" style={{width:"20%"}}></img>
    </Link>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/product">Product</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
     );
}

export default Navbar;