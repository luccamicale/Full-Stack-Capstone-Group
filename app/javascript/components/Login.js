import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Login() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/api/v1/users', { user: { name, age } })
      .then(response => {
        console.log(response.data);
        // Handle success
      })
      .catch(error => {
        console.log(error.response.data);
        // Handle error
      });
  }

    return (
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button type="submit">Create User</button>
    </form>
    );
  }

  export default Login;