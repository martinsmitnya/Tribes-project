import React, { useEffect, useState } from 'react';

function Resources() {
  const [food, setFood] = useState(null);
  const [gold, setGold] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(0);

  const fetchResources = async () => {
    const call = await fetch('http://localhost:3000/kingdom/resource');
    const result = await call.json();
    setFood(result[0]);
    setGold(result[1]);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchResources();
  }, [user]);

  if (error) {
    return <div> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div>
        <ul>
          <li>Food</li>
          <li>{food.amount}</li>
        </ul>
        <ul>
          <li>Gold</li>
          <li>{gold.amount}</li>
        </ul>
      </div>
    );
  }
}

export default Resources;
