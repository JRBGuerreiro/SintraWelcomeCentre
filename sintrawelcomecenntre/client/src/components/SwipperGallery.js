import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Image = styled.div`
    background-image: url("${props => props.imageSrc}");
    height: 200px;
    background-size: cover;
`

const SwipperGallery = ({imageData}) => {
 const renderImages = () => {
    return Object.entries(imageData).map((entry) => {
        return <>
            <Image imageSrc={entry[1]}/>
            <p style={{background:'#4caf50', borderRadius:'0px', padding: '0px', top:'-12px', bottom: '162px'}} className="legend">{entry[0]}</p>
        </>
    })
 }
  return(
    <Carousel
      showThumbs={false}
      showArrows
      width={"90%"}
      showStatus={false}
    >
      {renderImages()}
      </Carousel>  
  )
}

export default SwipperGallery;