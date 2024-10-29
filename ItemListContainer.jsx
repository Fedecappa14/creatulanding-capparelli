// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ mensaje }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>{mensaje}</h1>
            {/* Aquí podrías mapear y mostrar los productos en el futuro */}
        </div>
    );
};

export default ItemListContainer;