import React from 'react';

/* const section = styled.section`
  width: 100vw;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 25px 0;
`;

const FooterTopInfo = styled.div`
  display: flex;
  width: 100vw;
`;

const div = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b6d75;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    width: 100%;
    height: 0;
    background-color: #3f853b;
    border-radius: 50%;
  }

  &:hover::after {
    height: 100%;
  }
`;

const div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin-right: 5px;
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  font-size: 10pt;
  color: #3dc050;
  margin-top: 5px;
`;

const div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const p = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
  }
`;

const p = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 10pt;
  color: #fcfcfc;
`;

const title = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-size: 10pt;
  color: #3dc050;
  text-align: center;
  margin: 0;
  font-weight: 200;
`;

const div = styled.div`
  display: flex;
  flex-direction: column;
`; */

/* const PrivacyPolicyBtn = styled(Link)`
    width: 220px;
    font-family: 'Raleway', sans-serif;
    padding: 0;
    font-size: 10pt;
    text-align: center;
    color: #fcfcfc;
    text-decoration: none;
    &:hover {
        color: #3dc050;
        background-color: #333;
    }
` */

/* const div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`; */

/* const p = styled.a`
  font-family: 'Raleway', sans-serif;
  font-size: 8pt;
  color: #fcfcfc;
  text-decoration: none;

  @media (max-width: 767px) {
    margin-left: 5px;
    text-align: center;
  }
`;

const Separator = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #dde4e4;
  margin: 20px 0px;
`;

const ComplaintBook = styled.div`
  background: url('../images/icon_livro_reclamacoes.png');
  width: 100px;
  height: 44px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: url('../images/icon_livro_reclamacoes_on.png');
    width: 100px;
    height: 44px;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
`; */

const Footer = () => {
  /* const onClickFb = () => {
        ReactGa.event({
            category:'FB button',
            action: 'FB button clicked'
        })

        window.open('https://www.facebook.com/sintrawelcomecentre')
    }

    const onClickIG = () => {
        ReactGa.event({
            category:'IG button',
            action: 'IG button clicked'
        })

        window.open('https://www.instagram.com/sintrawelcomecentre/')
    }

    const onClickTP = () => {
        ReactGa.event({
            category:'TP button',
            action: 'TripAdvisor button clicked'
        })

        window.open('https://www.tripadvisor.co.uk/Attraction_Review-g189164-d16935621-Reviews-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portuga.html')
    }

    const onClickWhatsapp = () => {
        ReactGa.event({
            category:'Whatsapp button',
            action: 'Whatsapp button clicked'
        })

        window.open('https://api.whatsapp.com/send?phone=351932086001')
    }

    const mouseOver = (element) => {
        element.setAttribute('src', '')
    } */

  return (
    <section>
      <div>
        <div>
          <title>Loja Centro Histórico</title>
          <p>
            {/* <AiFillPhone
              style={{
                width: '20px',
                height: '20px',
                color: '#3dc050',
                marginRight: '5px'
              }}
            /> */}
            <p style={{ marginRight: '15px' }}>
              +351 210 521 283
              <span style={{ color: '#3dc050', fontSize: '12pt' }}>&#42;</span>
            </p>
            {/* <BsHouseDoorFill
              style={{
                width: '20px',
                height: '20px',
                color: '#3dc050',
                marginRight: '5px'
              }}
            /> */}
            <p>Rua Visconde de Monserrate, Loja 40, 2710-591 Sintra</p>
          </p>
          <title>Renting Hub Portela Sintra</title>
          <p>
            {/* <AiFillPhone
              style={{
                width: '20px',
                height: '20px',
                color: '#3dc050',
                marginRight: '5px'
              }}
            /> */}
            <p style={{ marginRight: '15px' }}>
              +351 210 521 280
              <span style={{ color: '#3dc050', fontSize: '12pt' }}>&#42;</span>
            </p>
            {/* <BsHouseDoorFill
              style={{
                width: '20px',
                height: '20px',
                color: '#3dc050',
                marginRight: '5px'
              }}
            /> */}
            <p>
              Av. Dr. Álvaro de Vasconcelos,4B, Portela de Sintra, 2710-420
              Sintra
            </p>
          </p>
        </div>
      </div>
      <div>
        <span style={{ fontSize: '12pt' }}>&#42;</span>
        {/* {footerTranslationText[language].disclaimer} */}
      </div>
      <div>
        <p
          className="divText"
          style={{ color: '#3fda45', fontFamily: '"Raleway", sans-serif' }}
        >
          Sintra Welcome Centre
          <span
            style={{
              color: '#fcfcfc',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '9pt',
              marginLeft: '5px'
            }}
          >
            {'\u00A9'}2021
          </span>
        </p>
      </div>
      <div>
        <a href="https://meetjorge.netlify.app/#/">Developed by JG</a>
        {/* <PrivacyPolicyBtn to={'/privacypolicy'}>
          {titles[language].privacyPolicy}
        </PrivacyPolicyBtn> */}
        <p onClick={() => window.open('https://www.livroreclamacoes.pt')} />
      </div>
      <hr />
      <div>
        <div>
          {/* <FaFacebook
            onClick={onClickFb}
            style={{
              width: '15px',
              height: '15px',
              color: '#fcfcfc',
              zIndex: 10
            }}
          /> */}
        </div>
        <div /* onClick={onClickIG} */ style={{ marginLeft: '15px' }}>
          {/* <FaInstagram
            style={{
              width: '15px',
              height: '15px',
              color: '#fcfcfc',
              zIndex: 10
            }}
          /> */}
        </div>
        <div /* onClick={onClickTP} */ style={{ marginLeft: '15px' }}>
          {/* <FaTripadvisor
            style={{
              width: '15px',
              height: '15px',
              color: '#fcfcfc',
              zIndex: 10
            }}
          /> */}
        </div>
        <div /* onClick={onClickWhatsapp} */ style={{ marginLeft: '15px' }}>
          {/* <IoLogoWhatsapp
            style={{
              width: '15px',
              height: '15px',
              color: '#fcfcfc',
              zIndex: 10
            }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
