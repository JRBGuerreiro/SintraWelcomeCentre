import React, { useEffect } from 'react';
import styled from 'styled-components';
import { galleryImages } from '../utility/images/galleryImages';

const GallerySection = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #dde4e4;
    position: relative;
    padding: 30px 0 60px;
    flex-direction: column;
    align-items: center;
`

const GalleryWrapper = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
`

const GalleryImage = styled.div`
    background-image: ${props => `url('${props.imageSrc}')`};
    min-width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    margin: 10px;
    border-radius: 5px;

    &:after {
        content: '${props => props.imageTitle}';
        background-color: #000000;
        opacity: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Raleway';
        font-size: 16pt;
        transition: 0.3s ease-in;
        border-radius: 5px;
    }

    &:hover::after {
        opacity: 0.8;
    }

    @media (max-width: 767px) {
        min-width: 150px;
        height: 150px;

        &:after {
            font-size: 9.5pt;
        }
    }
`

const GalleryImageWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   flex-wrap: wrap;
`

const GalleryTitle = styled.h2 `
    font-family: 'Raleway', sans-serif;
    color: #2a2d32;
    font-size: 22pt;
`

const renderImages = () => {
    return Object.entries(galleryImages).map((entry) => {
        return <GalleryImage imageSrc={entry[1]} imageTitle={entry[0]} />
    })
}

const Gallery = () => {

    return(
        <GallerySection>
            <GalleryTitle>Places You Can't Miss</GalleryTitle>
            <GalleryWrapper id="wrapper" onMouseDown>
                <GalleryImageWrapper>
                    {renderImages()}
                </GalleryImageWrapper>
            </GalleryWrapper>
        </GallerySection>
    )
}

export default Gallery;