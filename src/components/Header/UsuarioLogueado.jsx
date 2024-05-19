import React from 'react';
import { Link } from 'react-router-dom';

export const UsuarioLogueado = ({ username, onClick }) => {
    return (
        <>
            <h3>{`Hola, ${username}.`}</h3> |{' '}
            <button onClick={onClick}>Cerrar Sesión</button>
            <Link to={`/dashboard-${username === 'admin' ? 'admin' : 'usuario'}`}>Dashboard</Link>
        </>
    );
};
