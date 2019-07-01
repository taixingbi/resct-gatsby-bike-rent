import styled from 'styled-components';
import { Button } from '@material-ui/core';
import variables from '../../../theme/variables';

export const SectionWrapper = styled.section`
  width: 100%;
  border-top: 1px solid black;
  padding: 1.5rem 0;
`;

export const TotalCostWrapper = styled.div`
  height: 100%;
`;

export const TotalLabel = styled.h3`
  font-size: 1.5rem;
  font-weight: ${props => (props.bold ? 'bold' : 'lighter')};
  text-transform: uppercase;
`;

export const TotalPrice = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: ${props => (props.bold ? 'bold' : 'lighter')};
  color: ${props => (props.bold ? variables.color.darkGreen : 'black')};
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const CouponWrapper = styled.div`
  height: 100%;
`;

export const CouponLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const CouponButton = styled(Button)`
  height: 100%;
  width: 100%;
  font-size: 1.5rem !important;
`;

export const CheckoutImage = styled.img`
  height: 100%;
`;

export const CheckoutImageLabel = styled.p`
  height: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${variables.typo.sm};
  font-weight: lighter;
`;

export const ReservationContentWrapper = styled.div`
  border-top: 1px solid black;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
`;

export const ReservationContentRowLabel = styled.h3`
  font-size: ${variables.typo.sm};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const ReservationContentRowContent = styled.p`
  font-size: ${variables.typo.sm};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const MapWrapper = styled.div`
  margin-top: 1.5rem;
  overflow: hidden;
  height: 25rem;
`;

export const ReservationSelectedBikesWrapper = styled.span`
  margin-right: 0.5rem;
  span {
    margin: 0 0.1rem;
    text-transform: lowercase !important;
  }
`;
