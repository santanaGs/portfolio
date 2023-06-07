import './styleAbout.css'

import gif from '../../../../assets/vector.gif'

export const About = () => {
    return (
        <div id="about-us" className="max-container2 about">
            <h1>Sobre</h1>

            <div className="about-container">
                <img src={gif} alt="" />
                <div className="right-area">
                    <p>
                        Desenvolvedor front-end iniciante no mercado de trabalho!  Sempre procurando aprender e desenvolver meus conhecimentos de programação.
                    </p>
                    <p>
                        Minha carreira começou no desenvolvimento Web e no Front-end.<br /><br />
                        Pretendo seguir no desenvolvimento Mobile utilizando a linguagem React Native, a qual estou me aprimorando.
                    </p>
                </div>
            </div>
        </div>
    )
}