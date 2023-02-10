import React, { useState } from "react";
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"
import "../../App.css"

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    fetch("http://localhost:1337/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.jwt);
        Cookies.set('token', data.jwt);
        setIsSignedUp(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  if (isSignedUp) {
    navigate('/HomePage');
  }

  return (
          <div className="register-form">
              <div className="login-div">
              <div className="title">The Hacking Project</div>
              <div className="sub-title">Network</div>
              <div className="fields">
                  <form onSubmit={handleSubmit}>
                    <div className="username">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse e-mail "
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="password">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="username">
                      <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="Pseudo"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                      />
                    </div>                   
                      <button className="signin-button" type="submit" >S'inscrire</button>
                  </form>
                    <p className="link">Vous avez déja un compte, <Link to="/Login">Connectez vous</Link></p>
                  </div>
                </div>
          </div>

  );
};

export default Form

