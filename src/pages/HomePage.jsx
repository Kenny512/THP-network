import React from 'react'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const HomePage = () => {

        const navigate = useNavigate()

        const handleDelete = () => {
                Cookies.remove('token');
                navigate('/');
              }

  return (
    <div>
        <div className="title">The Hacking Project</div>
        <div className="sub-title">Network</div>
        <h1>Bienvenue sur ta page</h1>
        <button onClick={handleDelete}>Déconnexion</button>
    </div>
  )
}

export default HomePage