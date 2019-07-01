import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const CheckoutLabel = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: lighter;
`;

const CheckoutGrid = ({ title, children }) => (
  <Wrapper className="grid-y">
    <CheckoutLabel className="cell">
      { title }
    </CheckoutLabel>
    <div className="cell auto grid-x grid-padding-y">
      { children }
    </div>
  </Wrapper>
);

CheckoutGrid.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CheckoutGrid;
