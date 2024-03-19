import React, {useState} from "react";

type PropsType = {
    onChange:(value:boolean)=> void;
    value:boolean;
}



export const OnOff = (props: PropsType) => {




    const onStyle = {
        width:"100px",
        height:"50px",
        border:'1px solid black',
        display:'inline-block',
        margin:'5px',
        backgroundColor: props.value ? 'green' : 'white'
    }
    const offStyle = {
        width:"100px",
        height:"50px",
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:  props.value ? 'white' : 'red'
    }
    const indicatorStyle = {
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        border:'1px solid black',
        margin:'0 auto',
        backgroundColor: props.value ? 'green' : 'red'
    }

    const onClickHandler = () => {
        props.onChange(!props.value)
    }


    return <div>
        <div style={onStyle} onClick={onClickHandler}>On</div>
        <div style={offStyle} onClick={onClickHandler}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}
