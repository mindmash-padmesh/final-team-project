import '../Styles/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import Input from '../Component/Input';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const admin = {
    email: "emily123@gmail.com",
    password: "emilyspass",
  };

const login = (e) => {
  e.preventDefault();

  if (email !== admin.email || password !== admin.password) {
    alert("Wrong login credentials. Try again!");
    setEmail("");
    setPassword("");
    return;
  }

  localStorage.setItem("authToken", "logged-in");

  navigate("/dashboard");
};

  return (
    <>
    <div className="login">
      <h1>Welcome to EMP</h1>
      <p>Sign in with your work email to open your dashboard.</p>
      <form onSubmit={login}>
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
    </>
  );
}

export default Login;