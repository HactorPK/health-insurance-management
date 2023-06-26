import React, { useState } from "react";
import axios from "axios";
import "../styles/form.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      if(res.data === "Login Failed"){
        console.log("Error in submitting");
      }
      else if(res.data === "No record found"){
        console.log("Error")
        toast.error("User not found")
      }
      else{
        window.location.href = '/home'
      }
    } 
    )
    
    .catch(err => console.log(err))

    }

  return (
    <div>
      <ToastContainer />
      <form onSubmit={login}>
        <fieldset>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
            required
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
          />
        </fieldset>
        <button type="submit" className="bttn" onClick={login} >Log In</button>
      </form>
    </div>
  );
          };
export default Form;