import { useState } from 'react';
import './LoginForm.css'

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const [formInput, setFormInput] = useState({
    user: 'yash',
    password: '007'
  });

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (formInput.user === 'yash' && formInput.password === '007') {
      setIsLoggedIn(true);
      setUsername(formInput.user);
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormInput({ user: '', password: '' });
  };

  return (
    <div className='container'>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login Form</h2>
          <input
            type="text"
            name="user"
            placeholder="Username"
            value={formInput.user}
            onChange={handleInputChange}
            required
          /><br /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formInput.password}
            onChange={handleInputChange}
            required
          /><br /><br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
