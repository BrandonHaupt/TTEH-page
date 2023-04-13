import Logo from './img/game-logo.png'
import HeaderCloud from "./img/Header-clouds.png"
import PlayStar from "./img/Play_Now_Star.svg"
import MiniStar from './img/Mini_Star.svg'

import { useState } from "react"


// const opened = document.getElementById("active");


export default function Header(){

    // const opened = useRef();

    // console.log(opened)

    const [isActive, setIsActive] = useState(false);

    
    // function activeNarBar() {
    //     console.log("start")
        
    //     // if (opened === "active") {
    //     //     opened.current.classList.remove("active");
    //     //     console.log("removed active class");
    //     // } else {
    //     //     opened.current.classList.add("active");
    //     //     console.log("added active class");
    //     // }
  
    //     console.log("end")
    // } 

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