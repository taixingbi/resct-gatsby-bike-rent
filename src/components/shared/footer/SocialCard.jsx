import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  border: solid 0.5px #8b8b8b;
  align-items: center;
  margin-bottom: 1.5rem;
  @media (max-width: 750px) {
    height: 3.5rem;
    margin-bottom: 1rem;
  }
`;
const IconWrapper = styled.div`
  height: 100%;
  background-color: #8b8b8b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  svg {
    color: #292929;
  }
`;
const ContentWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b8b8b;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SocialCard = ({ icon, content }) => (
  <Wrapper className="grid-x cell">
    <IconWrapper className="cell medium-2 small-4">
      { icon }
    </IconWrapper>
    <ContentWrapper className="cell medium-10 small-8">
      { content }
    </ContentWrapper>
  </Wrapper>
);

SocialCard.propTypes = {
  icon: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
};

export default SocialCard;
