import './styleSection.css'

import instagram from '../../../assets/instagram.svg'
import github from '../../../assets/github.svg'
import linkedin from '../../../assets/linkedin.svg'
import whatsapp from '../../../assets/whatsapp.svg'
import me from '../../../assets/me.png'

export const Section1 = () => {
    return (
        <div className='max-container2'>
            <div className="left-area">
                <h1>Gabriel Santana</h1>
                <p>I am front-end developer</p>
                <ul>
                    <a href="https://github.com/santanaGs" target='blank'><img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/gabriel-santos-santana-4422a524a" target='blank'><img src={linkedin} alt="" /></a>
                    <a href="https://instagram.com/_gs.santana/" target='blank'><img src={instagram} alt="" /></a>
                    <a href="https://api.whatsapp.com/send?phone=11991715657&text=Olá,%20vim%20através%20do%20seu%20portifólio!" target='blank'><img src={whatsapp} alt="" /></a>
                </ul>
                <p>I like to craft solid and scalable frontend products <br /> with great user experiences.</p>
            </div>
            <div className='right-area'>
                <img src={me} alt="" />
            </div>
        </div>
    )
}