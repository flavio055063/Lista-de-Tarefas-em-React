import React from 'react';
import './Item.css';

function Item({ item, setDone, index }) {

    return (
        <div className='listaTarefas' onClick={() => setDone(index)}>
            <div>
                <span>{item.text}</span>
                <button>X</button>
            </div>
        </div>
    );
}

export default Item;