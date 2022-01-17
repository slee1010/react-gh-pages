import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="login_box">
        <h2>LOGIN</h2>
        <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-controls">
            <label>Email: </label>
            <input {...register('email', { maxLength: { value: 2, message: "error message" } })} />
            </div>
            <div className="form-controls">
            <label>Password: </label>
            <input {...register('password', { required: true })} />
            </div>
            <div className="form-controls">
            <label></label>
            <NavLink className="nav-link" to="/home">
                <button type="submit">Login</button>
            </NavLink>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

