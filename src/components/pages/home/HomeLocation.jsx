import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaCaretRight,
} from 'react-icons/fa';
import { Button } from '@material-ui/core';
import variables from '../../../theme/variables';

const Wrapper = styled.div`
  height: 25rem;
  background-color: ${variables.color.darkGray};
`;
const ContentWrapperCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const MapContentWrapper = styled.div`
  padding: 0 2.5rem;
  align-items: flex-start;
  justify-content: center;
`;
const MapLabel = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;
const MapDescription = styled.p`
  font-size: 1.2rem;
`;
const MapPinIcon = styled(FaMapMarkerAlt)`
  font-size: 13rem;
  color: ${variables.color.green};
`;
const MapLocationButton = styled(Button)`
  color: white !important;
  border-color: white !important;
  border-radius: 0 !important;
  font-size: 1.5rem !important;
  
  svg {
    font-size: 1.4rem !important;
  }
`;

const HomeLocation = ({ locationData }) => (
  <Wrapper className="grid-x grid-padding-x">
    <ContentWrapperCenter className="cell medium-4 small-12 grid-y">
      <MapContentWrapper className="cell auto grid-y">
        <MapLabel className="cell">
          { locationData.title }
        </MapLabel>
        <MapDescription className="cell">
          { locationData.description }
        </MapDescription>
      </MapContentWrapper>
    </ContentWrapperCenter>
    <ContentWrapperCenter className="cell medium-4 hide-for-small-only grid-y">
      <MapPinIcon />
    </ContentWrapperCenter>
    <ContentWrapperCenter className="cell medium-4 small-12 grid-y">
      <MapLocationButton onClick={() => navigate('/about/location/')} variant="outlined">
        <FaCaretRight />
            Location
      </MapLocationButton>
    </ContentWrapperCenter>
  </Wrapper>
);

HomeLocation.propTypes = {
  locationData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default HomeLocation;
