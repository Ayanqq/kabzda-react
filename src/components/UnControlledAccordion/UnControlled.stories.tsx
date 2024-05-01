import {action} from '@storybook/addon-actions'

import React from "react";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default  {
    title:'Uncontrolled Accordion',
    component: UnControlledAccordion,
}

const callback = action('Trying to press')

export const TestingUnControlledAccordion = () => <UnControlledAccordion title={'Hello1'} />