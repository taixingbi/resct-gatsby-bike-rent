import styled from 'styled-components';
import {
  FaShoppingCart,
  FaPhone,
} from 'react-icons/fa';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import posed from 'react-pose';

export const NavbarWrapper = styled(AppBar)`
  background-color: ${props => props.bgColor || 'white'} !important;
`;
export const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  position: relative;
  padding-right: unset !important;
  
    @media (max-width: 750px) {
      padding-left: unset !important;
    }
`;
export const NavbarBrandLogo = styled.div` // todo: change this to image
  z-index: 5;
  width: 13rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
    padding-top: 1rem;
    height: 10rem;
    width: 9rem;
    
    @media (max-width: 750px) {
      padding-top: unset;
      height: 7rem;
      width: auto;
    }
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
export const NavbarItemsWrapper = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${props => props.dividerColor || 'black'};

  @media (max-width: 750px) {
    display: none !important;
  }
`;
export const NavbarItemButton = styled(Button)`
  font-size: ${props => props.textsize || '1rem'} !important;
  color: ${props => props.textcolor || 'black'} !important;
  font-weight: bold !important;
  svg {
    margin-left: 0.5rem;
  }
  .nav-total-number {
    position: relative;
    top: -0.8rem;
  }
`;
export const ShoppingCartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const NavbarItemDivider = styled.div`
  margin: 0 1rem;
  font-size: 1.2rem;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const PhoneIcon = styled(FaPhone)`
  margin-right: 1rem;
`;
export const NavbarPhoneItem = styled.div`
  height: ${props => props.height || '100%'};
  padding: 0 3rem;
  margin-left: 1rem;
  background-color: ${props => props.bgcolor || 'white'};
  font-size: ${props => props.textsize || '1rem'};
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const NavbarMobileItem = styled(Button)`
  display: none !important;
  
  @media (max-width: 750px) {
    display: flex !important;
    width: 100%;
    font-size: ${props => props.textsize || '1rem'} !important;
    color: ${props => props.textcolor || 'black'} !important;
    font-weight: bold !important;
  }
`;

export const AboutItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutListAnimation = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
});

export const AboutListAnimationWrapper = styled(AboutListAnimation)`
  display: ${props => ((props.pose === 'hidden') ? 'none' : 'block')};
`;

export const AboutListWrapper = styled(List)`
  position: absolute !important;
  background-color: white;
  bottom: -15rem;
  width: 100%;
  left: 0;
`;

export const AboutListItem = styled(ListItem)`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: center !important;
  text-align: center !important;
`;
