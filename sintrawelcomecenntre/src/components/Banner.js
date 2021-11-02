import React from 'react';
import styled from "styled-components";
import { bannerText } from '../utility/text/banner';

const BannerWrapper = styled.div`
    width: 100%;
    background-color: #dce4e4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 65px 0;
`

const BannerTitle = styled.h2`
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #2A2D32;
    font-size: 28pt;
    margin-bottom: 0;
    white-space: pre-line;
`

const BannerParagraph = styled.p`
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #2A2D32;
    width: 40%;
    white-space: pre-line;
    font-size: 13pt;
`
const Banner = ({language}) => {

    return(
        <BannerWrapper>
            <BannerTitle>
                {bannerText.map(entry => {
                    return entry[language].title
                })}
             </BannerTitle>
            <BannerParagraph>
                {bannerText.map(entry => {
                    return entry[language].text
                })}
            </BannerParagraph>
        </BannerWrapper>
    )
}

export default Banner;