import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import {
  getCreditCardType,
  getExpirationMonth,
  getExpirationYear,
  computeTax,
  computeTotal,
} from '../../../helpers/checkout-business-logic';
import variables from '../../../theme/variables';
import { resetState } from '../../../helpers/state-management';

toast.configure({
  autoClose: 5000,
});

const Wrapper = styled(BottomNavigation)`
  z-index: 100;
  width: 100%;
  position: fixed;
  bottom: 0;
  
  button {
    max-width: unset;
  }
`;
const ItemLeft = styled(BottomNavigationAction)`
  background-color: ${variables.color.darkGray} !important;
`;
const ItemIconLeft = styled(FaChevronLeft)`
  color: white;
  font-size: ${variables.typo.md};
`;
const ItemRight = styled(BottomNavigationAction)`
  background-color: ${variables.color.darkGreen} !important;
`;
const ItemIconRight = styled(FaChevronRight)`
  color: white;
  font-size: ${variables.typo.md};
`;

const CheckoutFooter = ({ globalState, globalActions, location }) => {
  const [fromBikeToursCheckout, setFromBikeToursCheckout] = useState(false);
  const subtotal = globalState.checkoutSubTotal;
  const tax = computeTax(subtotal);
  const total = computeTotal(subtotal, tax).toFixed(2);
  const totalBike = _.sum([
    globalState.adultQnty,
    globalState.childQnty,
    globalState.tandemQnty,
    globalState.roadQnty,
    globalState.mountainQnty,
    globalState.handQnty,
    globalState.ebikeQnty,
    globalState.eHandQnty,
    globalState.elliptigoQnty,
    globalState.tricycleQnty,
  ]);

  const changeStepForward = async () => {
    if (location === '/checkout/bike-rental') {
      if (subtotal <= 0) return toast.error('Please select the HOUR(S) and BIKE(S) you want to rent before proceeding.');
      return navigate('/checkout/customer');
    }
    if (location === '/checkout/bike-tours') {
      if (subtotal <= 0) return toast.error('Please select the TOUR and BIKE(S) you want to rent before proceeding.');
      if (globalState.timeSelected.length <= 0) return toast.error('Please select the TIME and DATE you preferred');
      return navigate('/checkout/customer');
    }
    if (location === '/checkout/customer') {
      if (!globalState.firstName.length) return toast.error('Please provide your First Name');
      if (!globalState.lastName.length) return toast.error('Please provide your Last Name');
      if (!globalState.email.length) return toast.error('Please provide your Email');
      if (!globalState.phoneNumber.length) return toast.error('Please provide your Phone Number');
      if (!globalState.creditCardName.length) return toast.error('Please provide the Credit Card\'s Name');
      if (!globalState.creditCardNumber.length) return toast.error('Please provide the Credit Card\'s Number');
      if (!globalState.creditCardCvc.length) return toast.error('Please provide the Credit Card\'s CVC');
      if (!globalState.creditCardExpDate.length) return toast.error('Please provide the Credit Card\'s Expiration Date');

      try {
        globalActions.setIsLoading(true);
        const checkOutBikeRentalData = {
          paypal: {
            number: globalState.creditCardNumber,
            type: getCreditCardType(globalState.creditCardNumber),
            expire_month: getExpirationMonth(globalState.creditCardExpDate),
            expire_year: getExpirationYear(globalState.creditCardExpDate),
            cvv2: globalState.creditCardCvc,
            first_name: globalState.firstName,
            last_name: globalState.lastName,
            payment_method: 'credit_card',
            total,
            currency: 'USD',
          },
          pos_rents_orders: {
            total_price_before_tax: subtotal,
            total_price_after_tax: total,
            customer_name: globalState.firstName,
            customer_lastname: globalState.lastName,
            customer_cc_name: globalState.firstName,
            customer_cc_lastname: globalState.lastName,
            customer_email: globalState.email,
            duration: globalState.hours,
            adult: globalState.adultQnty,
            child: globalState.childQnty,
            tandem: globalState.tandemQnty,
            road: globalState.roadQnty,
            mountain: globalState.mountainQnty,
            hand: globalState.handQnty,
            electric_bike: globalState.ebikeQnty,
            electric_hand: globalState.eHandQnty,
            elliptigo: globalState.elliptigoQnty,
            tricycle: globalState.tricycleQnty,
            carbon_road: 0,
            total_bikes: totalBike,
            trailer: globalState.tagalongQnty,
            kid_trailer: globalState.childTrailerQnty,
            basket: globalState.basketQnty,
            seat: globalState.childSeatQnty,
            dropoff: 0,
            insurance: 0,
          },
        };
        const checkOutBikeTourData = {
          paypal: {
            number: globalState.creditCardNumber,
            type: getCreditCardType(globalState.creditCardNumber),
            expire_month: getExpirationMonth(globalState.creditCardExpDate),
            expire_year: getExpirationYear(globalState.creditCardExpDate),
            cvv2: globalState.creditCardCvc,
            first_name: globalState.firstName,
            last_name: globalState.lastName,
            payment_method: 'credit_card',
            total,
            currency: 'USD',
          },
          pos_tours_orders: {
            total_price_before_tax: subtotal,
            total_price_after_tax: total,
            customer_name: globalState.firstName,
            customer_lastname: globalState.lastName,
            customer_cc_name: globalState.firstName,
            customer_cc_lastname: globalState.lastName,
            customer_email: globalState.email,
            tour_type: 'public(2h)',
            tour_place: globalState.guidedTours,
            adult: globalState.guidedToursAdultBike,
            child: globalState.guidedToursAdultBike,
            walking: 0,
            pedicab: 0,
            total_people: _.sum([
              globalState.guidedToursAdultBike,
              globalState.guidedToursAdultBike,
            ]),
            trailer: globalState.tagalongQnty,
            kid_trailer: globalState.childTrailerQnty,
            basket: globalState.basketQnty,
            seat: globalState.childSeatQnty,
            dropoff: 0,
            insurance: 0,
          },
        };

        if (fromBikeToursCheckout) {
          await axios.post('http://167.99.15.175:8085/payment/pos_tours_orders', checkOutBikeTourData);
        } else {
          await axios.post('http://167.99.15.175:8085/payment/pos_rents_orders', checkOutBikeRentalData);
        }
        navigate('/checkout/summary');
        return globalActions.setIsLoading(false);
      } catch (e) {
        globalActions.setIsLoading(false);
        const error = e.response;
        if (error.status === 500) return toast.error('Opps, Something went wrong! We will resolve this problem soon. Thank you for your patience.');
        return toast.error(error.data.message);
      }
    }
    resetState(globalActions);
    return navigate('/');
  };
  const changeStepBackward = () => {
    if (location === '/checkout/summary') {
      return navigate('/checkout/customer');
    }
    if (location === '/checkout/customer') {
      return navigate('/checkout/bike-rental');
    }
    resetState(globalActions);
    return navigate('/');
  };

  return (
    <Wrapper id="fixed-footer">
      <ItemLeft
        label="Back"
        onClick={changeStepBackward}
        icon={<ItemIconLeft />}
      />
      <ItemRight
        label="Forward"
        onClick={changeStepForward}
        icon={<ItemIconRight />}
      />
    </Wrapper>
  );
};

CheckoutFooter.propTypes = {
  globalState: PropTypes.object.isRequired,
  globalActions: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default CheckoutFooter;
