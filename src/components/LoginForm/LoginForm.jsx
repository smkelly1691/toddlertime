// LoginForm.jsx
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <ul className="noBullet">
            <li>
              <label>Email</label>
              <input className="inputFields" type="text" name="email" value={credentials.email} onChange={handleChange} required />
            </li>
            <li>
              <label>Password</label>
              <input className="inputFields" type="password" name="password" value={credentials.password} onChange={handleChange} required />
            </li>
          <li>
            <button type="submit">LOG IN</button>
            </li>
          </ul>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
