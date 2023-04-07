import Logo from './img/game-logo.png'
import HeaderCloud from "./img/Header-clouds.png"
import PlayStar from "./img/Play_Now_Star.svg"
import MiniStar from './img/Mini_Star.svg'

export default function Header(){
    return(
        <header>
            <img className='site-logo' src={Logo} alt='toontowns event horizon logo'/>
            <div className='nav'>
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