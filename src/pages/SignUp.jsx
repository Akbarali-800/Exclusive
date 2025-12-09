import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import sing_up from "../assets/images/singup.png";
import google_img from "../assets/images/icon_google.png";

export default function SignUp() {
  const { signup } = useContext(AuthContext);
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = signup(name, email, password);

    if (!res.success) {
      setError(res.msg);
    } else {
      nav("/"); // ro'yxatdan o'tgach home ga
    }
  };

  

  return (
    <div className="auth-container">
      <div className="main_supdiv">

        <div>
          <img src={sing_up} alt="" />
        </div>
        <div className="auth-card">
          <h2>Ro‘yxatdan o‘tish</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ism"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="auth_btn">Ro‘yxatdan o‘tish</button>

            <div className="google_div">
              <img src={google_img} alt="" />
              <button type="submit" className="google_btn">Sign up with Google</button>
            </div>

          </form>
          <p className="switch-auth">
            Akkauntingiz bormi?{" "}
            <span onClick={() => nav("/login")}>Kirish</span>
          </p>
        </div>
      </div>

    </div>
  );
}
