import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClockCircle, AiOutlineHome } from 'react-icons/ai';
import { tuktukTours } from "../utility/text/tuktuktours";
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import Footer from "./Footer";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const TukTukSection = styled.section`
    display: flex;
    flex-direction: column;
`

const ProductsTitleWrapper = styled.div`
    width:100%;
    justify-content: center;
    display: flex;
    background-color: #424e54;
    margin-bottom: 20px;
    position: relative;
`

const ProductsTitle = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 18pt;
    text-align: center;
    color: #fcfcfc;
    margin: 0;
    padding: 20px 0;
`

const WrapperOfProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ProductWrapperContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    @media (max-width: 767px) {
        width: 100%;
    }
`
const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 1px solid #e1e0e0;
`
const ProductImage = styled.div`
    background-image: ${props => `url('${props.image}')`};
    background-size: cover;
    min-height: 300px;
    width: 100%;
`
const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-conten: center;
    padding-left: 10px;
`

const ProductTitle = styled.h4`
    font-family: 'Raleway', sans-serif;
    font-size: 12pt;
    margin: 10px 0;
`

const ProductPrice = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 11pt;
    margin: 5px 0 5px 5px;
`

const ProductDuration = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 11pt;
    margin: 5px 0 5px 5px;
`

const ProductButton = styled.button`
    
`

const IconProductCenterWrapper = styled.div`
    display: flex;
    align-items: center;
`

const GoBackWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 10px;
    padding-top: 20px;
`

const GoBackText = styled(Link)`
    font-family: Raleway, sans-serif;
    font-size: 10pt;
    color: #fcfcfc;
    margin: 0 0 0 5px;
    text-decoration: none;
`

export const convertMinutesToHours = (timeinMins) => {
    let returnTime;
    if (typeof timeinMins === "number"){
        let hours = (timeinMins / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        returnTime =  rminutes > 0 ?
        rhours + "h:" + rminutes + "min" :
        rhours + "h"
    } else {
        const arrayOfIntervals = timeinMins.split(" ");
        arrayOfIntervals.forEach(time => {
            if(isNaN(parseInt(time))) {
                returnTime = returnTime + " " + time + " ";
            } else {
                let hours = (parseInt(time) / 60);
                let rhours = Math.floor(hours);
                let minutes = (hours - rhours) * 60;
                let rminutes = Math.round(minutes);
                let r = rminutes > 0 ?
                rhours + "h:" + rminutes + "min" :
                rhours + "h"
                returnTime = returnTime ? returnTime + r : "" + r
            }
        })
    }

    return returnTime;
}

const renderProductsContent = (lang) => {
    return tuktukTours.map((tour) => {
        return <>
        <ProductWrapperContainer>
            <ProductWrapper>
                <ProductImage image={tour.image}/>
                <ProductInfoWrapper>
                    <ProductTitle>{tour[lang].title}</ProductTitle>
                    <IconProductCenterWrapper>
                        <AiOutlineClockCircle/><ProductDuration> {convertMinutesToHours(tour[lang].duration)}</ProductDuration>
                    </IconProductCenterWrapper>
                    <IconProductCenterWrapper>
                        <RiMoneyEuroCircleLine/><ProductPrice> {tour[lang].price}</ProductPrice>
                    </IconProductCenterWrapper>
                </ProductInfoWrapper>
                <ProductButton>Buy</ProductButton>
            </ProductWrapper>   
        </ProductWrapperContainer>
        </>
    })
}

const TukTukTours = () => {

    const location = useLocation();
    const { lang } = location.state

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <TukTukSection>
                <ProductsTitleWrapper>
                    <GoBackWrapper>
                        <AiOutlineHome style={{color:"#fcfcfc"}}/><GoBackText to="/">Go Back</GoBackText>
                    </GoBackWrapper>
                    <ProductsTitle>TukTuk Tours</ProductsTitle>
                </ProductsTitleWrapper>
                <WrapperOfProducts>
                    {renderProductsContent(lang)}
                </WrapperOfProducts>
            </TukTukSection>
            <Footer
                language = { lang }
            />
        </>
    )
}

export default TukTukTours;