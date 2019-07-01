import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import variables from '../../../theme/variables';

const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
`;
const CheckoutStepLabel = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: lighter;
`;
const CheckoutStepProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CircleStepIcon = styled(FaCircle)`
  color: ${props => ((props.current === 'true') ? variables.color.green : variables.color.darkGray)};
`;
const StepLineProgress = styled.div`
  width: 35rem;
  height: 2px;
  background-color: ${props => ((props.current === 'true') ? variables.color.green : variables.color.darkGray)};
  margin: 0 1rem;
`;

const CheckoutStepIdentification = ({ location }) => {
  return (
    <Wrapper className="cell grid-y">
      <CheckoutStepLabel className="cell medium-2">
          Rent A Bike
      </CheckoutStepLabel>
      <CheckoutStepProgressWrapper className="cell auto">
        <CircleStepIcon current={
          (location === '/checkout/bike-rental'
                || location === '/checkout/customer'
                || location === '/checkout/summary').toString()
        }
        />
        <StepLineProgress current={(location === '/checkout/customer' || location === '/checkout/summary').toString()} />
        <CircleStepIcon current={(location === '/checkout/customer' || location === '/checkout/summary').toString()} />
        <StepLineProgress current={(location === '/checkout/summary').toString()} />
        <CircleStepIcon current={(location === '/checkout/summary').toString()} />
      </CheckoutStepProgressWrapper>
    </Wrapper>
  );
};

CheckoutStepIdentification.propTypes = {
  location: PropTypes.string.isRequired,
};

export default CheckoutStepIdentification;
