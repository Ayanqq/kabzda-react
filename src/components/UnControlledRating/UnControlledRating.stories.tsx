import { action } from '@storybook/addon-actions'

import React, {useState} from "react";
import {UnControlledRating} from "./UnControlledRating";

export default  {
    title:'Uncontrolled rating',
    component: UnControlledRating,
}

const callback = action('Trying to press')

export const TestingUnControlledAccordion = () => <UnControlledRating />
export const DefaultInputValue = () => <input defaultValue={'123'} />