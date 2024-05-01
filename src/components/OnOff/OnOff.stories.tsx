import {Accordion} from "../Accordion/Accordion";
import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
}

export const EmptyRating = () => {
    return (
        <OnOff onChange={()=>{}} value={true}/>
    )
}

const callback = action('on or off was clicked')

export const OnMode = () => <OnOff onChange={callback} value={true}/>
export const OffMode = () => <OnOff onChange={callback} value={false}/>

export const ModeChanging = () => {
    const [on, setOn] = useState(true)
    return <OnOff onChange={setOn} value={on}/>
}