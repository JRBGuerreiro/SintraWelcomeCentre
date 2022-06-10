import React from "react";
import { products } from '../utility/text/products';
import { valuesText } from "../utility/text/valuesText";
import Card from "./Card";
import styled from "styled-components";
import { valuesImages } from "../utility/images/valuesImages";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import { titles } from "../utility/text/titles";
import { AiFillHeart } from "react-icons/ai"


const ProductsWhyContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`

const ProductsWhyContentText = styled.h4`
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    font-size: 11pt;
    font-weight: lighter;
`

const ProductsWhyContentImg = styled.img`
    width: 40px;
    height: 40px;
`

const ProductsWhyContentWrapper = styled.div`
    display: flex;
    width: 160px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #424e54;
    border-radius: 3px;
    margin: 10px 10px 0 10px;
    padding: 20px 10px 10px 10px;
    
`
const EventsWrapper = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    background-color: #e41c40;
    flex-direction: column;
`

const EventsAnotherWrapper = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const EventProduct = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #fcfcfc;
`

const EventsP = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #fcfcfc;
    text-decoration: underline;
    cursor: pointer;
`

const Products = (props) => {
    const tickleLocalStorageAndShowModal = () => {
        localStorage.removeItem("valentines")
        window.scrollBy(0,2)
    }

    return(
        <section className="products">
            <AboutUs 
                language={props.language}
            />
            <div className="products_why_us">
                <h2>{titles[props.language].whyUs}</h2>
                <ProductsWhyContent>
                    {valuesText.map((value) => {
                        return Object.values(value[props.language]).map((valueWLang, index) => {
                            const imageValue = Object.values(valuesImages)
                            return <>
                                <ProductsWhyContentWrapper>
                                    <ProductsWhyContentImg src={imageValue[index]}/>
                                    <ProductsWhyContentText>{valueWLang}</ProductsWhyContentText>
                                </ProductsWhyContentWrapper>
                            </>
                        })
                    })}
                </ProductsWhyContent>
            </div>
            <Banner
                language={props.language}
            />
                <h2 className="products_title" id="product">{titles[props.language].ourProducts}</h2>
            <div className="products_content">
                {products.map(product => {
                    return <Card 
                    title={product[props.language].title}
                    description={product[props.language].description}
                    image={product.image}
                    language = {props.language}
                    route = {product.route}
                    />
                })}
            </div>
            {/* <EventsWrapper>
                <EventsAnotherWrapper>
                    <AiFillHeart style={{color: "#fcfcfc", marginRight: "5px"}}/><EventProduct>{props.language !== "en"
                        ? "Dia dos Namorados"
                        :"Valentine's Day"
                    }
                    </EventProduct><AiFillHeart style={{color: "#fcfcfc", marginLeft: "5px"}}/>
                </EventsAnotherWrapper>
                <EventsP onClick={tickleLocalStorageAndShowModal}>{props.language === "en" ? "Find out more" : "Descubra mais!"}</EventsP>
            </EventsWrapper> */}
        </section>
    )
}

export default Products