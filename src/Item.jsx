import React from 'react';
import './Item.css';

function Item({ item }) {
    
    return (
        <div className='listaTarefas'>
            <div>
                <span>{item.text}</span>
                <button>X</button>
            </div>
        </div>
    );
}

export default Item;