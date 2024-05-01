import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions'

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default  {
    component: Accordion,
}



const onChangeHandler = action('onChange')

// export const CollapsedAccordion = () => {
//     return <Accordion title={'Collapsed Accordion'}
//                       onClick={onChangeHandler}
//                       collapsed={true}/>
// }

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'}
                      onClick={onChangeHandler}
                      collapsed={false}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Opened Accordion'}
                      onClick={()=>{setCollapsed(!collapsed)}}
                      collapsed={collapsed}/>
}