import React, { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading

  function handleLogin(event) {
    event.preventDefault();
    setLoading(true); // Set loading to true when the login button is pressed

    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating login process)
      alert(`You are Logged in: ${email}`); // Show an alert with the entered email
    }, 2000);
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Wait...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
