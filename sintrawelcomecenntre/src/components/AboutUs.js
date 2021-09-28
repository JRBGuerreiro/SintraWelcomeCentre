import React from "react";
import { aboutUsText } from "../utility/aboutUs";
import { valuesText } from "../utility/valuesText";
import { valuesImages } from "../utility/valuesImages";
const AboutUs = (props) => {
//Logic to retrieve the text
const textSections = aboutUsText.map((data, key) => {
    if(key % 2 === 0) {
        return <>
        <h2>{data[props.language].title}</h2>
        <div className="about_us_us">
            <div className="about_us_pwrapper">
                <p style ={{whiteSpace:"pre-line"}}>
                    {data[props.language].text}
                </p>
            </div>
            <div className="about_us_imagewrapper">
                <img src= "../images/mission.png"></img>
            </div>
        </div>
        </>
    }
    
    return <>
    <h2>{data[props.language].title}</h2> 
    <div className="about_us_us">
        <div className="about_us_imagewrapper">
            <img src= "../images/mission.png"></img>
        </div>
        <div className="about_us_pwrapper">
            <p style ={{whiteSpace:"pre-line"}}>
                {data[props.language].text}
            </p>
        </div>
    </div>
    </>
})

const textSectionValues = valuesText.map((data) => {
    const values = data[props.language]
    return Object.values(values).map((item, index) => {
        return <div className="hero_section_values_container_wrapper"> 
                    <div className="hero_section_values_container">
                        <img src={Object.values(valuesImages)[index]} alt="Values Image"/>
                        <h3>{item}</h3>
                    </div>
                </div>
    }
)})


    return(
        <section className="about_us_section">
            <div className="about_us_title_wrapper">
                <h1 className="about_us_title">Us and our Mission</h1>
            </div>
            <div className="about_us_content_parentwrapper">
                <div className="about_us_content_wrapper">
                    {textSections}
                </div>
                <h2 className="values_title">Values</h2>
                <div className="about_us_values_wrapper">
                    {textSectionValues}
                </div>
            </div>
        </section>
    )
}

export default AboutUs