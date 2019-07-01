import styled from 'styled-components';

export const SectionWrapper = styled.section`
  min-height: ${props => props.minHeight};
  height: 100%; 
  width: 100%;
  padding: 2rem ${props => props.paddingLeftRight || '0'};
  @media (max-width: 750px) {
    padding: 1rem 0;
  }
`;

export const SectionTitleContent = styled.h2`
  padding: 2rem ${props => props.paddingLeftRight || '0'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.fontColor || 'black'};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const SectionSubTitleContent = styled.h3`
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
  margin-bottom: 1rem;
`;

export const SectionLogoContent = styled.h3`
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const SectionSpanBoldContent = styled.span`
  font-weight: bold;
  font-size: ${props => props.fontSize || '1rem'};
  margin-bottom: 1rem;
`;

export const SectionFreeWrapper = styled.section`
  min-height: ${props => props.minHeight};
  height: 100%; 
  width: 100%;
  padding: 5rem ${props => props.paddingRight || '0'} 5rem ${props => props.paddingRight || '0'};  //top right bottom left
  
  @media (max-width: 750px) {
    padding: 1rem 0;
  }
`;

export const SectionPContent = styled.p`
  color: ${props => props.fontColor || 'black'};
  margin-bottom: 1rem;
  font-size: ${props => props.fontSize || '1rem'};
`;

export const Ul = styled.ul`
  list-style-type: none;
`;