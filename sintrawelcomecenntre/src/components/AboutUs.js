import React from "react";
import { aboutUsText } from "../utility/aboutUs";
import { valuesText } from "../utility/valuesText";
import { valuesImages } from "../utility/valuesImages";
import styled from "styled-components";

const AboutUsSection = styled.section `
    width:100%;
    background-image: url('./images/praia.jpg');
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    z-index: 10;
`

const AboutUsHeader = styled.h2 `
    font-family: 'Raleway', sans-serif;
    text-align: center;
    color: #fcfcfc;
    font-size: 30pt;
    z-index: 10;
`

const AboutUsImageWrapperRight = styled.div `
    width: 90%;
    display: flex;
    justify-content: flex-start;
    height: 400px;
    z-index: 10;
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

const AboutUsTextWrapperLeft = styled.div `
    display: flex;
    justify-content: flex-start;
    white-space: pre-line;
`

const AboutUsTextWrapperRight = styled.div `
    display: flex;
    justify-content: flex-end;
    white-space: pre-line;
`

const AboutUsText = styled.p `
    color: white;
    font-family: 'Raleway', sans-serif;
    line-height: 2.2;
    font-size: 14pt;
`

const Overlay = styled.div `
    background-color: #000000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    opacity: 0.4;
`

///display content



const AboutUs = (props) => {
    const aboutUs = aboutUsText.map((content, index) => {
        const values = content[props.language]
            if(index % 2 === 0) {
                return <>
                <AboutUsImageWrapperRight>
                    <AboutUsImage/>
                </AboutUsImageWrapperRight>
                <AboutUsTextWrapperLeft>
                    <AboutUsText>{values.text}</AboutUsText>
                </AboutUsTextWrapperLeft>
                </>
            }

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
            {aboutUs}
        <Overlay/>
        </AboutUsSection>
        </>
    )
}

export default AboutUs