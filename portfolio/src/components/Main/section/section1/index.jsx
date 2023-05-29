import './styleSection.css'
import { motion } from "framer-motion";

import instagram from '../../../../assets/instagram.svg'
import github from '../../../../assets/github.svg'
import linkedin from '../../../../assets/linkedin.svg'
import whatsapp from '../../../../assets/whatsapp.svg'
import me from '../../../../assets/me.png'

export const Section1 = () => {
    return (
        <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
        <div className='max-container2'>
                <div className="left-area">
                    <h1 className='typing'>Gabriel Santana</h1>
                    <p>I am front-end developer</p>
                    <ul>
                        <a href="https://github.com/santanaGs" target='blank' ><img src={github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/gabriel-santos-santana-4422a524a" target='blank'><img src={linkedin} alt="" /></a>
                        <a href="https://instagram.com/_gs.santana/" target='blank'><img src={instagram} alt="" /></a>
                        <a href="https://api.whatsapp.com/send?phone=11991715657&text=Olá,%20vim%20através%20do%20seu%20portifólio!" target='blank'><img src={whatsapp} alt="" /></a>
                    </ul>
                    <p>Eu gosto de criar projetos front-end sólidos <br /> e escaláveis com ótimas experiências ao usuário.</p>
                </div>
                <div className='right-area'>
                    <img src={me} alt="" />
                </div>
        </div>
            </motion.div>

    )
}