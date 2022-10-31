import React from "react";
import Button from "../Button";

class Formulario extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="tarefa">Adicione uma nova tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                        id="tarefa"
                    />
                </div>
                <div>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button />
            </form>
        )
    }
}

export default Formulario;