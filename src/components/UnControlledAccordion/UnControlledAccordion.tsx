import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    title: string;
    collapsed?: boolean;
}

type ActionType = {
    type: string;

}

const reducer = (state:boolean, action: ActionType) => {
    debugger
    if (action.type === 'Toggle-collapsed') {
        return !state
    }

    return state
}

export const UnControlledAccordion = (props: AccordionPropsType) => {

    //const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)


    const onClickHandler = () => {
        const onCollapsed = !collapsed
        dispatch({
            type:'Toggle-collapsed'
        })
    }

    return (<>
            <AccordionTitle title={props.title} callBack={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title:string;
    callBack:()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.callBack}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}