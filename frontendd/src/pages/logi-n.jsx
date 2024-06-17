import React, { useState } from 'react';

function LoginPage() {
  const [name,     setname]= useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name,username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setMessage(data.message);
        // Store token or perform any further actions
      } else {
        setMessage(data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>


      <div>
          <label>name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginPage;