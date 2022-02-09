import React from "react";
import styled from "styled-components";
import { maps } from "../utility/text/maps";
import { titles } from "../utility/text/titles";
import MapCard from "./MapCard";

const MapsSection = styled.section`
    display: flex;
    width: 100vw;
    background-color: #dde4e4;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 35px;
`

const MapsTitle = styled.h2 `
    font-family: 'Raleway', sans-serif;
    color: #2a2d32;
    font-size: 22pt;

    @media (max-width: 767px) {
        margin-bottom: 25px;
        text-align: center;
    }
`

const MapsWrapper = styled.div`
    display: flex;
`

const Maps = ({ language }) => {
    return(
        <MapsSection>
            <MapsTitle>{titles[language].maps}</MapsTitle>
            <MapsWrapper>
                {maps.map(map => {
                    return <MapCard
                        image={map.image}
                        title={map[language].title}
                        monument={map.monument}
                    />
                })}
            </MapsWrapper>
            
        </MapsSection>
    )
}

export default Maps