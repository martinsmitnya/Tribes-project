import './NotImplemented.css';
import { Link } from "react-router-dom";
import React from 'react';
import robot from "../../assets/robot.png"

const NotImplemented = () => {
 
  const handleClick = () => {
    localStorage.removeItem('token');
  }

  return ( 
    <div className="background">
      <div className="notImplementedContainer">
        <p>Not implemented yet!</p>
        <img src={robot} alt="robot"></img>
        <Link to="/login"> 
          <button onClick={handleClick} className="redirect" >Let's go home!</button>
        </Link> 
      </div>
    </div>
   );
}
 
export default NotImplemented;
