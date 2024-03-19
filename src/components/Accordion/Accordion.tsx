import React from "react";



type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (collapsed:boolean) => void;
}


export const Accordion = (props: AccordionPropsType) => {
    return (<>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitleType = {
    title: string;
    onClick: (collapsed:boolean) => void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={()=>props.onClick(props.collapsed)}>{props.title}</h3>
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