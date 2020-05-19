import React from 'react';
import s from "./InputArea.module.css"


class InputArea extends React.Component {


    render = () => {


        return (


            <div className={s.area}>
                <span>{this.props.areaItem}</span>
                <input className={this.props.inputClass()} onChangeCapture={this.props.setValue}
                       onFocus={this.props.onFocusActive}
                       type="number" placeholder={this.props.holderValue} value={this.props.value}/>
            </div>
        )
    }
}

export default InputArea;
