import styled, { css } from 'styled-components';

export const SectionLabel = styled.div`
  color: ${props => props.fontColor};
  text-transform: uppercase;
  font-size: ${props => props.fontSize};
  text-align: center;
  font-weight: bold;
  padding: 2rem 0;
  
  @media (max-width: 750px) {
    text-align: left;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  min-height: ${props => props.height || '35rem'};
  background-color: ${props => props.bgColor};
  border: ${props => props.borderProperty};
  margin: 3rem 0;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  img {
    height: 10rem;
  }
`;

export const CardPosted = styled.div`
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
  ${props => (props.left ? css`left: 3rem;` : null)}
  ${props => (props.right ? css`right: 10rem;` : null)}
  font-size: 1.4rem;
  
  span {
    font-weight: bold;
  }
  .hook {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0;
    left: -1rem;
    background-color: rgb(168, 53, 47);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
  }
  
  @media (max-width: 750px) {
    height: 3.5rem;
    ${props => (props.left ? css`left: 2rem;` : null)}
    ${props => (props.right ? css`right: 1rem;` : null)}}
`;

export const FitnessTitleWrapper = styled.div`
  margin: 2rem 0;
`;

export const FitnessLeftColumnWrapper = styled.div`
  img {
    position: absolute;
    bottom: 0;
    left: -2rem;
  }
  @media (max-width: 750px) {
    img {
      width: 17rem;
    }
  }
`;

export const FitnessRightColumnWrapper = styled.div`
  align-items: center;
  
  .elliptigo-title__wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    img{
      height: 2rem;
      width: auto;
    }
  }
  .elliptigo-paddle__img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  
  @media (max-width: 750px) {
    .elliptigo-title__wrapper {
      img{
        height: 1rem;
        width: auto;
      }
    }
    .elliptigo-paddle__img {
      width: 14rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  all: unset;
  text-transform: uppercase;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  font-weight: bold;
  line-height: 1;
  
  span {
    margin-left: 0.6rem;
    color: ${props => props.spanColor};
    font-weight: 300;
  }
  @media (max-width: 750px) {
    line-height: 1.5;
  }
`;

export const SectionSubtitle = styled.p`
  text-transform: capitalize;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
`;

export const SpecialNeedsLeftColumn = styled.div`
  border-right: 1px solid ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
`;

export const SpecialNeedsLeftIconWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const SpecialNeedsRightIconWrapper = styled.div`
  & > * {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const SpecialOffersDescriptionWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;
