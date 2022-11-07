import React from "react";

import style from './Botao.module.scss'

type Props = {
    children: any,
};

class Button extends React.Component<Props> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;