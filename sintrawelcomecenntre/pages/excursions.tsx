import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClockCircle, AiOutlineHome } from "react-icons/ai";
import { excursions } from "../utility/text/excursions";
import Footer from "../components/Footer";
import Link from "next/link";

import { modaltext } from "../utility/text/modaltext";
import { Language, isTypeOfLang } from "../utility/types/types";
import { useRouter } from "next/router";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProductsTitleWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  background-color: #333;
  margin-bottom: 20px;
  position: relative;
`;

const ProductsTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 18pt;
  text-align: center;
  color: #fcfcfc;
  margin: 0;
  padding: 20px 0;
`;

const WrapperOfProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ProductWrapperContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid #e1e0e0;
  justify-content: space-between;
`;
const ProductImage = styled.div<{ image: string }>`
  background-image: ${(props) => `url('${props.image}')`};
  background-size: cover;
  min-height: 300px;
  width: 100%;
  background-position: center;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conten: center;
  padding-left: 10px;
`;

const ProductTitle = styled.h4`
  font-family: "Raleway", sans-serif;
  font-size: 14pt;
  margin: 10px 0;
`;

const ProductDuration = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 11pt;
  margin: 5px 0 5px 5px;
`;

const ProductButton = styled.button``;

const IconProductCenterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 10px;
  padding-top: 20px;
  justify-content: space-between;
`;

const GoBackText = styled(Link)`
  font-family: Raleway, sans-serif;
  font-size: 10pt;
  color: #fcfcfc;
  margin: 0 0 0 5px;
  text-decoration: none;
`;
const DisclaimerWrapper = styled.div`
  width: 70%;
  background-color: #386e35;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin: 0 auto 20px auto;
`;
const Disclaimer = styled.h4`
  font-family: Raleway, sans-serif;
  font-size: 13pt;
  color: #fcfcfc;
  width: 80%;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 11pt;
  }
`;

export const convertMinutesToHours = (timeinMins: number | string) => {
  let returnTime: string = "";
  if (typeof timeinMins === "number") {
    let hours = timeinMins / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    returnTime = rminutes > 0 ? rhours + "h:" + rminutes + "min" : rhours + "h";
  } else {
    const arrayOfIntervals = timeinMins.split(" ");
    arrayOfIntervals.forEach((time) => {
      if (isNaN(parseInt(time))) {
        returnTime = returnTime + " " + time + " ";
      } else {
        let hours = parseInt(time) / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        let r = rminutes > 0 ? rhours + "h:" + rminutes + "min" : rhours + "h";
        returnTime = returnTime ? returnTime + r : "" + r;
      }
    });
  }

  return returnTime;
};

const renderProductsContent = (lang: Language) => {
  return excursions.map((tour) => {
    return (
      <>
        <ProductWrapperContainer>
          <ProductWrapper>
            <ProductImage image={tour.image} />
            <ProductInfoWrapper>
              <ProductTitle>{tour[lang].title}</ProductTitle>
              <IconProductCenterWrapper>
                <AiOutlineClockCircle />
                <ProductDuration>
                  {convertMinutesToHours(tour[lang].duration)}
                </ProductDuration>
              </IconProductCenterWrapper>
            </ProductInfoWrapper>
            <Link href={tour.path}>
              <ProductButton>{modaltext.general[lang].find}</ProductButton>
            </Link>
          </ProductWrapper>
        </ProductWrapperContainer>
      </>
    );
  });
};

const ExcursionsTours = () => {
  const router = useRouter();
  const lang = router.query.lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <ProductsTitleWrapper>
          <GoBackWrapper>
            <AiOutlineHome style={{ color: "#fcfcfc" }} />
            <GoBackText href="/">Go Back</GoBackText>
          </GoBackWrapper>
          <ProductsTitle>Excursions</ProductsTitle>
        </ProductsTitleWrapper>
        <DisclaimerWrapper>
          <Disclaimer>
            {modaltext.general[isTypeOfLang(lang) ? lang : "en"].disclaimer}
          </Disclaimer>
        </DisclaimerWrapper>
        <WrapperOfProducts>
          {renderProductsContent(isTypeOfLang(lang) ? lang : "en")}
        </WrapperOfProducts>
      </Section>
      <Footer
        {...(isTypeOfLang(lang) ? { language: lang } : { language: "en" })}
      />
    </>
  );
};

export default ExcursionsTours;
