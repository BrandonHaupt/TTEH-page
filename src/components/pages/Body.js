import Clouds2 from "./img/body-image/Clouds-2.png"
import ToonFight1 from "./img/body-image/ToonFight1.png"

export default function Body(){
    return(
        <main>
            <section className='CloudContainer'>
                <section className='container'>
                    <section className='WordContainer'>
                        <h1>What's The Big Idea Behind Event Horizon?</h1>
                        <p>Toontown: Event Horizon is a Massively Multiplayer Online fan game that seeks to explore the un-ventured vision of Disneys Toontown Online. As a non-profit project, we will NEVER ask you to spend a DIME!</p>

                        <p>With heavy space themes, shoot for the stars as you create your Toon and fight against the evil robot “Cogs” threatening to take over the galaxy!</p>

                        <p>Are YOU Toon Enough!?</p>
                    </section>
                    
                    <img className='ToonFight1' src={ToonFight1} alt="Toon fighting a cog"/>

                </section>

                <img className='clouds2' src={Clouds2} alt="Clouds"/>
            </section>
        </main>
    )
}