import styled from 'styled-components';

export const SectionTitleContent = styled.h3`
  text-transform: uppercase;
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

export const SectionPContent = styled.p`
  color: ${props => props.fontColor || 'black'};
  margin-bottom: 1rem;
  font-size: ${props => props.fontSize || '1rem'};
  text-align: justify;
  padding-right: 3rem;
  
  @media (max-width: 750px) {
    padding-right: 0;
  }
`;

export const SectionList = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
      
  svg {
    color: ${props => props.color};
    margin-right: 1rem;
  }
`;

export const BikeTourRowSectionWrapper = styled.div`
  margin-bottom: 4rem;
`;
