import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { FaPhone } from 'react-icons/fa';
import variables from '../../../theme/variables';

export const SideBarWrapper = styled.div`
  background-color: ${variables.color.green};
  height: 100%;
  ${props => (props.desktopView ? css`
    width: 40vw;
  ` : css`
    width: 80vw;
  `)}
`;

export const ListWrapper = styled.div`
  height: 100%;
  color: white;
  padding: 2rem;
`;

export const ListDivider = styled.div`
  background-color: white;
  width: 100%;
  height: 1px;
`;

export const ListItem = styled(Button)`
  color: white !important;
  font-size: ${variables.typo.lg} !important;
`;

export const CustomerServiceWrapper = styled.div`
  padding: 4rem 0;
`;

export const CustomerServiceLabel = styled.h3`
  text-align: center;
  font-size: ${variables.typo['x-lg']};
  font-weight: lighter;
`;

export const CustomerServicePhoneIcon = styled(FaPhone)`
  margin-right: 1rem;
`;

export const CustomerServiceContent = styled.h5`
  font-size: ${variables.typo.lg};
  text-align: center;
  margin-top: 1rem;
`;
