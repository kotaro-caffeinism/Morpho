import React, { useState } from "react";
import { firebaseConfig, auth } from "../firebase";
import { useNavigate, Navigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div>
      <h1>ユーザ登録</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
