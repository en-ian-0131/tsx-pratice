import { FormEvent, useCallback, useState } from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";

function Login_test() {
  const [myAccount, setMyAccount] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = {
      account: myAccount,
      password: myPassword,
    };

    const jsonBody = JSON.stringify(body);

    const res = await fetch("http://localhost:3002/login", {
      method: "POST",
      body: jsonBody,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const r = await res.json();
    console.log("r:", r);
    if (r.success) {
      alert("登入成功~");
      navigate("/");
    } else {
      alert(r.message)
    }
  };

  return (
    <div className="container login">
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">account</label>
          <input
            type="text"
            value={myAccount}
            onChange={(e) => {
              setMyAccount(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={myPassword}
            onChange={(e) => {
              setMyPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login_test;
