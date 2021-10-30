import React from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import styled from "styled-components";

const FooterSection = styled.section`
    width: 100%;
    background-color: #386e35;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 50px 0;
`

const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e9a39;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        width: 100%;
        height: 0;
        background-color: #3f853b;
    }

    &:hover::after {
        height: 100%;
    }
`

const IconsWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const Copyright = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const Footer = () => {
    return (
        <FooterSection>
            <IconsWrapper>
                <IconWrapper>
                    <FaFacebook style={{width:"30px", height: "30px", color:"#fcfcfc", zIndex:10}}/>
                </IconWrapper>
                <IconWrapper style={{marginLeft:"15px"}}>
                    <FaInstagram style={{width:"30px", height: "30px", color:"#fcfcfc", zIndex:10}}/>
                </IconWrapper>
                <IconWrapper style={{marginLeft:"15px"}}>
                    <FaTripadvisor style={{width:"30px", height: "30px", color:"#fcfcfc", zIndex:10}}/>
                </IconWrapper>
            </IconsWrapper>

            <Copyright>
                <p className="copyrightText" style={{color:'#3fda45', fontFamily:'"Raleway", sans-serif'}}>Sintra Welcome Centre
                    <span style={{color:'#fcfcfc', fontFamily:'"Raleway", sans-serif', fontSize:'9pt', marginLeft:'5px'}}>{'\u00A9'}2021</span>
                </p>
            </Copyright>
        </FooterSection>
    )
}

export default Footer;