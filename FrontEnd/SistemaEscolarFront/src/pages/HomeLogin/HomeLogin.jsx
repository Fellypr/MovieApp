



import './HomeLogin.css'

import { Link, useNavigate } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../components/context';
function HomeLogin() {
    const [Password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [ShowPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();
    function handleShowPassword() {
        setShowPassword(!ShowPassword);
    }
    async function handleLogin(e) {
        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:5049/api/RegistroDeUsuario/login", {
                Email: email,
                Senha: Password

            });
            login(email); // o email do usuario vai ser armazenado no contexto
            console.log(response.data);
            navigate("/container");
        }catch(error) {
            console.log("Erro ao fazer login");
            alert("Erro ao fazer login");
        }

    }
    return (
        <div>
            <div className="main">

                <div className="LoginERegistro">
                    <button className='Loginbutton'><Link to={"/"}>Login</Link></button>
                    <button className='Registrabutton'><Link to={"/Registro"}>Registra</Link></button>
                </div>

                <form onSubmit={handleLogin}>
                    <input type="Email" placeholder="Usuário" onChange={(e) => setEmail(e.target.value)} className='email' /><br />
                    <input type={ShowPassword ? "text" : "password"} value={Password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} className='senha' />
                    <button className='entrarLogin'>Entrar</button>
                </form>
                <button onClick={handleShowPassword} className='showPassword'><IoEyeSharp size={22} /></button>


            </div>
        </div>
    )
}

export default HomeLogin;