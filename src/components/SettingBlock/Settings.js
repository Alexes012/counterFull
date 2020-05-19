import React from 'react';
import InputAreas from "./InputAreas";
import Button from "../Button";
import s from "./Settings.module.css"


class Settings extends React.Component {


    render = () => {

        return (
            <div className={s.settings}>
                <InputAreas inputClass={this.props.inputClass} maxValue={this.props.maxValue}
                            startValue={this.props.startValue} setStartValue={this.props.setStartValue}
                            setMaxValue={this.props.setMaxValue} areaItem={this.props.areaItem}
                            onFocusActive={this.props.onFocusActive}/>
                <div className={s.wrapper}>
                    <Button valueVisual={this.props.valueVisual} setStart={this.props.setStart}
                            startValue={this.props.startValue}
                            name={this.props.settingButtons} maxValue={this.props.maxValue}/>
                </div>
            </div>


        )
    }
}

export default Settings;
