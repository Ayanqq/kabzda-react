import './App.css';
import React, {useState} from "react";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingPropsType, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";


const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordion, setAccordion] = useState(false)
    const [on, setOn] = useState(true)

    return (
        <div>

            <Rating value={ratingValue} onClick={setRatingValue}/>


            <OnOff value={on} onChange={setOn}/>

            <Accordion title={'Wsup'} onClick={setAccordion} collapsed={accordion}/>
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


