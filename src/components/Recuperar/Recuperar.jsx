import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User.jsx';
import './Recuperar.css';

const Login = () => {
    const navigate = useNavigate();
    const user = useUser();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if ((usuario === 'admin' && password === '123') || (usuario === 'usuario' && password === 'abc')) {
            const userData = { correo, password };
            localStorage.setItem('user', JSON.stringify(userData));
            user.setUser(userData);
            navigate('/');
        } else {
            setError('*Email incorrectos');
        }
    };

    return (
        <div className="recuperar">
            <main id="mainLogin" className="mainRecuperar">
                <h1>Ingrese su correo para enviar contraseña</h1>
                <input
                    type="text"
                    id="usuario"
                    placeholder="email"
                    value={correo}
                    onChange={(event) => setUsuario(event.target.value)}
                />
                <br />
                <span className="errorMessage">{error}</span>
                <br />
                <button onClick={handleClick}>Enviar</button>
                <div id='regresar-login'>
                { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a href="/login">Regresar al Login</a> }
                </div>
            </main>

        </div>
        
    );
};

export default Login;
