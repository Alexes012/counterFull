import React from 'react';
import s from "./Button.module.css"


class Button extends React.Component {


    render = () => {
        let onAddClick = () => {
            if (this.props.name === 'inc') {
                this.props.counterInc();
            } else if (this.props.name === 'reset') {
                this.props.counterReset();
            } else if (this.props.name === 'set') {
                this.props.setStart();
            }
        };

        let disableActive = () => {
            if (this.props.valueVisual === "enter values and press 'set'" && this.props.name === 'inc') {
                return 'disabled';
            }
            if (this.props.valueVisual === "enter values and press 'set'" && this.props.name === 'reset') {
                return 'disabled';
            }
            if (this.props.valueVisual === "Incorrect value" && this.props.name === 'reset') {
                return 'disabled';
            }
            if (this.props.valueVisual === "Incorrect value" && this.props.name === 'inc') {
                return 'disabled'
            }
            if (this.props.valueVisual === this.props.maxValue && this.props.name === 'inc') {
                return 'disabled'
            }
            if ((this.props.name === 'set' && this.props.valueVisual !== "enter values and press 'set'") || (this.props.startValue === '' || this.props.maxValue === '')) {
                return 'disabled'
            }
        };


        return (

            <button onClick={() => {
                onAddClick()
            }} disabled={disableActive()}> {this.props.name} </button>

        );
    }
};

export default Button;
