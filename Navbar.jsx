// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <div>
                <img src="logo.png" alt="Logo" style={{ height: '50px' }} />
            </div>
            <ul style={{ display: 'flex', listStyleType: 'none' }}>
                <li style={{ margin: '0 15px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
                <li style={{ margin: '0 15px' }}><a href="/productos" style={{ color: '#fff', textDecoration: 'none' }}>Productos</a></li>
                <li style={{ margin: '0 15px' }}><a href="/contacto" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;