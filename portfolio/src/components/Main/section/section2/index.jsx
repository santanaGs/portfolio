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
                    Minha carreita começou no Desenvolvimento WEB e no Front-End, mas pretendo seguir no desenvolvimento Mobile. Fazendo uso da linguem React Native, tecnologia da qual estou aprendendo.
                    </p>
                </div>
            </div>
        </div>
    )
}