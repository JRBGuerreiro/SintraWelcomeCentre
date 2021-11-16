import React from "react";
import { products } from '../utility/text/products';
import { valuesText } from "../utility/text/valuesText";
import Card from "./Card";
import styled from "styled-components";
import { valuesImages } from "../utility/images/valuesImages";
import Banner from "./Banner";
import AboutUs from "./AboutUs";

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

const Products = (props) => {
    return(
        <section className="products">
            <AboutUs 
                language={props.language}
            />
            <div className="products_why_us">
                <h2>Why Us?</h2>
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
                <h2 className="products_title">Our Products</h2>
            <div className="products_content">
                {products.map(product => {
                    return <Card 
                    title={product[props.language].title}
                    description={product[props.language].description}
                    image={product.image}
                    />
                })}
            </div>
        </section>
    )
}

export default Products