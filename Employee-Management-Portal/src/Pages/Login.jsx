import '../Styles/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
          <input type="email" id="email" placeholder="Enter email..."  value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <p className='create-acc'>Don't have an account? <span>Contact admin</span></p>
      </form>
    </div>
    </>
  );
}

export default Login;