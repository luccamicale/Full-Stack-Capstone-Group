import React from "react";
import { useState } from "react";

function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
      <section className="login">
        <h1>Login</h1>
        <form className="Form"
            onSubmit={handleSubmit}
        >
          
            <input 
                type='text' 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                 type='password' 
                 value={password}
                 onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
      </section>
    );
  }
  
  export default Login;