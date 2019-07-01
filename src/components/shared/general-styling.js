import styled, { css } from 'styled-components';
import variables from "../../theme/variables";

const paddingDefault = 'padding: 5rem 8rem';
const paddingWideScrn = 'padding: 5rem 20rem';
const paddingWithoutHeight = 'padding: 0 8rem';
const paddingWideScrnWithoutHeight = 'padding: 0 20rem';

export const SectionWrapper = styled.section`
    position: relative;
    overflow: hidden;
    min-height: ${props => props.minHeight};
    height: 100%;
    width: 100%;
    ${props => (props.centerIt ? css`
      display: flex;
      justify-content: center;
      align-items: center;
    ` : null)};
    ${props => (props.centerItWithoutFlex ? css`
      justify-content: center;
      align-items: center;
    ` : null)};
    ${props => (props.putPadding ? css`
      ${paddingDefault};
      
      @media (max-width: 750px) {
        padding: 3rem 1rem;
      }
      @media (min-width: 1400px) {
        ${paddingWideScrn};
      }
     ` : null)};
    }
    ${props => (props.putPaddingWithoutHeight) ? css`
      ${paddingWithoutHeight};
      
      @media (max-width: 750px) {
        padding: 0 1rem;
      }
      @media (min-width: 1400px) {
        ${paddingWideScrnWithoutHeight};
      }
    ` : null}
`;
export const ColumnTitle = styled.h2`
  all: unset;
  font-size: 2.1rem;
  font-weight: bold;
  color: ${variables.color.green};
  text-transform: uppercase;
  ${props => (props.centerIt ? css`
    display: flex;
    justify-content: center;
  ` : null)};
`;
