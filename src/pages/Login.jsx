import { React, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  fetch("http://localhost:1337/auth/local", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    const token = Cookies.get("token");

    fetch("http://localhost:1337/users/me", {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
    setIsSignedUp(true);
  };

  if (isSignedUp) {
    navigate("/HomePage");
  }

  return (
    <div className="login-container">
        <div className="log-div">
          <div className="title">The Hacking Project</div>
          <div className="sub-title">Network</div>
          <h3 className="mide-text">Connectez vous</h3>
          <div className="fields">
          <form>
            <div className="username">
              <label htmlFor="identifier">Adresse e-mail :</label>
              <input type="email" id="email" name="identifier" />
            </div>
            <div className="password">
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" name="password" />
            </div>
          </form>
          <button className="signin-button" onClick={handleLogin}>
            Connexion
          </button>
          <p className="link">
            Vous n'avez pas de compte, <Link to="/Register">Créer un compte</Link>
          </p>
        </div>
      </div>
      </div>
  );
};

export default Login;
