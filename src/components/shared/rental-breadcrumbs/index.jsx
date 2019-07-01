import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import variables from '../../../theme/variables';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  button {
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    color: ${variables.color.darkGreen};
    font-size: ${variables.typo.sm};
    margin-right: 0.4rem;
 
    &:hover {
      text-decoration: underline;
    }
    &::after {
      content: ' /';
    }
  }
  span {
    color: ${variables.color.darkGreen};
  }
  .rental-breadcrumbs__active {
    color: ${variables.color.green};
  }
`;

const RentalBreadcrumbs = ({ children }) => (
  <Wrapper className="cell medium-2">
    { children }
  </Wrapper>
);

RentalBreadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RentalBreadcrumbs;
