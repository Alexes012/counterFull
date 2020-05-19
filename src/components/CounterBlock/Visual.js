import React from 'react';
import s from "./Visual.module.css"


class Visual extends React.Component {
    render = () => {
        let setModule = () => {
            if (this.props.valueVisual ===  "enter values and press 'set'" ) {
                return 'visual'
            } if (this.props.valueVisual == this.props.maxValue) {
                return 'visualNumberMax'
            } if (this.props.valueVisual ===  "Incorrect value"){
                return 'visualError'
            } else {
                return 'visualNumber'
            }
        };


        return (
            <div className={s[setModule()]}>
                <span>{this.props.valueVisual}</span>
            </div>
        );
    }
};

export default Visual;
