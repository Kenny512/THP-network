import React from 'react'
import Cookies from "js-cookie"

const Login = () => {



  fetch('http://localhost:1337/auth/local', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const handleLogin = () => {
  
    const token = Cookies.get('token');
  
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
    })
    .then (response => response.json())
    .then (result => {  console.log(result) })
    };
  
    const handleDelete = () => {
        Cookies.remove('token');
    }

  return (
    <>
     <form>
                <div>
                  <label htmlFor="identifier">Adresse e-mail :</label>
                  <input
                    type="email"
                    id="email"
                    name="identifier"
                  />
                </div>
                <div>
                  <label htmlFor="password">Mot de passe :</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
    </form>
    <button onClick={handleLogin}>Connexion</button>
    <button onClick={handleDelete}>Déconnexion</button>
    </>
  )
}

export default Login