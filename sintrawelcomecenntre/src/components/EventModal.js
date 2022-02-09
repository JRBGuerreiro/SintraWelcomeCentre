import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsXCircle } from "react-icons/bs";

const Animation = styled.div `
    opacity: ${({divOpacity}) => (divOpacity ? "1" : "0")};
    transform: ${({ animate }) => (animate ? "translateY(0vh)" : "translateY(-100vh)")};
    transition: all 0.5s;
    display: flex;
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 20px;
    z-index: 11;
`

const Modal = styled.div`
    position: fixed;
    display: flex;
    width: 500px;
    min-height: 500px;
    flex-direction: column;
    align-items: center;
    background-color: #e41c40;

    @media (max-width: 800px) {
        width:92%;
    }
`

const Event = styled.div`
    background-image: url("${props => props.imageSrc}");
    background-size: contain;
    background-repeat: no-repeat;
    height:400px;
    width:100%;

    @media (max-width: 800px) {
        height: 300px;
    }
`

const Description = styled.p`
    font-family: "Raleway", sans-serif;
    color: white;
    padding: 0 20px;
    line-height: 30px;
    white-space: pre-line;
    @media (max-width: 800px) {
        font-size: 10pt;
        margin-top: 10px
        line-height: 27px;
        padding: 0 15px;
    }
`


const EventModal = ({ language }) => {
    const [visible, setVisible] = useState(false);

    const closeModalAndStoreLocal = () => {
        setVisible(false);
        localStorage.setItem("valentines", "true")
    }
    
        useEffect(() => {
            const workIfOpenEvent = () => {
                if(document.documentElement.scrollTop > 1946  && !visible && !localStorage.getItem("valentines")) {
                    debugger;
                    setVisible(true);
                }
            }
            

                window.addEventListener('scroll', workIfOpenEvent)
    
            return(() => {
                window.removeEventListener('scroll', workIfOpenEvent);
            })
        })

    return(
        <Animation animate={visible} divOpacity={visible}>
            <Modal>
                <BsXCircle onClick={closeModalAndStoreLocal} style={{position: "absolute", top: '8px', right: '8px', color:'#424e54', width:'30px', height:'30px', cursor:'pointer'}}/>
                <Event imageSrc={`../images/Special/valentines${language}.jpg`}></Event>
                <Description>
                    {language === "en" ? 
                        "The Sintra Welcome Center team suggests an unmissable, different and special romantic experience for Valentine's Day. \n Offer your partner a tour in this romantic place - Sintra, passing through the most beautiful viewpoints and gardens in this town. \n This love pack will also include a small photo session that will bring eternal memories to the couples in love, ending with an intimate picnic, alone and exclusive to our customers. \n It is mandatory to pre-book this experience, as the offer is limited."
                        : "A equipa da Sintra Welcome Centre sugere para o dia dos Namorados uma experiência romântica imperdível, diferente e especial. \n Ofereça à sua cara metade, um passeio pela Sintra Romântica com passagem pelos miradouros e jardins mais bonitos desta Vila. \n Neste love pack estará também incluído uma pequena sessão fotográfica que trará memórias eternas aos casais enamorados, terminando com um piquenique intimista, a sós e exclusivo aos nossos clientes. \n Obrigatório a pré-reserva desta experiência, pois a oferta é limitada."
                    }
                </Description>
            </Modal>
        </Animation>
    )
}

export default EventModal