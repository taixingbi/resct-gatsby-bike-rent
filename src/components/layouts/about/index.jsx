import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import App, { Store } from '../../../App';
import Navbar from '../../shared/navigation';
import Footer from '../../shared/footer';
import BgImg1 from '../../../images/temporary/boxed-water-is-better-1464021-unsplash.jpg';
import SideBar from '../../shared/side-drawer';

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;
const AboutHeader = styled.header`
  z-index: 1;
  position: relative;
  height: 30rem;
  background-image: url(${props => props.bgImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
const AboutHeaderTitle = styled.h1`
  font-size: 12rem;
  position: absolute;
  color: white;
  text-transform: uppercase;
  top: 8rem;
  
  @media (max-width: 750px) {
    margin: unset;
    font-size: 5rem;
    top: 24rem;
  }
`;
const FullHeightContentContainer = styled.main`
  min-height: 100vh;
`;

const AboutLayout = ({ children, pageTitle, footerData }) => {
  const { state } = useContext(Store);
  const allBikeState = [
    state.adultQnty,
    state.childQnty,
    state.tandemQnty,
    state.ebikeQnty,
    state.elliptigoQnty,
    state.eHandQnty,
    state.handQnty,
    state.snowQnty,
    state.mountainQnty,
    state.roadQnty,
  ];

  return (
    <App>
      <Wrapper className="grid-y">
        <Navbar
          className="cell"
          position="fixed"
          totalBikes={_.sum(allBikeState)}
        />
        <AboutHeader
          bgImage={BgImg1}
          className="cell"
        >
          <AboutHeaderTitle>
            { pageTitle }
          </AboutHeaderTitle>
        </AboutHeader>
        <FullHeightContentContainer className="cell">
          { children }
        </FullHeightContentContainer>
        <SideBar />
        <Footer socialMediaData={footerData.socialMedia} />
      </Wrapper>
    </App>
  );
};

export default AboutLayout;
