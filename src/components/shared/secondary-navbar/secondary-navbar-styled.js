import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import { FaBars, FaShoppingCart } from 'react-icons/fa';

export const RentalSecondaryNavbarWrapper = styled.div`
  ${props => (props.fixedNavbar
    ? css`
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100%
    ` : css`
    position: relative;
  `)};
  height: 6.8rem;
  background-color: white;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const RentalSecondaryNavbarItem = styled(Button)`
  font-weight: bold !important;
  font-size: ${props => props.fontSize || '1rem'} !important;
  color: ${props => props.fontcolor || 'black'} !important;
`;

export const RentalSecondaryNavbarMenuButtonWrapper = styled.div`
  padding: 0 !important;
`;

export const RentalSecondaryNavbarMenuButton = styled(Button)`
  height: 100%;
  width: 100%;
  border-radius: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgcolor} !important;
  color: white !important;
  font-size: 1.2rem !important;
  font-weight: bold !important;
  text-transform: uppercase;
`;

export const RentalSecondaryNavbarMenuBarsIcon = styled(FaBars)`
  margin-right: 1rem;
`;
export const RentalSecondaryNavbarCartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;
`;
