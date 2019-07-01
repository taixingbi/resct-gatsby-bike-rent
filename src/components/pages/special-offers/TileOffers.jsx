import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  FaCaretRight,
} from 'react-icons/fa';
import variables from '../../../theme/variables';

const padding = 'padding: 0.5rem';

const Wrapper = styled.div`
  height: 100%;
`;
const ColumnOne = styled.div`
  min-height: 30rem;
  height: 100%;
  
  @media (max-width: 750px) {
    min-height: 70rem;

    .item-1 {
      background-position: right center !important;
    }
  }
`;
const ColumnTwo = styled.div`
  min-height: 25rem;
  height: 100%;

  .item-4 {
    background-position: left center !important;
  }
  .item-5 {
    background-position: left !important;
  }
  @media (max-width: 750px) {
    min-height: 70rem;
  }
`;
const Item = styled.div`
  background: url(${props => props.bgImage}) no-repeat center center;
  background-size: cover;
`;
const ItemH3 = styled.h3`
  line-height: 1;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: condensed;
  text-align: center;
  color: #17263b;
  text-transform: uppercase;
  span {
    font-weight: normal;
    margin: 0 0.5rem;
  }
  @media (max-width: 750px) {
    font-size: 2.1rem;
  }
`;
const ItemPointer = styled.a`
  all: unset;
  cursor: pointer;
  color: ${props => props.color || '#17263b'};
  font-size: ${props => props.fontSize || '1.2rem'};
  ${props => (props.bold ? css`font-weight: bold` : null)};
  text-transform: uppercase;
  
  svg {
    font-size: 1rem;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 750px) {
    font-size: 1.3rem;
    
    svg {
      font-size: 0.8rem;
    }
  }
`;
const Item1TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Item2LogoWrapper = styled.div`
  position: relative;
  justify-content: center;
  padding-left: 4rem;
  
  .subtitle__logo-wrapper {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    span {
      margin-left: 0.4rem;
    }
  }
  
  @media (max-width: 750px) {
    padding: 1rem;
    img {
      width: 10rem;
    }
    .subtitle__logo-wrapper {
      font-size: 1rem;
    }
  }
`;
const Item2ContentWrapper = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  ${padding};
  font-size: 3rem;
  color: #575759;
  font-weight: bold;

  .red-post {
    width: 15rem;
    height: 4.5rem;
    background-color: rgb(231, 69, 60);
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -1rem;
    font-size: 1.4rem;
    right: 2rem;

    span {
      font-weight: bold;
    }
    .hook {
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0;
      left: -1.5rem;
      background-color: rgb(168, 53, 47);
      clip-path: polygon(0 100%, 100% 0, 100% 100%);
    }

    @media (max-width: 750px) {
      display: none;
    }
  }
  span {
    margin: 0 0.5rem;
    font-weight: 300;
  }

  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;
const Item3LogosWrapper = styled.div`
  justify-content: center;
  align-items: center;
  
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: 750px) {
    img {
      width: 5rem;
    }
  }
`;
const Item3LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${padding};
`;
const Item4LogoWrapper = styled.div`
  padding-left: 2rem;
  display: flex;
  align-items: center;
`;
const Item4LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item4LinksWrapper = styled.div`
  background-color: rgba(234,67,53,0.5);
  width: 100%;
  height: 3rem;
  align-items: center;
  ${padding};
  color: #ffffff;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  
  @media (max-width: 750px) {
    height: 6.5rem;
  }
`;
const ItemPointerMiniVer = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 0.4rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const Item4PlusContent = styled.div`
  span {
    font-weight: 300;
    margin-right: 0.5rem;
  }
`;
const Item5ContentWrapper = styled.div`
  ${padding};
  justify-content: center;
  align-items: center;
`;
const Item5ContentItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
`;
const Item5ContentItemPlus = styled.div`
  font-size: 1.8rem;
  font-weight: 100;
  color: #003676;
`;
const Item5Link = styled.a`
  all: unset;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #003676;
  font-weight: bold;
  
  svg {
    font-size: 0.7rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const Item6Wrapper = styled(Item)`
  justify-content: center;
  align-items: center;
`;
const Item6Title = styled.h3`
  line-height: 1;
  font-size: 2.1rem;
  font-weight: bold;
  font-stretch: condensed;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: normal;
    margin: 0 0.5rem;
  }
  
  @media (max-width: 750px) {
    font-size: 1.6rem;
  }
`;
const Item6Img = styled.img`
  margin-top: 2rem;
  height: 5rem;
  width: 5rem;
`;

const TileOffers = ({ bgImages, logoImages, images }) => {
  const tile1 = images.circleLineCruise;
  const tile6 = bgImages[1];
  const tile3 = images.tripleCombo;
  const tile2 = bgImages[3];
  const tile4 = images.metMuseum;
  const tile5 = images.intrepid;
  const circleLineLogo = logoImages[0];
  const momaLogo = logoImages[3];

  const metAndMomaAndCentralParkComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/ZrZ1l';
  const momaAndCircleLineAndMetComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/dzVBz';
  const circleLineAndCentralParkComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/L8ej1';
  const circleLineAndBrooklynBridgeComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/mv6pz';
  const momaAndCentralParkComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/BYky0';
  const intrepidAndCentralParkComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/PMR4b';
  const intrepidAndAllDayBikeRentalComboPeekUrl = 'https://book.peek.com/s/02c56e74-2f9a-4b2f-9245-174c0deaca0e/3ExqL';

  return (
    <Wrapper>
      <ColumnOne className="grid-x">
        <Item
          className="cell medium-2 small-6 grid-y item-1"
          bgImage={tile1}
        >
          <Item1TitleWrapper className="cell medium-4 small-6">
            <ItemH3>
              Bikes
              <span>
                &
              </span>
              cruises
            </ItemH3>
            <ItemPointer href={circleLineAndBrooklynBridgeComboPeekUrl}>
              <FaCaretRight />
              brooklyn bridge bike tour
            </ItemPointer>
          </Item1TitleWrapper>
        </Item>
        <Item
          className="cell medium-7 small-6 grid-y"
          bgImage={tile2}
        >
          <Item2LogoWrapper className="cell medium-8 small-8 grid-y">
            <div className="cell">
              <img
                src={momaLogo}
                alt="moma-logo"
              />
            </div>
            <div className="cell subtitle__logo-wrapper">
                +
              <span>
                  central park bike tour
              </span>
            </div>
            <ItemPointer
              color={variables.color.red}
              fontSize="1.3rem"
              bold
            >
              <FaCaretRight href={momaAndCentralParkComboPeekUrl} />
              Combo Ticket
            </ItemPointer>
          </Item2LogoWrapper>
          <Item2ContentWrapper className="cell medium-4 small-4">
            <div className="red-post">
              <span className="hook" />
              Save up to
              <span>
                30%
              </span>
            </div>
            COMBOS
            <span>
              &
            </span>
            DEALS
          </Item2ContentWrapper>
        </Item>
        <Item
          className="cell medium-3 small-12 grid-x item-3"
          bgImage={tile3}
        >
          <Item3LogosWrapper className="cell medium-5 small-12 grid-y" />
          <Item3LinkWrapper className="cell medium-7 small-12">
            <ItemPointer
              href={momaAndCircleLineAndMetComboPeekUrl}
              bold
              fontSize="1.2rem"
            >
              <FaCaretRight />
              Triple Combo
            </ItemPointer>
          </Item3LinkWrapper>
        </Item>
      </ColumnOne>
      <ColumnTwo className="cell medium-5 small-6 grid-x">
        <Item
          className="cell medium-3 small-12 grid-y item-4"
          bgImage={tile4}
        >
          <Item4LogoWrapper className="cell medium-6 small-6" />
          <Item4LinksContainer className="cell medium-6 small-6">
            <Item4LinksWrapper className="cell grid-x">
              <Item4PlusContent className="cell medium-6">
                <span>
                  +
                </span>
                central park bike tour
              </Item4PlusContent>
              <ItemPointerMiniVer
                href={momaAndCentralParkComboPeekUrl}
                className="cell medium-6"
              >
                <FaCaretRight />
                TRIPLE COMBO
              </ItemPointerMiniVer>
            </Item4LinksWrapper>
          </Item4LinksContainer>
        </Item>
        <Item
          className="cell medium-7 small-12 grid-x item-5"
          bgImage={tile5}
        >
          <Item5ContentWrapper className="cell medium-6 grid-y">
            <Item5ContentItemWrapper className="cell">
              <Item5ContentItemPlus>
                +
              </Item5ContentItemPlus>
            </Item5ContentItemWrapper>
            <Item5ContentItemWrapper className="cell grid-y">
              <Item5Link href={intrepidAndAllDayBikeRentalComboPeekUrl}>
                <FaCaretRight />
                all day bike rental
              </Item5Link>
              <Item5Link href={intrepidAndCentralParkComboPeekUrl}>
                <FaCaretRight />
                central park bike tour
              </Item5Link>
            </Item5ContentItemWrapper>
          </Item5ContentWrapper>
        </Item>
        <Item6Wrapper
          className="cell medium-2 small-12 grid-y"
          bgImage={tile6}
        >
          <Item6Title className="cell">
              Bikes
            <span>
                &
            </span>
              cruises
          </Item6Title>
          <ItemPointer
            href={circleLineAndCentralParkComboPeekUrl}
            className="cell"
            color="white"
          >
            <FaCaretRight />
            central park bike tour
          </ItemPointer>
          <Item6Img
            src={circleLineLogo}
            alt="circle-line-logo"
          />
        </Item6Wrapper>
      </ColumnTwo>
    </Wrapper>
  );
};

TileOffers.propTypes = {
  bgImages: PropTypes.array.isRequired,
  logoImages: PropTypes.array.isRequired,
  images: PropTypes.object,
};
TileOffers.defaultProps = {
  images: {},
};

export default TileOffers;
