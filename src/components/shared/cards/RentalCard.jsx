import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import variables from '../../../theme/variables';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;
const RentalImage = styled.img`
  height: 100%;

  @media(max-width: 750px) {
    height: auto;
  }
`;
const RentalContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${variables.color.darkGray};
  font-size: ${variables.typo.md};
  text-transform: uppercase;
`;
const RentalContentPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${variables.color.darkGray};
  font-size: ${variables.typo.md};
  font-weight: bold;
  text-transform: uppercase;
`;
const RentalImageWrapper = styled.a`
  all: unset;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RentalButton = styled.div`
  position: absolute !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 !important;
  padding: 0.5rem 0 !important;
  z-index: 2;
  min-width: 3rem !important;
  bottom: 0;
  right: 0;
  background-color: ${variables.color.darkGreen} !important;
  color: white !important;
  font-size: 1.5rem !important;

  @media (max-width: 750px) {
    min-width: 5rem !important;
    padding: 1rem 0 !important;
  }
`;

const RentalCard = ({
  imageUrl, title, price, url,
}) => (
  <Wrapper className="grid-y">
    <RentalImageWrapper
      onClick={url}
      className="cell medium-10"
    >
      <RentalImage
        src={imageUrl}
        alt="img-adult"
      />
      <RentalButton>
        <FaPlus />
      </RentalButton>
    </RentalImageWrapper>
    <div className="cell medium-2 grid-x grid-padding-x">
      <RentalContentTitle className="cell medium-6 small-6">
        { title }
      </RentalContentTitle>
      <RentalContentPrice className="cell medium-6 small-6">
        { price }
      </RentalContentPrice>
    </div>
  </Wrapper>
);

RentalCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.func,
};
RentalCard.defaultProps = {
  url: null,
};

export default RentalCard;
