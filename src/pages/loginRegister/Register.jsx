import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
function Register() {
  document.title = 'Login | StoreApp'

  const [data, setData] = useState({
    full_name: "",
    email: '',
    password: '',
    adress: '',
    rpassword: '',
    number: 0

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)


  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className='grid'>


          <div className="form-group">
            <label htmlFor="text">Full Name:</label>
            <input
              name='full_name'
              type="text"
              value={data.full_name}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              name='email'
              type="email"
              value={data.email}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input
              name='number'
              type="number"
              value={data.number}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Adress:</label>
            <input
              name='adress'
              type="email"
              value={data.adress}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name='password'
              type="password"
              value={data.password}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Repet Password:</label>
            <input
              name='rpassword'
              type="password"
              value={data.rpassword}
              onChange={handleData}
            />
          </div>
        </div>
        <button type="submit">Save User</button>
      </form>
    </div>
  );
}

export default Register