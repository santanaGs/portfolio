import './style.css'
import { motion } from "framer-motion";
import img1 from '../../assets/mail.png'

export const Nav = () => {
    return (
        <div className='navBar max-container'>
            <p>gabriel santana</p>
            <nav>
                <ul>
                    <a href='#'>Home</a>
                    <a href='#about-us'>Sobre</a>
                    <a href='#project'>Projetos</a>
                    <a href='#contact'>Contato</a>
                </ul>
                {/* <div className="buttonContainer">
                    <img src={img1} alt=""/>
                    <a href='mailto:gabrielsantana2267@gmail.com' className='buttonMail'>Mail</a>
                </div> */}
            </nav>
        </div>
    )
}