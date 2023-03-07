import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/Greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  console.log(greeting)

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {greeting.map((greeting) => 
      <div>
        <h2>{greeting.name}</h2>
        <h3>{greeting.id}</h3>
        <h3>{greeting.description}</h3>
        <h4>{greeting.price}</h4>
        <img>{greeting.image}</img>
        
      </div>
      
      )}
    </div>
  );
};

export default Greeting;