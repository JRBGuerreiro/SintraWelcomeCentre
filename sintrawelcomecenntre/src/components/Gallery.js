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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    overflow-x: hidden;
    cursor: grab;
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
`

const GalleryImageWrapper = styled.div`
   display: flex;
   justify-content: center;
`

const GalleryTitle = styled.h2 `
    font-family: 'Raleway', sans-serif;
    color: #2a2d32;
    font-size: 22pt;
`

const renderImagesTopRow = () => {
    return Object.entries(galleryImages).map((entry, index) => {
        if(index <= 3) {
            return <GalleryImage imageSrc={entry[1]} imageTitle={entry[0]} />
        } else return
    })
}

const renderImagesBottomRow = () => {
    return Object.entries(galleryImages).map((entry, index) => {
        if(index > 3) {
            return <GalleryImage imageSrc={entry[1]} imageTitle={entry[0]} />
        } else {return}
    })
}

const Gallery = () => {
    useEffect(() => {
        let isDown = false;
        let startX;
        let scrollLeft;

        const slider = document.getElementById('wrapper');

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
        });
    }, [])

    return(
        <GallerySection>
            <GalleryTitle>Places You Can't Miss</GalleryTitle>
            <GalleryWrapper id="wrapper" onMouseDown>
                <GalleryImageWrapper>
                    {renderImagesTopRow()}
                </GalleryImageWrapper>
                <GalleryImageWrapper>
                    {renderImagesBottomRow()}
                </GalleryImageWrapper>
            </GalleryWrapper>
        </GallerySection>
    )
}

export default Gallery;