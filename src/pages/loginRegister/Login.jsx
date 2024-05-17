import { useState } from 'react';
import { connect } from 'react-redux';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login({ users, dispatch, lastPath }) {
  document.title = 'Login | StoreApp';
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = () => {
    // Clear error message when user starts typing
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = users.find((user) => user.email === username && user.password === password);
    if (check) {
      dispatch({
        type: 'SET_USER',
        payload: check
      });
      navigate("/profil");
    } else {
      setErrorMessage('User not found, please check again');
      // Clear password field
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <h3 style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</h3>}
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); handleChange(); }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); handleChange(); }}
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/signup"><button title="Create an account!" className="registerBtn">I don't have an account</button></Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.Users,
  lastPath: state.lastPath
});

export default connect(mapStateToProps)(Login);
