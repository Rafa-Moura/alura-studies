import React from "react";

import './style.scss';

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        }
    ]
    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li className="item" key={index}>
                        <h3>{item.tarefa}</h3>
                        <p>{item.tempo}</p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;