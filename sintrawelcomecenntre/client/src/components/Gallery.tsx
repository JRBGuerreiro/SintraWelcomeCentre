import React from 'react';
import styled from 'styled-components';
import { galleryImages } from '../utility/images/galleryImages';
import SwipperGallery from './SwipperGallery';
import { partnersText } from "../utility/text/partnersText";
import { titles } from '../utility/text/titles';
import { Language } from '../utility/types/types';


const GallerySection = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #fcfcfc;
    position: relative;
    padding: 30px 0 30px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        padding: 10px 0 0 0;
    }
`

const GalleryWrapper = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
`

const GalleryImage = styled.div<{imageSrc: string, imageTitle: string}>`
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

    @media (max-width: 767px) {
        margin-bottom: 25px;
        text-align: center;
    }
`

const PartnerShipTitle = styled.h3`
    font-family: 'Raleway',sans-serif;
    color: #333;
    font-size: 18pt;
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
`

const PartnerShipImage = styled.div<{imageSrc:string}>`
    background-image: ${({imageSrc}) => `url('${imageSrc}')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 150px;
    height: 150px;
    margin: 0 15px;
    margin-top: 5px;
    background-color: white;

    @media (max-width: 767px) {
        width: 100px;
        height: 100px;
        margin: 10px 0;
    }
`

const PartnerShipWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 10px auto 30px auto;
    background-color: #dde4e4;
    padding: 20px 0;
    flex-wrap: wrap;
`

const PartnerShipContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    width: 100%;
    margin-top: 60px;
    padding-top: 10px;
`

const PartnerShipLink = styled.a`
    @media (max-width: 767px) {
        width: 50%;
        display: flex;
        justify-content: center;
    }
`

const partnersImagesArray = [
    ["./images/PartnerLogos/cascaisShopping.png", "https://www.cascaishopping.pt/en/home/"],
    ["./images/PartnerLogos/ADEGAfundobranco.jpg", "https://www.adegaviuvagomes.com"],
    ["./images/PartnerLogos/Logo_Freeport.jpg", "https://freeportfashionoutlet.pt"],
    ["./images/PartnerLogos/logotipo_penaaventura.png", "https://www.penaaventura.com.pt/"],
    ["./images/PartnerLogos/zoovertical.jpg", "https://www.zoo.pt/"],
    ["./images/PartnerLogos/piriquita_logo.png", "https://piriquita.pt/"],
    ["./images/PartnerLogos/centrohipico_logo.jpg", "https://www.centrohipicocostaestoril.com"],
    ["./images/PartnerLogos/furnas.png", "https://www.furnasdoguincho.pt/"],
    ["./images/PartnerLogos/DP_logo.png", "https://www.dinoparque.pt/"],
    ["./images/PartnerLogos/natapura.jpg", "#"],
    ["./images/PartnerLogos/mourisca.jpg", "#"],
    ["./images/PartnerLogos/bouldersintra.jpg", "https:/www.instagram.com/bouldersintra/"],
    ["./images/PartnerLogos/LogoSapa.jpg", "https://www.facebook.com/queijadasdasapa/"],
    ["./images/PartnerLogos/LogoBiester-01.png", "https://www.biester.pt"],
    ["./images/PartnerLogos/PenhaLonga.png", "https://www.penhalonga.com/"],
    ["./images/PartnerLogos/casa_do_prego.png", "https://www.tripadvisor.com/Restaurant_Review-g189164-d23959309-Reviews-Casa_Do_Prego_Vila_De_Sintra-Sintra_Sintra_Municipality_Lisbon_District_Central_.html"],
]

const isMobile = window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

const renderImages = () => {
    return Object.entries(galleryImages).map((entry) => {
        return <GalleryImage imageSrc={entry[1]} imageTitle={entry[0]} />
    })
}

type GalleryProps = { language: Language };

const Gallery = (props: GalleryProps) => {
    const partnerTitle = partnersText.map((text) => {
        return text[props.language].title
    })

    const partnerImages = partnersImagesArray.map((image) => {
        return <PartnerShipLink href={image[1]}><PartnerShipImage imageSrc={image[0]}/></PartnerShipLink>
    })
    return(
    
        <GallerySection id="places">
            <GalleryTitle>{titles[props.language].placesNoMiss}</GalleryTitle>
            {isMobile() ? (
                <SwipperGallery imageData={galleryImages}/>
            ) : (
            <GalleryWrapper id="wrapper"> 
                <GalleryImageWrapper>
                    {renderImages()}
                </GalleryImageWrapper>
            </GalleryWrapper>

            )}
            <PartnerShipContainer>
                <PartnerShipTitle>{partnerTitle}</PartnerShipTitle>
                <PartnerShipWrapper>
                    {partnerImages}
                </PartnerShipWrapper>
            </PartnerShipContainer>
        </GallerySection>
    )
}

export default Gallery;