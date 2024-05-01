import {Select} from "./Select";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Selected',
    component: Select,
}

const data = [
    {title: 'React', value: 1},
    {title: 'HTML', value: 2},
    {title: 'CSS', value: 3},
]
const data1 = [
    {title: 'Russian', value: 1},
    {title: 'English', value: 2},
    {title: 'Kazakh', value: 3},
]

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return (
        <>
            <Select value={value} onChange={setValue} items={data}/>

        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <>
            <Select value={value} onChange={setValue} items={data}/>

        </>
    )
}

