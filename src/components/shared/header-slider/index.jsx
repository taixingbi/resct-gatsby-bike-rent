import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
// STYLESHEETS ASSETS
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselWrapper = styled.div`
  position: relative;
`;
const CarouselItem = styled.img`
  z-index: 1;
  height: 55rem;
  width: 100%;
  object-fit: cover;
  object-position: 0 70%;
  @media (max-width: 750px) {
    height: 38rem;
  }
`;
const AbsoluteLeftArrow = styled(FaChevronLeft)`
  cursor: pointer;
  z-index: 2;
  font-size: 4rem;
  color: white;
  position: absolute;
  top: 50%;
`;
const AbsoluteRightArrow = styled(FaChevronRight)`
  cursor: pointer;
  z-index: 2;
  font-size: 4rem;
  color: white;
  position: absolute;
  top: 50%;
  right: 0;
`;

const HeaderSlider = ({ images }) => {
  const [slideItem, setSlideItem] = useState(0);

  const changeSliderItemForward = () => {
    setSlideItem(slideItem - 1);
  };
  const changeSliderItemBackward = () => {
    setSlideItem(slideItem + 1);
  };

  return (
    <CarouselWrapper>
      <AbsoluteLeftArrow
        onClick={changeSliderItemForward}
      />
      <Carousel
        infinite
        value={slideItem}
        onChange={val => setSlideItem(val)}
      >
        { images.map(image => <CarouselItem src={image} key={image} />) }
      </Carousel>
      <AbsoluteRightArrow
        onClick={changeSliderItemBackward}
      />
    </CarouselWrapper>
  );
};

HeaderSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};
HeaderSlider.defaultProps = {
  images: [],
};

export default HeaderSlider;
