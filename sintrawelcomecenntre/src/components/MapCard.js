import React from "react";
import styled from "styled-components";
import pena_en from "../pdfs/Pena_ENG.pdf"
import pena_pt from "../pdfs/Pena_PT.pdf"
import mouros_en from "../pdfs/Mouros_ENG.pdf"
import mouros_pt from "../pdfs/Mouros_PT.pdf"
import vila_en from "../pdfs/Sintra_ENG.pdf"
import vila_pt from "../pdfs/Sintra_PT.pdf"

const MapCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 325px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    border-radius: 5px;
    background-color: #e7e7e7;

    &:first-child {
        margin-right: 30px;
    }

    &:last-child {
        margin-left: 30px;
    }

    @media (max-width: 767px) {
        &:first-child {
            margin-right: 0;
            margin-bottom: 15px;
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
    color: #424e54;
    margin: 0;
    padding: 10px 0 10px 0;
    background-color: #dce4e4;
    text-align: center;
`

const MapCardTitle2 = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #424e54;
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
            break;
        case "pena_pt":
            return pena_pt
            break;
        case "mouros_en":
            return mouros_en
            break;
        case "mouros_pt":
            return mouros_pt
            break;
        case "vila_en":
            return vila_en
            break;
        case "vila_pt":
            return vila_pt
            break;
    
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