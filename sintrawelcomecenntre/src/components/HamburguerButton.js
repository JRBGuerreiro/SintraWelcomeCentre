import React, { useEffect } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 30;
    height: 45px;
    width: 45px;
    border: 1px solid #386e35;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

const ButtonHamburguer = styled.div`
    width: 15px;
    height: 1px;
    border-radius: 5px;
    background-color: #386e35;
    transition: all .5s ease-in-out;

    &::before, &::after {
        content: '';
        width:15px;
        height: 1px;
        position: absolute;
        background-color: #386e35;
        border-radius: 5px;
        transition: all .5s ease-in-out;
    }

    &::before {
        transform: translateY(-8px);
    }

    &::after {
        transform: translateY(8px);
    }
`

const HamburguerButton = () => {

    useEffect(() => {

        const hideShowButton = () => {
            const button = document.getElementById('menuButton');

            window.innerWidth > 767 ? button.style.visibility = 'hidden' : button.style.visibility = 'visible'
        }

        window.addEventListener('resize', hideShowButton)

        return () => {
            window.removeEventListener('resize', hideShowButton)
        }
    })

    return(
        <ButtonContainer id="menuButton">
            <ButtonHamburguer/>
        </ButtonContainer>
    )
}

export default HamburguerButton;