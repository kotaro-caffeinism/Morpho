import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const { email, password } = event.target.elements;
    // await auth.signInWithEmailAndPassword(email.value, password.value);
    // navigate("/");
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
