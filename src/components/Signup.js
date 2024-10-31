import "../style/signup.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addUser, getUsers } from "../user_files/users";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userValidationErrors, setUserValidationErrors] = useState("");

  const onSubmit = (data) => {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const confPassword = data.confPassword;

    let users = getUsers();

    if (password !== confPassword) {
      setUserValidationErrors(
        "Password and Password confirmation must be the same"
      );
      return;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    const emailExists = users.some((user) => user.email === newUser.email);
    if (emailExists) {
      setUserValidationErrors("User with that email already exists");
      return;
    }
    addUser(newUser);
    console.log(`users are ${getUsers()}`);
  };

  return (
    <div className="card">
      <div className="card-title">
        <h2>Signup form</h2>
      </div>
      <div className="card-body">
        {userValidationErrors && (
          <p className="errors">{userValidationErrors}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>
            <label>Username</label>
            <div className="input-field">
              <input
                type="text"
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message:
                      "User name must not contain digit or special characters",
                  },
                  minLength: {
                    value: 3,
                    message: "Username must between 4 and 10 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Username must between 4 and 10 characters",
                  },
                })}
              />
            </div>
            {errors.username && (
              <p className="errors">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label>E mail</label>
            <div className="input-field">
              <input
                type="text"
                {...register("email", {
                  required: "E mail is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Enter the valid e mail",
                  },
                })}
              />
            </div>
            {errors.email && <p className="errors">{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <div className="input-field">
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^[A-Za-z0-9!@#$%^&*+?]+$/,
                    message:
                      "Password must not contain space,curry braces, or parantheses ",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must between 8 and 16 characters",
                  },

                  maxLength: {
                    value: 16,
                    message: "Password must between 8 and 16 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="errors">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label>Confirm password</label>
            <div className="input-field">
              <input
                type="password"
                {...register("confPassword", {
                  required: "Password confirmation  is required",
                  pattern: {
                    value: /^[A-Za-z0-9!@#$%^&*+?]+$/,
                    message:
                      "Password must not contain space,curry braces, or parantheses ",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must between 8 and 16 characters",
                  },

                  maxLength: {
                    value: 16,
                    message: "Password must between 8 and 16 characters",
                  },
                })}
              />
            </div>
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
