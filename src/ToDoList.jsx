import React, { useState } from 'react';
import './ToDoList.css';
import Item from './Item';

function ToDoList() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function addItem(event) {
        event.preventDefault();
        if (!novoItem) {
            return;
        } else {
            setLista([...lista, { text: novoItem, isCompleted: false }]);
            setNovoItem("");
        }
    }

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            {lista.length > 0 ? (
                lista.map((item, index) => <Item key={index} item={item} />)
            ) : (
                <img
                    src="https://www.nicepng.com/png/full/835-8355467_do-list-vector.png"
                    alt="Imagem de uma lista"
                />
            )}
        </>
    );
}

export default ToDoList;