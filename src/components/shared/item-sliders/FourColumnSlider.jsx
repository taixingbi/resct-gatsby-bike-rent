import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Button } from '@material-ui/core';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCaretDown,
} from 'react-icons/fa';
import variables from '../../../theme/variables';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.bgcolor || 'transparent'};
  display: flex;
  justify-content: center;
`;
const SliderWrapper = styled(Carousel)`
  height: 100%;
`;
const SliderTitle = styled.h3`
  padding-top: 1rem;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${props => props.titleColor || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    margin-left: 1rem;
  }
  @media(max-width: 750px) {
    font-size: 3.5rem;
  }
`;
const SliderButton = styled(Button)`
  padding: unset !important;
  background-color: ${variables.color.darkGray} !important;
  height: 6rem;
  color: white !important;
  font-size: 2rem !important;
  border-radius: 0 !important;

  @media (max-width: 750px) {
    height: 4rem;
    min-width: 5rem !important;
  }
`;

const LeftArrow = () => (
  <SliderButton size="large">
    <FaChevronLeft />
  </SliderButton>
);
const RightArrow = () => (
  <SliderButton size="large">
    <FaChevronRight />
  </SliderButton>
);

const FourColumnSlider = ({
  bgColor,
  title,
  sliderItems,
  children,
  titleColor,
  showPointer,
}) => {
  let sliderTitle = null;

  if (title) {
    sliderTitle = (
      <SliderTitle
        titleColor={titleColor}
        className="cell medium-2"
      >
        {title}
        {showPointer ? <FaCaretDown /> : null}
      </SliderTitle>
    );
  }

  return (
    <Wrapper
      id="four-slider"
      bgcolor={bgColor}
      className="cell auto grid-y"
    >
      {sliderTitle}
      <SliderWrapper
        className="cell medium-10"
        slidesPerPage={sliderItems}
        arrows
        infinite
        arrowLeft={<LeftArrow />}
        arrowRight={<RightArrow />}
        addArrowClickHandler
      >
        { children }
      </SliderWrapper>
    </Wrapper>
  );
};

FourColumnSlider.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  sliderItems: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  titleColor: PropTypes.string,
  showPointer: PropTypes.bool,
};
FourColumnSlider.defaultProps = {
  bgColor: 'white',
  title: null,
  titleColor: null,
  showPointer: false,
};

export default FourColumnSlider;
