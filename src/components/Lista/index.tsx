import tarefas from '../../api/tarefas'

import style from './Lista.module.scss';

function Lista() {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li className={style.item} key={index}>
                        <h3>{item.tarefa}</h3>
                        <p>{item.tempo}</p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;