import './NotImplemented.css';
import { Link } from "react-router-dom";
import React from 'react';


const NotImplemented = () => {
 
  const handleClick = () => {
    localStorage.removeItem('token');
   // window.localStorage.clear();
  }

  return ( 
    
    <div className="container">
      <p>Not implemented yet!</p>
      <Link to="/login"> 
        <button onClick={handleClick} className="redirect" >Let's go home!</button>
      </Link> 
    </div>
   );
}
 
export default NotImplemented;