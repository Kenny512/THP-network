import React from 'react'
import { Link }from "react-router-dom"
import img1 from "../assets/image/tree-gb4f919de2_640.jpg"
import img2 from "../assets/image/road-ga9bfe973e_640.jpg"
import img3 from "../assets/image/avenue-g9c823dafe_640.jpg"


const Home = () => {
  return (
    <div className='home-container'>
        <div className="title">The Hacking Project</div>
        <div className="sub-title">Network</div>
        <div className="images-home-page">
                <img src= { img1 } alt="tree" className='images-home' />
                <img src= { img2 } alt="forest" className='images-home' />
                <img src= { img3 } alt="road" className='images-home' />
        </div>
        <div className="text-home">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae, vitae architecto quos nostrum iusto aspernatur sint tempora, corporis dignissimos deserunt aliquam ad aut repellat ea possimus vero dolore aliquid?</p>
        </div>
        <div className="container-button">
                < Link to="/Register" ><button className="connect-button-home">Créer un compte</button></Link>
        </div>
        <div className="container-button">
                < Link to="/Login" ><button className="connect-button-home">Connexion</button></Link>
        </div>
    </div>
  )
}

export default Home