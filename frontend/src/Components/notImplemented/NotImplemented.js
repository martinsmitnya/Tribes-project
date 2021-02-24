import './NotImplemented.css';
import { Link} from "react-router-dom";
import React from 'react';


const NotImplemented = () => {
 
  const handleClick = () => {
    localStorage.removeItem('token');
    //egészet clearery
   // window.localStorage.clear();
  }

  return ( 
    
    <div className="container">
      <p>Not Implemented yet.</p>
     <Link to="/login"> 
      <button onClick={handleClick} className="redirect" >Go home!</button>
      </Link> 
    </div>
   );
}
 
export default NotImplemented;