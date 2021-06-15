import React, { useState } from "react";
import "./login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", { "name": name, "password": password, "email": email });
  };

  const Register = () => {
      if (!name){
          return alert("Please Enter your Fullname")
      }
      else{
          
      }
  }

  return (
    <div className="login">
      <div className="form__top">
        <h1>Linked</h1>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
      </div>

      <form className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (require if registration"
        />
        <input type="text" placeholder="Profile Pic Url(Optional)" />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />

        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="Register" onClick={Register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
