import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Navbar from '../../shared/navigation';
import App, { Store } from '../../../App';
import {
  Wrapper,
  RentalHeader,
  RentalHeaderTitle,
} from './rental-styled';
import BgImg1 from '../../../images/temporary/boxed-water-is-better-1464021-unsplash.jpg';
import SideBar from '../../shared/side-drawer';
import SecondaryNavbar from '../../shared/secondary-navbar';
import Footer from '../../shared/footer';

const showSecondaryNavbar = (hasSecondaryNavbar, menuItems, breadcrumbsItems) => {
  if (hasSecondaryNavbar) {
    return (
      <SecondaryNavbar
        menuItems={menuItems}
        breadcrumbsItems={breadcrumbsItems}
      />
    );
  }
  return null;
};

const RentalLayout = ({
  children,
  pageTitle,
  menuItems,
  breadcrumbsItems,
  hasSecondaryNavbar,
  footerData,
}) => {
  const { state } = useContext(Store);
  const [fixedMobileMenu, setFixedMobileMenu] = useState(false);
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
    // Set Fixed Mobile Menu
    if (window.innerWidth < 750) {
      setFixedMobileMenu(true);
    }
  }, []);

  return (
    <App>
      <Wrapper className="grid-y medium-grid">
        <Navbar
          className="cell"
          position={fixedMobileMenu ? 'fixed' : 'static'}
          totalBikes={_.sum(allBikeState)}
        />
        <RentalHeader
          bgImage={BgImg1}
          className="cell"
        >
          <RentalHeaderTitle>
            { pageTitle }
          </RentalHeaderTitle>
        </RentalHeader>
        { showSecondaryNavbar(hasSecondaryNavbar, menuItems, breadcrumbsItems) }
        <main className="cell auto grid-y">
          { children }
        </main>
        <SideBar desktopView={!fixedMobileMenu} />
        <Footer socialMediaData={footerData.socialMedia} />
      </Wrapper>
    </App>
  );
};

RentalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  hasSecondaryNavbar: PropTypes.bool,
  menuItems: PropTypes.object,
  breadcrumbsItems: PropTypes.object,
  footerData: PropTypes.object,
};
RentalLayout.defaultProps = {
  menuItems: {},
  breadcrumbsItems: {},
  footerData: {},
  hasSecondaryNavbar: false,
};

export default RentalLayout;
