import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: ${props => props.height || 'unset'};
  width: 100%;
  overflow: hidden;
  background-color: ${props => props.bgColor || 'black'};

  // FONT STYLES
  color: white;
  font-size: ${props => props.fontSize || '15rem'};
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  span {
    opacity: 0.6;
  }
  
  @media (max-width: 750px) {
    font-size: 4.5rem;
  };
  @media (min-width: 750px) and (max-width: 1000px) {
    font-size: 7rem;
  }
`;

const SectionDivider = ({
  children, fullHeight, bgColor, fontSize,
}) => (
  <Wrapper
    fontSize={fontSize}
    height={fullHeight}
    bgColor={bgColor}
  >
    { children }
  </Wrapper>
);

SectionDivider.propTypes = {
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
};
SectionDivider.defaultProps = {
  fullHeight: 'unset',
  bgColor: 'black',
  fontSize: '15rem',
};

export default SectionDivider;
