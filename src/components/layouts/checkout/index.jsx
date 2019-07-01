import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import Navbar from '../../shared/navigation';
import SideBar from '../../shared/side-drawer';
import CheckoutStepIdentification from '../../pages/checkout/CheckoutStepIdentification';
import App, { Store } from '../../../App';
import Footer from '../../pages/checkout/CheckoutFooter';
import variables from '../../../theme/variables';

const MainContentWrapper = styled.main`
  position: relative;
  padding-top: ${props => props.defaultPaddingTop || 'unset'};
  padding-bottom: ${props => props.defaultPaddingBottom || 'unset'};
  padding-right: 3rem;
  padding-left: 3rem;
`;

const SuccessWrapper = styled.div`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${variables.color.green};
  text-transform: capitalize;
`;

const successMsg = (location) => {
  if (location === '/checkout/summary') {
    return (
      <SuccessWrapper>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
          Thanks for booking with us! We've emailed you this confirmation and a receipt.
      </SuccessWrapper>
    );
  }
  return null;
};

const DefaultLayout = ({ children, location }) => {
  const { state, actions } = useContext(Store);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
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
    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#fixed-footer');
    setNavbarHeight(navbar.clientHeight);
    setFooterHeight(footer.clientHeight);
  }, []);

  return (
    <App>
      <div className="grid-y">
        <Navbar
          className="cell"
          position="fixed"
          totalBikes={_.sum(allBikeState)}
        />
        <MainContentWrapper
          className="cell auto grid-y"
          defaultPaddingTop={`${navbarHeight + 50}px`}
          defaultPaddingBottom={`${footerHeight}px`}
        >
          <CheckoutStepIdentification location={location} />
          { successMsg(location) }
          { children }
        </MainContentWrapper>
        <Footer
          location={location}
          globalState={state}
          globalActions={actions}
        />
      </div>
      <SideBar />
    </App>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any.isRequired,
};

export default DefaultLayout;
