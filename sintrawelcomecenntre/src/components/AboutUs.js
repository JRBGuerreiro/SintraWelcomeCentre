import React from "react";
import { aboutUsText } from "../utility/text/aboutUs";
import styled from "styled-components";

const AboutUsSection = styled.section `
    width:100vw;
    background-color: #fcfcfc;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    z-index: 10;
`

const AboutUsWrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    height: 300px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    padding: 5px;
    background-color: #009688;
`

const AboutUsHeader = styled.h2 `
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding: 30px 0 45px 0;
    color: #424e54;
    text-align: center;
    font-size: 24pt;

    &:after {
        transition: opacity 1s;
        transition-delay: 0.8s;
        color: rgba(40,54,71,.1);
        content: "About Us";
        display: block;
        transform: rotate3d(1, 0, 0, 114deg) scale(1, 2.5) skew(-38deg, 0deg);
        margin: -12px 0 0 10px;
    }
`

const AboutUsImage = styled.div `
    background-image: url('./images/team.jpg');
    background-repeat: no-repeat;
    width: 600px;
    background-size: cover;
    z-index: 10;
    height: 450px;
`

const AboutUsText = styled.p `
    width: 80%;
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    line-height: 2.2;
    font-size: 14pt;
    text-align: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
`

const AboutUs = (props) => {
    const aboutUs = aboutUsText.map((content, index) => {
        const values = content[props.language]
        if(index === 0) {
            return <>
                <AboutUsWrapper>
                    <AboutUsText>{values.text}</AboutUsText>
                </AboutUsWrapper>
                
            </>
        }    
    })

    return (
        <>
            <AboutUsSection>
                <AboutUsHeader>About Us</AboutUsHeader>
                <AboutUsImage />
                {aboutUs}
            </AboutUsSection>
        </>
    )
}

export default AboutUs