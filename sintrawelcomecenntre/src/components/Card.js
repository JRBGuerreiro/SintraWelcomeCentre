import React from 'react';
import {ImLocation} from 'react-icons/im';
import styled from "styled-components";

const CardWrapper = styled.div `
    width: 300px;
    height: 300px;
    margin-top: 20px;
    background-image: url('../images/treasuremap.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    &:first-child {
        margin-right: 20px;
    }

    &:last-child {
        margin-left: 20px;
    }

    &::after {
        content: "${props => props.proper}";
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        width: 100%;
        height: 100%;
        background-color: #0000006e;
        font-size: 24px;
        color: #fcfcfc;
        font-family: 'Raleway', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover::after {
        height: 20%;
        top: 80%;
    }
`

const Card = (props) => {
    return (
        <CardWrapper proper={props.title}>
            {/* <div className="card_bottom">
                <p>{props.description}</p>
                <div className="card_location_wrapper">
                    <ImLocation style={{color: "#386e35", width: "21px", height: "21px"}}></ImLocation>
                    <p>Village of Sintra, Lisbon, Portugal</p>
                </div>
            </div> */}
        </CardWrapper>
    )
}

export default Card;