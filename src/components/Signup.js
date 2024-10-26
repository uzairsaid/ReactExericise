import { useState } from "react";
import "../style/signup.scss";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("bonjpour");
    console.log("ca marche");
    console.log(userName);
  }

  return (
    <div className="card">
      <div className="card-title">
        <h2>Signup form</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>

            <input
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>E mail</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="false"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm password</label>
            <input
              type="password"
              name="confpassword"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
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
