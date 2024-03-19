import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
    // collapsed?: boolean;
}


export const UnControlledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
        const onCollapsed = !collapsed
        setCollapsed(onCollapsed)
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