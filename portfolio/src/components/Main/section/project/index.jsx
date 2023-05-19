import './project.css'

import icon_alfa from '../../../../assets/alfa_icon.png'
import icon_viagem from '../../../../assets/viagem_icon.png'

export const Project = () => {
    return (
        <div id='project' className='max-container2 project'>
            <h1>Projetos</h1>
            <div className="cardSection">
                <Card name="AlfaTech" description="Projeto feito utilizando HTML e CSS" link="https://alfa-tech.vercel.app" img={icon_alfa}/>
                <Card name="Viagens" description="Projeto feito utilizando HTML e CSS" link="https://projeto-one-pi.vercel.app" img={icon_viagem} />
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="container-card">
            <div className="cardTop">
            </div>
            <div className="cardBottom">
                <div className="cardInfo">
                    <img src={props.img} alt="" />
                    <div className="text">
                        <h4>{props.name}</h4>
                        <p>{props.description}</p>
                        <a href={props.link} target='blank'>VER</a>
                    </div>
                </div>
            </div>
        </div>
    )
}