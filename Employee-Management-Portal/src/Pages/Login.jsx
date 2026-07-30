import '../Styles/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import Input from '../Component/Input';
import logo from '../assets/images/logoImg.png';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState("");

  const navigate = useNavigate();

  const admin = {
    email: "emily123@gmail.com",
    password: "emilyspass",
  };

const login = (e) => {
  e.preventDefault();

  if (email !== admin.email || password !== admin.password) {
    setError("Wrong login credentials. Try again!");
    setEmail("");
    setPassword("");
    return;
  }
  
  setError("");
  localStorage.setItem("authToken", "logged-in");

  navigate("/dashboard");
  
};

  return (
    <main className='login-page'>
      <div className="brand-content">
        <img className="login-logo" src={logo} alt="Employee Management Portal logo" />
        <h1>Employee Management Portal</h1>
        <div className="brand-line"></div>
        <p>
          One workspace for employees, attendance,
          leave and timesheets — designed for growing
          teams.
        </p>
      </div>
      <div className="login">
      <div>
        <h1>Welcome to EMP</h1>
        <p>Sign in with your work email to open your dashboard.</p>
      </div>
      <form onSubmit={login}>
        {error && <p className="error-validation">{error}</p>}
        <div className="input">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" name="email" placeholder="Enter email..." value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" name="password" placeholder="Enter password..." value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <Button text="Login" type="submit" className="login-btn"/>
        <p className='create-acc'>Don't have an account? <span>Contact admin</span></p>
      </form>
    </div>
    </main>
  );
}

export default Login;