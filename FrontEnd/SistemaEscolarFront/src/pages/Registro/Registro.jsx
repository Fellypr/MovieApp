import './Registro.css'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Registro() {
    const [RegistrarEmail, setRegistrarEmail] = useState("");
    const [RegistrarSenha, setRegistrarSenha] = useState("");
    const [RegistrarConfirmarSenha, setRegistrarConfirmarSenha] = useState("");
    const navigate = useNavigate();


    async function handleRegistrarEmail(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5049/api/RegistroDeUsuario/cadastro", {
                Email: RegistrarEmail,
                Senha: RegistrarSenha
            });

            if (RegistrarConfirmarSenha === ""){
                alert("Por favor, insira uma confirmação de senha.");
                return;
            }


            console.log(response.data);
            navigate("/");

            alert("Usuário registrado com sucesso");
        } catch (error) {
            console.log("Erro ao registrar o usuário:");
            alert("Erro ao registrar o usuário.");
        }
    }
    return (
        <div className="mainRegistro">

            <div className="LoginERegistro">
                <button className='Loginbutton'><Link to={"/"}>Login</Link></button>
                <button className='Registrabutton'><Link to={"/Registro"}>Registra</Link></button>
            </div>
            <form onSubmit={handleRegistrarEmail}>
                <input type="text" placeholder="Usuário" className="RegistraEmail" onChange={(e) => setRegistrarEmail(e.target.value)} /><br />
                <input type="password" placeholder="Senha" onChange={(e) => setRegistrarSenha(e.target.value)} className="RegistraSenha" value={RegistrarSenha} />
                <input type="password" placeholder='Confirmar Senha' onChange={(e) => setRegistrarConfirmarSenha(e.target.value)} className="RegistraConfirmarSenha" value={RegistrarConfirmarSenha} required pattern={RegistrarSenha} title='As senhas não são iguais' />
                <button className="entrar" type='submit'>Registrar</button>
            </form>






        </div>
    )
}

export default Registro;