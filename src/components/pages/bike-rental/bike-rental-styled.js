import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const SectionWrapper = styled.section`
  min-height: ${props => props.minHeight};
  height: 100%; 
  width: 100%;
  padding: 2rem ${props => props.container || '0'};
  
  @media (max-width: 750px) {
    padding: 1rem 0;
  }
`;

export const BikeRentalSectionTitleContent = styled.h3`
  text-transform: uppercase;
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
`;

export const BikeRentalSectionPContent = styled.p`
  color: ${props => props.fontColor || 'black'};
  margin-bottom: 1rem;
  font-size: ${props => props.fontSize || '1rem'};
  text-align: justify;
`;

export const BikeRentalSectionFreeTitle = styled.h4`
  text-transform: uppercase;
  text-align: right;
  padding: 0.5rem 1rem;
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
  @media (max-width: 750px) {
    text-align: center;
    font-size: 3rem;
  }
`;

export const BikeRentalSectionFreeContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BikeRentalSectionFreePlusIcon = styled(FaPlus)`
  font-size: 2rem;
`;

export const BikeRentalSectionFreeAccessoriesImage = styled.img`
  height: 6.3rem;
  width: 100%;
`;

export const BikeRentalSectionFreeDescriptionWrapper = styled.p`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #575759;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const BikeRentalSectionAccessoriesDetailsWrapper = styled.div`
  height: 100%;
`;

export const BikeRentalSectionSpecialOfferWrapper = styled.div`
`;

export const BikeRentalSectionSpecialOfferLabel = styled.h4`
  all: unset;
  display: flex;
  align-items: center;
  color: #676769;
  font-weight: bold;
  font-size: ${props => props.fontSize};
`;

export const BikeRentalSectionSpecialOfferCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  //border: solid 0.5px #88c343;
  //padding: 1rem;
`;

export const BikeRentalSectionSpecialOfferCardDescriptionWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
`;
