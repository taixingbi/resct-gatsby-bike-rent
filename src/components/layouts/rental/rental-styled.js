import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const RentalHeader = styled.div`
  z-index: 1;
  position: relative;
  height: 25rem;
  background-image: url(${props => props.bgImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const RentalHeaderTitle = styled.h1`
  font-size: 12rem;
  position: absolute;
  color: white;
  text-transform: uppercase;
  top: 3rem;
  
  @media (max-width: 750px) {
    margin: unset;
    font-size: 5rem;
    top: 19rem;
  }
`;
