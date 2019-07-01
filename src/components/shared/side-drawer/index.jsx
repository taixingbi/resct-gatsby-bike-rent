import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Drawer } from '@material-ui/core';
import {
  SideBarWrapper,
  ListWrapper,
  ListItem,
  ListDivider,
  CustomerServiceWrapper,
  CustomerServiceLabel,
  CustomerServiceContent,
  CustomerServicePhoneIcon,
} from './side-drawer-styled';
import { Store } from '../../../App';

const SideBar = ({ desktopView }) => {
  const { state, actions } = useContext(Store);

  return (
    <Drawer
      anchor="right"
      open={state.isSidebarOpen}
      onClose={() => actions.setSideBarState(false)}
    >
      <SideBarWrapper
        desktopView={desktopView}
        tabIndex={0}
        role="button"
        onClick={() => actions.setSideBarState(false)}
        onKeyDown={() => actions.setSideBarState(false)}
      >
        <ListWrapper className="grid-y grid-padding-y">
          <ListItem
            onClick={() => navigate('/')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            Home
          </ListItem>
          <ListDivider />
          <ListItem
            onClick={() => navigate('/bike-rental')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            Bike Rentals
          </ListItem>
          <ListDivider />
          <ListItem
            onClick={() => navigate('/guided-tours')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            Guided Tours
          </ListItem>
          <ListDivider />
          <ListItem
            onClick={() => navigate('/special-offers')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            Special Offers
          </ListItem>
          <ListDivider />
          <ListItem
            onClick={() => navigate('/about')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            About
          </ListItem>
          <ListDivider />
          <ListItem
            onClick={() => navigate('/about/faq')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            Faq
          </ListItem>
          <ListDivider />
          <ListItem
            onClick={() => navigate('/about/location')}
            className={desktopView ? 'cell' : 'cell auto'}
          >
            Location
          </ListItem>
          <ListDivider />
          <CustomerServiceWrapper>
            <CustomerServiceLabel>
              Customer Service
            </CustomerServiceLabel>
            <CustomerServiceContent>
              <CustomerServicePhoneIcon />
              (212) 541 - 8759
            </CustomerServiceContent>
          </CustomerServiceWrapper>
          <ListDivider />
        </ListWrapper>
      </SideBarWrapper>
    </Drawer>
  );
};

SideBar.propTypes = {
  desktopView: PropTypes.bool,
};
SideBar.defaultProps = {
  desktopView: false,
};

export default SideBar;
