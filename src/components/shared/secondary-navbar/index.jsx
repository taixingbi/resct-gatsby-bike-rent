import React, { useState, useEffect, useContext } from 'react';
import { navigate } from 'gatsby';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  RentalSecondaryNavbarCartIcon,
  RentalSecondaryNavbarItem,
  RentalSecondaryNavbarMenuBarsIcon,
  RentalSecondaryNavbarMenuButton,
  RentalSecondaryNavbarMenuButtonWrapper,
  RentalSecondaryNavbarWrapper,
} from './secondary-navbar-styled';
import variables from '../../../theme/variables';
import RentalBreadcrumbs from '../rental-breadcrumbs';
import { Store } from '../../../App';

const SecondaryNavbar = ({ menuItems, breadcrumbsItems }) => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const { actions } = useContext(Store);

  useEffect(() => {
    const secondaryNav = document.querySelector('#secondary-navbar');

    // On scroll listener
    window.onscroll = () => {
      if (window.pageYOffset > secondaryNav.offsetTop) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const displayMenu = () => {
    if (fixedNavbar) {
      return (
        <RentalSecondaryNavbarMenuButton
          onClick={() => actions.setSideBarState(true)}
          bgcolor={variables.color.green}
        >
          <RentalSecondaryNavbarMenuBarsIcon />
            Menu
        </RentalSecondaryNavbarMenuButton>
      );
    }
    return null;
  };
  const displayCartButton = () => {
    if (fixedNavbar) {
      return (
        <RentalSecondaryNavbarItem
          href="https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/oE688"
          className="cell auto"
          fontSize={variables.typo.sm}
          fontcolor={variables.color.darkGreen}
        >
          <RentalSecondaryNavbarCartIcon />
        </RentalSecondaryNavbarItem>
      );
    }
    return null;
  };

  return (
    <RentalSecondaryNavbarWrapper
      id="secondary-navbar"
      className="grid-x grid-padding-x"
      container={variables.section.paddingLeftRight}
      fixedNavbar={fixedNavbar}
    >
      <RentalBreadcrumbs>
        {
          _.map(breadcrumbsItems, (value, key) => {
            const isActive = (key === 'Home')
              ? 'rental-breadcrumbs__not-active'
              : 'rental-breadcrumbs__active';

            return (
              <button
                className={isActive}
                key={value}
                type="button"
                onClick={() => navigate(value)}
              >
                {key}
              </button>
            );
          })
        }
      </RentalBreadcrumbs>
      <div className="cell medium-8 grid-x">
        { _.map(menuItems, (value, key) => (
          <RentalSecondaryNavbarItem
            key={value}
            href={value}
            className="cell auto"
            fontSize={variables.typo.sm}
            fontcolor={variables.color.darkGreen}
          >
            { key }
          </RentalSecondaryNavbarItem>
        ))}
        { displayCartButton() }
      </div>
      <RentalSecondaryNavbarMenuButtonWrapper
        className="cell medium-2"
        fixed-navbar={fixedNavbar.toString()}
        bgcolor={variables.color.green}
      >
        { displayMenu() }
      </RentalSecondaryNavbarMenuButtonWrapper>
    </RentalSecondaryNavbarWrapper>
  );
};

SecondaryNavbar.propTypes = {
  breadcrumbsItems: PropTypes.object.isRequired,
  menuItems: PropTypes.object.isRequired,
};

export default SecondaryNavbar;
