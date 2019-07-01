import styled, { css } from 'styled-components';
import variables from '../../../theme/variables';

const padding = 'padding: 4rem 8rem';

export const SectionWrapper = styled.section`
  ${padding};
  
  @media (max-width: 750px) {
    padding: 2rem;
  }
`;

export const ColumnTitle = styled.h2`
  all: unset;
  font-size: 2.1rem;
  font-weight: bold;
  color: ${variables.color.green};
  text-transform: uppercase;
`;

export const ColumnSubtitle = styled.h4`
  all: unset;
  font-size: 1.6rem;
  color: ${variables.color.darkGray};
  text-transform: uppercase;
  ${props => (props.bold ? css`font-weight: bold` : null)};
  text-align: justify;
`;

export const ColumnMapWrapper = styled.div`
  height: 25rem;
  width: 100%;
  margin: 2rem 0;
  
  iframe {
    height: 100%;
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  all: unset;
  font-size: 2.4rem;
  text-transform: uppercase;
  color: ${variables.color.darkGray};
  margin-bottom: 2rem;
`;
