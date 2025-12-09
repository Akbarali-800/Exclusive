import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"; // umumiy styling fayli

export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(email, password);

    if (!res.success) {
      setError(res.msg);
    } else {
      nav("/"); // home ga qaytadi
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="auth_btn ">Kirish</button>
        </form>
        <p className="switch-auth">
          Akkauntingiz yo‘qmi?{" "}
          <span onClick={() => nav("/signup")}>Ro‘yxatdan o‘tish</span>
        </p>
      </div>
    </div>
  );
}
