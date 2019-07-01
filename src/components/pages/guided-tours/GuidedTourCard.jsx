import React from 'react';
import styled from 'styled-components';
import {
  Button,
} from '@material-ui/core';

const Wrapper = styled.div`
  height: 100%;
  background: url('${props => props.imgBg}') no-repeat center bottom; 
  background-size: cover;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    padding: 2rem;
  }
`;
const Title = styled.h2`
  color: white;
  font-size: 3.4rem;
  font-weight: bold;
  text-transform: uppercase;
`;
const Subtitle = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
`;
const BookNow = styled(Button)`
  border-radius: 0 !important;
  color: white !important;
  border-color: white !important;
  font-weight: bold !important;
  font-size: 1.4rem !important;
  margin-top: 2rem !important;
`;

const GuidedTourCard = ({ content }) => (
  <Wrapper
    imgBg={content.image}
    className="grid-y"
  >
    <Title className="cell">
      { content.title }
    </Title>
    <Subtitle className="cell">
      { content.subtitle }
    </Subtitle>
    <BookNow
      className="cell"
      variant="outlined"
      href={content.peekUrl}
    >
        Book now
    </BookNow>
  </Wrapper>
);

export default GuidedTourCard;
