import React from "react";
import { products } from '../utility/text/products';
import { valuesText } from "../utility/text/valuesText";
import styled from "styled-components";
import { valuesImages } from "../utility/images/valuesImages";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import { titles } from "../utility/text/titles";
import FlipCard from "./FlipCard";
import { cookiePolicy } from "../utility/text/cookiePolicy";

const CookiePolicyWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 100;
    position: relative;
    display: flex;
    justify-content: center;
`

const CookiePolicyContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding: 20px 10px 10px 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #396e34;
    align-items:center;
`
const CookieButton = styled.div`
    padding: 7px;
    border: 1px solid #fcfcfc;
    margin-top: 15px;
    display: flex;
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in;
    width: 15%;

    &:hover {
        background-color: #fcfcfc;
        color: #333;
    }
`

const CookiePolicyContainer = styled.div`
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
`

const CookiePolicy = (props) => {
    return(
        <CookiePolicyWrapper>
            <CookiePolicyContainerWrapper>
                <CookiePolicyContainer>
                    {cookiePolicy[props.language]}
                </CookiePolicyContainer>
                <CookieButton onClick={() => props.setLocalStorage()}>OK</CookieButton>
            </CookiePolicyContainerWrapper>
        </CookiePolicyWrapper>
    )
}

export default CookiePolicy