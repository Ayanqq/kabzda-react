import './App.css';
import React from "react";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";


const App = () => {
    return (
        <div>
            {/*<Accordion title={'Name'} collapsed={false}/>*/}
            {/*<Accordion title={'Users'} collapsed={true}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <UnControlledAccordion title={'What you want'} />
            <UnControlledAccordion title={'What you need'} />

            <UnControlledRating/>

            <OnOff />


        </div>
    )

}

type PageTitlePropsType = {
    title:string;
}

const PageTitle = (props:PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App


