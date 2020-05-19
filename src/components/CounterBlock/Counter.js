import React from 'react';
import Button from "../Button";
import Visual from "./Visual";
import s from "./Counter.module.css"
import Settings from "../SettingBlock/Settings";


class Counter extends React.Component {


    render = () => {
        return (
            <div className={s.counter}>
                <Visual valueVisual={this.props.valueVisual} maxValue={this.props.maxValue}/>
                <div className={s.wrapper}>
                    <Button valueVisual={this.props.valueVisual} counterInc={this.props.counterInc}
                            name={this.props.counterButtons[0]} maxValue={this.props.maxValue}/>
                    <Button valueVisual={this.props.valueVisual} counterReset={this.props.counterReset}
                            name={this.props.counterButtons[1]}/>
                </div>
            </div>
        );
    }
}

export default Counter;
