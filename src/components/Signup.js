import { useState } from "react";
import "../style/signup.scss";
import { useForm } from "react-hook-form";
import { Value } from "sass";

function Signup() {
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    alert("bonjpour");
    console.log("ca marche");
  }

  return (
    <div className="card">
      <div className="card-title">
        <h2>Signup form</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username</label>

            <input
              type="text"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="errors">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label>E mail</label>
            <input
              type="email"
              {...register("email", {
                required: "E mail is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Put valid e mail",
                },
              })}
            />
            {errors.email && <p className="errors">{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="errors">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label>Confirm password</label>
            <input
              type="password"
              {...register("confPassword", {
                required: "Password confirmation  is required",
              })}
            />
            {errors.confPassword && (
              <p className="errors">{errors.confPassword.message}</p>
            )}
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
