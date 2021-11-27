import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai';
import { BsHouseDoorFill } from 'react-icons/bs';
import styled from "styled-components";
import Modal from "./Modal";
import { titles } from "../utility/text/titles";

const FooterSection = styled.section`
    width: 100vw;
    background-color: #424e54;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 25px 0;
`

const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5b6d75;
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
        border-radius: 50%;
    }

    &:hover::after {
        height: 100%;
    }
`

const IconsWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        margin-right: 5px;
    }
`

const Copyright = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StoreInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StoreInfoParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 10px;
    }
`

const StoreInfoParagraph = styled.p`
    font-family: 'Raleway'. sans-serif;
    font-size: 10pt;
    color: #fcfcfc;
`

const StoreInfoTitle = styled.h4`
    font-family: 'Raleway', sans-serif;
    font-size: 10pt;
    color: #3dc050;
    text-align: center;
    margin: 0;
    font-weight: 200;
`

const StoreInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PrivacyPolicyBtn = styled.button`
    width: 220px;
    padding: 0;
    &:hover {
        color: #3dc050;
        background-color: #424e54;
    }
`

const FooterBottomAreaWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

const DevelopedBy = styled.a`
    font-family: 'Raleway', sans-serif;
    font-size: 8pt;
    color: #fcfcfc;
    text-decoration: none;

    @media (max-width: 767px) {
        margin-left: 5px;
        text-align: center;
    }
`

const Footer = ({ language }) => {
    const [visible, setVisible] = useState(false)
    return (
        <FooterSection>
            

            <StoreInfo>
                <StoreInfoContainer>
                        <StoreInfoTitle>Loja Centro Histórico</StoreInfoTitle>
                    <StoreInfoParagraphWrapper>
                        <AiFillPhone  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph style={{marginRight:'15px'}}>+351 210 521 283</StoreInfoParagraph>
                        <BsHouseDoorFill  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph>Rua Visconde de Monserrate, Loja 40, 2710-591 Sintra</StoreInfoParagraph>
                    </StoreInfoParagraphWrapper>
                        <StoreInfoTitle>Renting Hub Portela Sintra</StoreInfoTitle>
                    <StoreInfoParagraphWrapper>
                        <AiFillPhone  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph style={{marginRight:'15px'}}>+351 210 521 280</StoreInfoParagraph>
                        <BsHouseDoorFill  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph>Av. Dr. Álvaro de Vasconcelos,4B, Portela de Sintra, 2710-420 Sintra</StoreInfoParagraph>
                    </StoreInfoParagraphWrapper>
                </StoreInfoContainer>
            </StoreInfo>
            <Copyright>
                <p className="copyrightText" style={{color:'#3fda45', fontFamily:'"Raleway", sans-serif'}}>Sintra Welcome Centre
                    <span style={{color:'#fcfcfc', fontFamily:'"Raleway", sans-serif', fontSize:'9pt', marginLeft:'5px'}}>{'\u00A9'}2021</span>
                </p>
            </Copyright>
            <Modal
                language= {language}
                visible = {visible}
                onClose = {() => setVisible(false)}
            />
            <FooterBottomAreaWrapper>
                <DevelopedBy href="https://meetjorge.netlify.app/#/">Developed by JG</DevelopedBy>
                <PrivacyPolicyBtn onClick={() => setVisible(true) }>{titles[language].privacyPolicy}</PrivacyPolicyBtn>
                <IconsWrapper>
                    <IconWrapper>
                        <FaFacebook style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                    <IconWrapper style={{marginLeft:"15px"}}>
                        <FaInstagram style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                    <IconWrapper style={{marginLeft:"15px"}}>
                        <FaTripadvisor style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                </IconsWrapper>
            </FooterBottomAreaWrapper>
            
        </FooterSection>
    )
}

export default Footer;