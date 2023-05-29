import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './forms.css'

export const Forms = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) =>{
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send("service_7khjwuv","template_nyzqy06", templateParams, "gJe1NkATYlVBAHWnS")
        .then((res) => {
            console.log("Email enviado", res.status, res.text)
            alert("Em breve retornaremos o contato!!! Obrigado :)")
            setEmail("")
            setMessage("")
            setName("")
        }, (err) => {
            console.log("Erro:", err)
        })

        

    }

    return(
        <div className="max-container2 forms" id='contact'>
            <h1>Contato</h1>
            <form className='form' onSubmit={(sendEmail)}>
                <input 
                    type="text"
                    placeholder='Digite seu nome ...'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='input'
                />

                <input 
                    type="text"
                    placeholder='Digite seu email ...'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='input'
                />
                
                <textarea
                    placeholder='Digite sua mensagem ...'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows="5" cols="33"
                    className='textArea'
                />

                <input type="submit" className='button' value="Enviar" />
            </form>
        </div>
    )
}