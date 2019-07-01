import React, {
  useEffect, useState, useContext, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import _ from 'lodash';
import {
  FaBars,
  FaShoppingCart,
  FaCaretDown,
} from 'react-icons/fa';
import {
  NavbarWrapper,
  ToolbarWrapper,
  NavbarBrandLogo,
  NavbarItemsWrapper,
  NavbarItemDivider,
  NavbarItemButton,
  ShoppingCartIcon,
  PhoneIcon,
  NavbarPhoneItem,
  NavbarMobileItem,
  AboutItemWrapper,
  AboutListAnimationWrapper,
  AboutListWrapper,
  AboutListItem,
} from './navbar-styled';
import variables from '../../../theme/variables';
import logo from '../../../images/bikerentnyc.png';
import { Store } from '../../../App';

const AboutMenuItems = {
  Company: '/about/',
  // TODO: 'NYC Bike Law': '/about/bike-law/',
  FAQ: 'about/faq/',
  Location: '/about/location/',
};

const AboutMenu = (showAboutMenu, setAboutMenu) => (
  <AboutListAnimationWrapper
    pose={showAboutMenu ? 'visible' : 'hidden'}
  >
    <AboutListWrapper component="nav">
      { _.map(AboutMenuItems, (value, key) => (
        <AboutListItem
          key={value}
          onClick={() => {
            setAboutMenu(false);
            navigate(value);
          }}
          button
        >
          { key }
        </AboutListItem>
      ))}
    </AboutListWrapper>
  </AboutListAnimationWrapper>
);

const Navbar = ({ position, totalBikes }) => {
  const { actions } = useContext(Store);
  const [showAboutMenu, setAboutMenu] = useState(false);
  const [navbarBrandLogoHeight, setNavbarBrandHeight] = useState(0);
  const aboutButtonWrapper = useRef(null);

  useEffect(() => {
    const { clientHeight } = document.querySelector('#navbar-logo');
    setNavbarBrandHeight(clientHeight);

    const handleClick = (e) => {
      if (!aboutButtonWrapper.current.contains(e.target)) {
        setAboutMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <NavbarWrapper
      id="navbar"
      position={position}
      elevation={0}
    >
      <ToolbarWrapper>
        <NavbarMobileItem
          textsize={variables.typo.lg}
          textcolor={variables.color.green}
          href="https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/oE688"
        >
          <FaShoppingCart />
        </NavbarMobileItem>
        <NavbarBrandLogo
          id="navbar-logo"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="bike-rent-nyc-logo" />
        </NavbarBrandLogo>
        <NavbarItemsWrapper
          className="grid-x"
          dividerColor={variables.color.darkGreen}
        >
          <NavbarItemButton
            className="cell auto"
            size="large"
            textsize={variables.typo.sm}
            textcolor={variables.color.darkGreen}
            onClick={() => navigate('/bike-rental')}
          >
            Bike Rentals
          </NavbarItemButton>
          <NavbarItemDivider> | </NavbarItemDivider>
          <NavbarItemButton
            className="cell auto"
            size="large"
            textsize={variables.typo.sm}
            textcolor={variables.color.darkGreen}
            onClick={() => navigate('/guided-tours')}
          >
            Guided Tours
          </NavbarItemButton>
          <NavbarItemDivider> | </NavbarItemDivider>
          <NavbarItemButton
            className="cell auto"
            size="large"
            textsize={variables.typo.sm}
            textcolor={variables.color.darkGreen}
            onClick={() => navigate('/special-offers')}
          >
            Special Offers
          </NavbarItemButton>
          <NavbarItemDivider> | </NavbarItemDivider>
          <AboutItemWrapper
            className="cell auto"
            ref={aboutButtonWrapper}
          >
            <NavbarItemButton
              className="cell auto"
              size="large"
              onClick={() => setAboutMenu(prevState => !prevState)}
              textsize={variables.typo.sm}
              textcolor={variables.color.darkGreen}
            >
              About
              <FaCaretDown />
            </NavbarItemButton>
            { AboutMenu(showAboutMenu, setAboutMenu) }
          </AboutItemWrapper>
          <NavbarItemDivider> | </NavbarItemDivider>
          <NavbarItemButton
            size="large"
            textsize={variables.typo.sm}
            textcolor={variables.color.darkGreen}
            onClick={() => navigate('/checkout/bike-rental')}
          >
            <ShoppingCartIcon />
            <span className="nav-total-number">
              { totalBikes }
            </span>
          </NavbarItemButton>
        </NavbarItemsWrapper>
        <NavbarPhoneItem
          height={`${navbarBrandLogoHeight}px`}
          bgcolor={variables.color.green}
          textsize="1.3rem"
        >
          <PhoneIcon />
            (212) 541 - 8759
        </NavbarPhoneItem>
        <NavbarMobileItem
          onClick={() => actions.setSideBarState(true)}
          textsize={variables.typo.lg}
          textcolor={variables.color.green}
        >
          <FaBars />
        </NavbarMobileItem>
      </ToolbarWrapper>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Navbar;
