import React, {useState} from "react";

type PropsType = {
    // on:boolean

}



export const OnOff = (props: PropsType) => {

    const [on, setOn] = useState(false)


    const onStyle = {
        width:"100px",
        height:"50px",
        border:'1px solid black',
        display:'inline-block',
        margin:'5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width:"100px",
        height:"50px",
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:  on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        border:'1px solid black',
        margin:'0 auto',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickHandler = () => {
        const click = !on;
        setOn(click)
    }


    return <div>
        <div style={onStyle} onClick={()=>onClickHandler()}>On</div>
        <div style={offStyle} onClick={()=>{ onClickHandler()}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}
