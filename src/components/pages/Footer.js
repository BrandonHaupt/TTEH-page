import MiniStar from './img/Mini_Star.svg'

//* Social media icons
import DiscordSocial from './img/social-images/Discord.png'
import FacebookSocial from './img/social-images/Facebook.png'
import InstagramSocial from './img/social-images/Instagram.png'
import TwitterSocial from './img/social-images/Twitter.png'
import YoutubeSocial from './img/social-images/Youtube.png'

import DustNClouds from './img/Dust-n-Clouds.png'


export default function Footer(){
    return(
        <footer>
            <div className="starhopping">
                <h3>Wanna Do Some Star Hopping</h3>
                <img src={DustNClouds} alt="space dust" />
            </div>

            <div className="container">

                <div className="socials">
                    <img src={DiscordSocial} alt="Discord" />
                    <img src={FacebookSocial} alt="Facebook" />
                    <img src={InstagramSocial} alt="Instrgram" />
                    <img src={TwitterSocial} alt="Twitter" />
                    <img src={YoutubeSocial} alt="Youtube" />
                </div>

                <div className="footerNav">
                    <a className='miniStar' href="#">
                        <img src={MiniStar} />
                        Join The Team
                    </a>
                        
                    <a className='miniStar' href="#">
                        <img src={MiniStar} />
                        Mission Control
                    </a>

                    <a className='miniStar' href="#">
                        <img src={MiniStar} />
                        Dreamscape
                    </a>
                    
                    <a className='miniStar' href="#">
                        <img src={MiniStar} alt='a mini star'/>
                        Terms of Service
                    </a>

                    <a className='miniStar' href="#">
                        <img src={MiniStar} alt='a mini star'/>
                        Privacy Policy
                    </a>

                    <a className='miniStar' href="#">
                        <img src={MiniStar} alt='a mini star'/>
                        Server Status
                    </a>
                </div>

            </div>

            <p>Toontown: Event Horizon is not affiliated with The Walt Disney Company and/or any subsidiaries of The Walt Disney Company. Toontoon: Event Horizon is an exntirely free-to-play game and independent project, fully funded out of pocket by the team. This game contains no subscriptions, advertisements, donations, or any other forms of revenue.</p>
        </footer>
    )
}