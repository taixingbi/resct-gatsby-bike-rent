import styled from 'styled-components';
import { Button } from '@material-ui/core';
import variables from '../../../theme/variables';

const containerPadding = '4rem';

export const SectionWrapper = styled.section`
  min-height: ${props => props.minHeight}; 
  width: 100%;
  background-color: ${props => props.bgColor || 'white'};
  
  @media (max-width: 750px) {
    padding: 1rem 0;
  }
`;
export const BikeImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AdultBikeImgTag = styled.img`
  z-index: 1;
  position: absolute;
  left: -35rem;
`;

export const EBikeImgTag = styled.img`
  z-index: 1;
  position: absolute;
  right: -32rem;
`;

export const EBikeContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  .content__wrapper {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about__description {
    color: ${variables.color.darkGray};
    font-size: 2.4rem;
    font-weight: 300;
    text-transform: uppercase;
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const AboutDescriptionButton = styled(Button)`
  border-radius: 0 !important;
  width: 14.5rem !important;
  height: 4.2rem;
  font-size: 1.4rem !important;
  color: ${variables.color.green} !important;
  border-color: ${variables.color.green} !important;
`;

export const AdultBikeContentWrapper = styled.div`
  justify-content: center;
  align-items: flex-start;
  .content__wrapper { text-align: center; }
  .about__official {
    color: ${variables.color.darkGreen};
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: 300;
  }
  .about__title {
    color: ${variables.color.green};
    font-size: 3.2rem;
    text-transform: uppercase;
  }
  .about__subtitle {
    color: ${variables.color.green};
    font-size: 3rem;
  }
  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const BikesSelectionsWrapper = styled.div`
  position: relative;
  padding: 6rem ${containerPadding};
  min-height: 45rem;
  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

export const BikeSelectionPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.2rem;
  font-weight: 300;
`;

export const BikeSelectionLabel = styled.div`
  border: solid 0.05rem ${props => props.color};
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BikeSelectionCard = styled.div`
  border: solid 0.05rem white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const AboutContentWrapper = styled.div`
  min-height: 40rem;
  padding: 4rem ${containerPadding};
  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

export const AboutContentTitle = styled.h1`
  all: unset;
  font-size: 2.1rem;
  color: ${variables.color.green};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0 !important;
`;

export const AboutContentSubtitle = styled.h3`
  all: unset;
  font-size: 1.6rem;
  color: ${variables.color.darkGray};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 300;
`;

export const AboutContentPointsColumn = styled.p`
  display: flex;
  text-align: justify;
  font-size: 1.6rem;
`;
