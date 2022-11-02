import React from "react";
import styled from "styled-components";
import pena_en from "../pdfs/Pena_ENG.pdf"
import pena_pt from "../pdfs/Pena_PT.pdf"
import mouros_en from "../pdfs/Mouros_ENG.pdf"
import mouros_pt from "../pdfs/Mouros_PT.pdf"
import vila_en from "../pdfs/Sintra_ENG.pdf"
import vila_pt from "../pdfs/Sintra_PT.pdf"
import biester_pt from "../pdfs/Palacio_Biester_PT.pdf"
import biester_en from "../pdfs/Palacio_Biester_EN.pdf"
import monserrate from "../pdfs/Monserrate_ENG.pdf"

const MapCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 325px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    border-radius: 5px;
    background-color: #e7e7e7;

    &:not(:first-child) {
        margin-left: 30px;
    }

    @media (max-width: 767px) {
        &:first-child {
            margin-right: 0;
            margin-bottom: 15px;
        }

        &:not(:first-child) {
            margin-left: 0px;
        }

        &:nth-child(2) {
            margin-right: 0px;
        }

        &:last-child {
            margin-left: 0;
            margin-top: 15px;
        }
    }
`

const MapCardImageWrapper = styled.div`
    width: 250px;
    height: 200px;
`

const MapCardImage = styled.div`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 200px;
    width: 100%;
    background-image: ${props => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const MapCardWrapperContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 150px;
`

const MapCardTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #333;
    margin: 0;
    padding: 10px 0 10px 0;
    background-color: #dce4e4;
    text-align: center;
`

const MapCardTitle2 = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #333;
    font-size: 14px;
    text-align: center;
`

const MapFlag = styled.div`
    display: flex;
    justify-content: space-around;
`
let file;
const chooseFile = (monumentLang) => {
    switch (monumentLang) {
        case "pena_en":
            return pena_en
        case "pena_pt":
            return pena_pt
        case "mouros_en":
            return mouros_en
        case "mouros_pt":
            return mouros_pt
        case "vila_en":
            return vila_en
        case "vila_pt":
            return vila_pt
        case "monserrate_pt":
            return monserrate
        case "monserrate_en":
            return monserrate
        case "biester_pt":
            return biester_pt
        case "biester_en":
            return biester_en
        default:
            break;
    }
}

const MapCard = ({ image, title, monument }) => {
    return(
        <MapCardWrapper>
            <MapCardImageWrapper>
                <MapCardImage image={image}/>
            </MapCardImageWrapper>
            <MapCardWrapperContent>
                <MapCardTitle>{title}</MapCardTitle>
                <MapCardTitle2>Download</MapCardTitle2>
                <MapFlag>
                    <a href={chooseFile(`${monument}_en`)} download>
                        <img style={{height: "20px", width:"30px"}} src={"../images/Flags/united-kingdom.png"}/>
                    </a>
                    <a href={chooseFile(`${monument}_pt`)} download>
                        <img style={{height: "20px", width:"30px"}} src={"../images/Flags/portugal-flag-small.png"}/>
                    </a>
                </MapFlag>
            </MapCardWrapperContent>
        </MapCardWrapper>
    )
}

export default MapCard