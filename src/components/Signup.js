import "../style/signup.scss";
import { useForm } from "react-hook-form";

function Signup() {
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
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message:
                    "User name must not contain digit or special characters",
                },
              })}
            />
            {errors.username && (
              <p className="errors">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label>E mail</label>
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
            {errors.email && <p className="errors">{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
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
