import Logo from './img/game-logo.png'
import HeaderCloud from "./img/Header-clouds.png"
import PlayStar from "./img/Play_Now_Star.svg"
import MiniStar from './img/Mini_Star.svg'

import CaneImage from "./img/header-images/Cane-image.png"
import DropButton from "./img/header-images/Drop-button-image.png"
import PieImage from "./img/header-images/Pie-Image.png"
import PlantDrop from "./img/header-images/Plant-drop-image.png"
import SheepPerson from "./img/header-images/Sheep-person-image.png"

import { useState } from "react"


// const opened = document.getElementById("active");


export default function Header(){

    const [isActive, setIsActive] = useState(false);


    return(
        <header>
            <img className='site-logo' src={Logo} alt='toontowns event horizon logo'/>
            <div className='nav'  id={isActive ? 'active' : ''} onClick={() => setIsActive(!isActive)}>
                <span className="hamburger-lines">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>

                <img className='header-clouds' src={HeaderCloud} alt='space clouds'/>

                <div className="animatedImages">
                    <img src={PieImage} alt="" />
                    <img src={CaneImage} alt="" />
                    <img src={SheepPerson} alt="" />
                    <img src={DropButton} alt="" />
                    <img src={PlantDrop} alt="" />
                </div>

                <nav>
                    <a className='miniStar' href="#">
                        <img src={MiniStar} />
                        History
                    </a>
                    
                    <a className='miniStar' href="#">
                        <img src={MiniStar} />
                        Comics
                    </a>

                    <a className='miniStar' href="#">
                        <img src={MiniStar} />
                        Artwork
                    </a>
                    
                    <div className='playnow'>
                        <a href="#">Play Now!</a>
                        <img className='playStar' src={PlayStar} alt='a star'/>
                    </div>
                    
                    <a className='miniStar' href="#">
                        <img src={MiniStar} alt='a mini star'/>
                        Login/Sign up
                    </a>
                    <a className='miniStar' href="#">
                        <img src={MiniStar} alt='a mini star'/>
                        Help
                    </a>


                    

                </nav>
            </div>
            

           
        </header>
    )
}