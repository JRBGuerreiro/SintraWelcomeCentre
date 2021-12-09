import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Image = styled.div`
    background-image: url("${props => props.imageSrc}");
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
`

const SwipperGalleryTukTuk = ({imageData}) => {


 const renderImages = () => {
    return imageData.map(image => {
        debugger
        return <>
            <Image imageSrc={image}/>
        </>
    })
 }
  return(
    <Carousel
      showThumbs={false}
      showArrows
      width={window.innerWidth < 800 ? "62%" : "37%"}
      showStatus={false}
    >
      {renderImages()}
      </Carousel>  
  )
}

export default SwipperGalleryTukTuk;