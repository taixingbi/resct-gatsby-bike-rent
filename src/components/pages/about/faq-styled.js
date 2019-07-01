import styled from 'styled-components';
import variables from '../../../theme/variables';

const paddingContainer = 'padding: 4rem 8rem';

export const SectionWrapper = styled.section`
  ${paddingContainer};
  
  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

export const ColumnTitle = styled.h2`
  all: unset;
  font-size: 2.1rem;
  font-weight: bold;
  color: ${variables.color.green};
  text-transform: uppercase;
`;

export const PointWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const LabelContainer = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #3f3f3f;
  
  span {
    display: flex;
    align-items: center;
    
    svg {
      font-size: 1.4rem;
      margin-right: 0.5rem;
      color: ${variables.color.green};
    }
  }
`;

export const PointersContainer = styled.div`
  p {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #3f3f3f;
    text-align: justify;
  }
`;

export const RowVerticalWrapper = styled.div`
  margin-bottom: 1rem;
`;
