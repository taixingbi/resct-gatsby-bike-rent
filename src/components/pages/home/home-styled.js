import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import React from "react";

const paddingDefault = 'padding: 5rem 8rem';
const paddingWideScrn = 'padding: 5rem 20rem';

export const HeaderWrapper = styled.header`
  position: relative;
  min-height: ${props => props.minHeight || '100%'};
  width: 100%;
  overflow: hidden;
`;

export const HeaderNotificationWrapper = styled.div`
  position: absolute;
  z-index: 5;
  background-color: rgba(0,0,0,0.5);
  color: white;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.2rem;
    font-weight: normal;
    span {
      font-weight: bold;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) and (max-width: 980px) {
    height: 9rem;
  }
`;

export const HeaderPostCardWrapper = styled.div`
  position: relative;
  
  
  @media (max-width: 750px) {
    display: none;
  }
`;

export const HeaderPostCard = styled(Button)`
  position: absolute !important;
  background-color: #ea4335 !important;
  border-radius: 0 !important;
  z-index: 5;
  padding: 1.2rem 1.5rem !important;
  top: -1rem;
  right: 5rem;
  color: white !important;
  font-stretch: condensed !important;
  font-weight: 300 !important;
  font-size: 1.5rem !important;
  
  svg {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  
  .clipper {
    position: absolute;
    z-index: 5;
    width: 1rem;
    height: 1rem;
    background-color: #aa352b;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    top: 0;
    left: -1rem;
  }
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  margin: unset;
  z-index: 3;
  color: ${props => props.fontcolor || 'white'};
  font-size: ${props => props.headerFontSize || '9rem'};
  text-transform: uppercase;
  bottom: 2rem;
  
  span {
    font-weight: lighter;
  }

  @media (max-width: 750px) {
    font-size: 4.5rem;
    bottom: 7.8rem;
  }
  @media (min-width: 750px) and (max-width: 1130px) {
    font-size: 9rem;
    bottom: 5rem;
  }
`;

export const HeaderDivider = styled.div`
  z-index: 4;
  position: relative;
  height: 10rem;
  width: 100%;
  background-color: ${props => props.bgColor || 'black'};
  display: flex;
  justify-content: center;
  align-items: center;
  // FONT
  color: white;
  font-size: 2rem;
  text-transform: capitalize;
  
  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

export const WPImageCard = styled.div`
  background: url(${props => props.imageUrl}) no-repeat center bottom; 
  background-size: cover;
  max-height: 40rem;
  
  .wp__image-card {
    padding: 1rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;

    h2 {
      font-size: 3.5rem;
      font-weight: bold;
    }
    h4 {
      font-size: 2rem;
      font-weight: normal;  
    }
  }
`;

export const WPImageCardButton = styled(Button)`
  border-radius: 0 !important;
  color: white !important;
  border-color: white !important;
  font-weight: bold !important;
  font-size: 1.4rem !important;
  margin-top: 1rem !important;
`;

export const WPGuidedTourContentWrapper = styled.div`
  color: ${props => props.contentColor || 'black'};
  .wp__content {
    &-title {
      font-size: 2.1rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    &-description {
      text-align: justify;
      font-size: 1.6rem;
      margin-bottom: 4rem;
    }
    &-list {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      
      svg {
        color: ${props => props.color};
        margin-right: 1rem;
      }
    }
  }
`;

export const SectionButton = styled(Button)`
  border-radius: unset !important;
  font-size: ${props => props.fontSize} !important;
  color: ${props => props.fontcolor || 'black'} !important;
  border-color: ${props => props.fontcolor || 'black'} !important;
  background-color: ${props => props.bgcolor || 'white'} !important;
  text-transform: uppercase;
  font-weight: bold !important;
  height: 6rem;
  width: 100%;
  ${props => ((props.givemargintop === 'true') ? css`
    margin-top: 1rem !important;
  ` : null)};
  
  @media (max-width: 950px) {
    height: 5rem;
    font-size: 1.2rem !important;
  }
  
  svg {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
`;

export const SectionContainer = styled.div`
  height: 100%;
  padding: 5rem 8rem;
  overflow: hidden;
  @media (max-width: 750px) {
    padding: 1rem 4rem;
  }
`;

export const HomeWPBikeRentalContentColumnOneWrapper = styled.div`
  justify-content: center;
`;

export const HomeWPBikeRentalContentWrapper = styled.div`
  justify-content: center;
  margin-bottom: 2rem;
  h4 {
    text-transform: uppercase;
    color: ${props => props.textTitleColor || 'black'};
    font-size: ${props => props.titleSize || '2rem'};
    margin-bottom: 2rem;
  }
  p {
    color: ${props => props.textPColor || 'black'};
    font-size: ${props => props.textPSize || '1rem'};
    margin-bottom: 1rem;
  }
  .bold {
    font-weight: bold;
  }
`;

export const HomeBikeRentalBikeImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBikeRentalBikeImage = styled.img`
  position: absolute;
  right: -55rem;
  height: 100%;
  max-width: unset !important;

  @media (max-width: 750px) {
    height: 70%;
    right: -45rem;
  }
  @media (min-width: 751px) and (max-width: 849px) {
    height: 70%;
    right: -50rem;
  }
  @media (min-width: 850px) and (max-width: 1100px) {
    right: -65rem;
  }
`;

export const SpecialOffersContentWrapper = styled.div`
  justify-content: center;
  h2 {
    color: ${props => props.titleColor};
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.8rem;
  }
`;
