import React, { useContext, useState, useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../../shared/navigation';
import SideBar from '../../shared/side-drawer';
import App, { Store } from '../../../App';
import Footer from '../../shared/footer';

const MainContentWrapper = styled.main`
  padding-top: ${props => props.defaultPaddingTop || 'unset'};
`;

const DefaultLayout = ({ children, footerData }) => {
  const { state } = useContext(Store);
  const [navbarHeight, setNavbarHeight] = useState(0);
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

  useEffect(() => {
    const { clientHeight } = document.querySelector('#navbar');
    setNavbarHeight(clientHeight);
  }, []);

  return (
    <App className="grid-y">
      <Navbar
        className="cell"
        position="fixed"
        totalBikes={_.sum(allBikeState)}
      />
      <MainContentWrapper
        className="cell auto grid-y"
        defaultPaddingTop={`${navbarHeight}px`}
      >
        { children }
      </MainContentWrapper>
      <SideBar />
      <Footer socialMediaData={footerData.socialMedia} />
    </App>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
