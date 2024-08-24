import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate importu
import "../css/auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3200/users?email=${email}&password=${password}`
      );
      if (response.data.length > 0) {
        alert("Giriş başarılı!");
        navigate("/anasayfa");
      } else {
        setErrorMessage("Geçersiz email veya şifre");
      }
    } catch (error) {
      setErrorMessage("Bir hata oluştu. Tekrar deneyin.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const existingUser = await axios.get(
        `http://localhost:3200/users?email=${email}`
      );
      if (existingUser.data.length > 0) {
        alert("Bu email adresi ile kayıtlı bir kullanıcı zaten var.");
        return;
      }

      const response = await axios.post("http://localhost:3200/users", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
        navigate("/anasayfa");
      }
    } catch (error) {
      setErrorMessage("Kayıt başarısız oldu. Tekrar deneyin.");
    }
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <>
          <h2>Giriş Yap</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email adresinizi girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Şifre:</label>
              <input
                type="password"
                id="password"
                placeholder="Şifrenizi girin"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit" className="auth-button">
              Giriş Yap
            </button>
          </form>
          <p className="toggle-form">
            Henüz üye değil misiniz?
            <button onClick={toggleForm} className="toggle-button">
              Kayıt Ol
            </button>
          </p>
        </>
      ) : (
        <>
          <h2>Kayıt Ol</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınızı ve soyadınızı girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email adresinizi girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Şifre:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi girin"
                required
              />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit" className="auth-button">
              Kayıt Ol
            </button>
          </form>
          <p className="toggle-form">
            Zaten üye misiniz?
            <button onClick={toggleForm} className="toggle-button">
              Giriş Yap
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;
