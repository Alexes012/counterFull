import React from 'react';
import InputArea from "./InputArea";
import s from "./inputAreas.module.css"
import Settings from "./Settings";


class InputAreas extends React.Component {

    state = {
        placeholderStartValue: 'enter start value',
        placeholderMaxValue: 'enter max value',
    };


    render = () => {
        return (
            <div className={s.areas}>
                <InputArea inputClass={this.props.inputClass} holderValue={this.state.placeholderMaxValue}
                           value={this.props.maxValue} maxValue={this.props.maxValue} areaItem={this.props.areaItem[0]}
                           setValue={this.props.setMaxValue} onFocusActive={this.props.onFocusActive}/>
                <InputArea inputClass={this.props.inputClass} holderValue={this.state.placeholderStartValue}
                           value={this.props.startValue} startValue={this.props.startValue}
                           setValue={this.props.setStartValue} areaItem={this.props.areaItem[1]}
                           onFocusActive={this.props.onFocusActive}/>
            </div>
        );
    }
}

export default InputAreas;
