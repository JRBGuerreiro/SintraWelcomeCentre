import React from "react";
import { aboutUsText } from "../utility/text/aboutUs";
import { valuesText } from "../utility/text/valuesText";
import { valuesImages } from "../utility/images/valuesImages";
import styled from "styled-components";

const AboutUsSection = styled.section `
    width:100%;
    background-color: #fcfcfc;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    z-index: 10;
`

const AboutUsHeader = styled.h2 `
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding: 30px 0 45px 0;
    color: #fcfcfc;
    text-align: center;
    font-size: 24pt;

    &:after {
        transition: opacity 1s;
        transition-delay: 0.8s;
        content: "About Us";
        display: block;
        color: rgba(252,252,252,.1);
        transform: rotate3d(1, 0, 0, 114deg) scale(1, 2.5) skew(-38deg, 0deg);
        margin: -12px 0 0 10px;
    }
`

const AboutUsImageWrapperLeft = styled.div `
    width: 90%;
    display: flex;
    justify-content: flex-end;
    height: 400px;
    z-index: 10;
`

const AboutUsImage = styled.div `
    background-image: url('./images/moorish.jpg');
    background-repeat: no-repeat;
    width: 40%;
    background-size: contain;
    z-index: 10;
`

const AboutUsTextWrapperRight = styled.div `
    display: flex;
    justify-content: flex-end;
    white-space: pre-line;
`

const AboutUsText = styled.p `
    color: #2a2d32;
    font-family: 'Raleway', sans-serif;
    line-height: 2.2;
    font-size: 14pt;
    text-align: center;
`

///display content



const AboutUs = (props) => {
    const aboutUs = aboutUsText.map((content) => {
        const values = content[props.language]
            return <>
            <AboutUsImageWrapperLeft>
                <AboutUsImage/>
            </AboutUsImageWrapperLeft>
            <AboutUsTextWrapperRight>
                <AboutUsText>{values.text}</AboutUsText>
            </AboutUsTextWrapperRight>
            </>
    })

    return (
        <>
        <AboutUsSection>
            <AboutUsHeader>About Us</AboutUsHeader>
            {aboutUs}
        </AboutUsSection>
        </>
    )
}

export default AboutUs