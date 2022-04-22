import React, {useState} from 'react';
import s from './OnOffClicker.module.css'


type OnOffClickerPropsType = {
    value?: boolean
}
function OnOffClicker(props: OnOffClickerPropsType) {

    const [value, setValue] = useState<boolean>(false)

    const onClickHandler = () => {
        setValue(true)
        console.log(value)
    }
    const offClickHandler = () => {
        setValue(false)
        console.log(value)
    }

    const onBtnStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: value ? 'green' : 'white',
    }
    const offBtnStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: value ? 'white' : 'red',
    }
    const Bulb = {
        width: '30px',
        height: '30px',
        marginLeft: '10px',
        borderRadius: '50%',
        backgroundColor: value ? 'green' : 'red',
    }
    return (
        <div className={s.Wrapper} >
            <span onClick={onClickHandler} style={onBtnStyle}>On</span>
            <span onClick={offClickHandler} style={offBtnStyle}>Off</span>
            <span style={Bulb}> </span>
        </div>
    );
};

export default OnOffClicker;