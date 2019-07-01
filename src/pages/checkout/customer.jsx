import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import CheckoutLayout from '../../components/layouts/checkout';
import {
  SectionWrapper,
  ReservationContentWrapper,
  ReservationContentRowLabel,
  ReservationContentRowContent,
  ReservationSelectedBikesWrapper,
} from '../../components/pages/checkout/checkout-styled';
import { Store } from '../../App';
import CheckoutGrid from '../../components/pages/checkout/CheckoutGrid';
import InputFormCheckout from '../../components/shared/forms/InputFormCheckout';
import {
  computeTax,
  computeTotal,
} from '../../helpers/checkout-business-logic';
import {
  getAllSelectedBikesOnly,
  getAllSelectedAccessoriesOnly,
} from '../../helpers/transformative-functions';
import Loader from '../../components/shared/loader/FullHeightLoader';

const CustomerInputForm = ({ location }) => {
  const { state, actions } = useContext(Store);
  const tax = computeTax(state.checkoutSubTotal);
  const total = computeTotal(state.checkoutSubTotal, tax);

  const allBikesAndAccessories = Object.assign({},
    getAllSelectedAccessoriesOnly(state),
    getAllSelectedBikesOnly(state));
  const selectedItems = Object.keys(allBikesAndAccessories);

  useEffect(() => {
    // REDIRECT IF STATE IS NOT INITIALIZE!
    if (state.checkoutSubTotal <= 0) {
      navigate('/checkout/bike-rental');
    }
  }, []);

  const bikeSelectionOption = () => {
    if (state.guidedTours.length > 0) {
      return (
        <ReservationContentRowContent className="total cell medium-10 small-8">
          {state.guidedTours}
          &nbsp; - &nbsp;
          <ReservationSelectedBikesWrapper>
            Adult
            <span> x </span>
            { state.guidedToursAdultBike }
            ,
          </ReservationSelectedBikesWrapper>
          <ReservationSelectedBikesWrapper>
            Child
            <span> x </span>
            { state.guidedToursChildBike }
          </ReservationSelectedBikesWrapper>
        </ReservationContentRowContent>
      );
    }
    return (
      <ReservationContentRowContent className="total cell medium-10 small-8">
        { state.hours }
        &nbsp; Hour(s), &nbsp;
        { selectedItems.map(item => (
          <ReservationSelectedBikesWrapper key={item}>
            {allBikesAndAccessories[item]}
            <span> x </span>
            {item}
            ,
          </ReservationSelectedBikesWrapper>
        ))}
      </ReservationContentRowContent>
    );
  };

  if (state.isLoading) return <Loader />;
  return (
    <CheckoutLayout location={location.pathname}>
      <SectionWrapper className="cell">
        <CheckoutGrid title="Reservation">
          <ReservationContentWrapper className="cell grid-x">
            <div className="cell medium-8 small-12 grid-x">
              <ReservationContentRowLabel className="label cell medium-2 small-4">
                  Selection:
              </ReservationContentRowLabel>
              { bikeSelectionOption() }
            </div>
            <div className="cell medium-4 small-12 grid-x">
              <ReservationContentRowLabel className="label cell medium-2 small-4">
                  Total:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total cell medium-10 small-8">
                  $
                {total.toFixed(2)}
              </ReservationContentRowContent>
            </div>
          </ReservationContentWrapper>
        </CheckoutGrid>
      </SectionWrapper>
      <SectionWrapper className="cell grid-x">
        <div className="cell medium-6 small-12">
          <CheckoutGrid title="Contact">
            <div className="cell medium-12 grid-y grid-padding-y">
              <InputFormCheckout
                type="name"
                existingData={state.firstName}
                state={actions.setFirstName}
                label="First Name"
                placeholder="Arya"
              />
              <InputFormCheckout
                type="name"
                existingData={state.lastName}
                state={actions.setLastName}
                label="Last Name"
                placeholder="Stark"
              />
              <InputFormCheckout
                type="email"
                existingData={state.email}
                state={actions.setEmail}
                label="Email"
                placeholder="noname@winterfell.nyc"
              />
              <InputFormCheckout
                type="phone"
                existingData={state.phoneNumber}
                state={actions.setPhoneNumber}
                label="Phone Number"
                placeholder="+1 232 993 9493"
              />
            </div>
          </CheckoutGrid>
        </div>
        <div className="cell medium-6 small-12">
          <CheckoutGrid title="Payment">
            <div className="cell medium-12 grid-y grid-padding-y">
              <InputFormCheckout
                type="credit-card-number"
                existingData={state.creditCardNumber}
                state={actions.setCreditCardNumber}
                label="Credit Card Number"
                placeholder="5848588484"
              />
              <InputFormCheckout
                type="name"
                existingData={state.creditCardName}
                state={actions.setCreditCardName}
                label="Name On Credit Card"
                placeholder="Arya Stark"
              />
              <InputFormCheckout
                type="credit-card-exp-date"
                existingData={state.creditCardExpDate}
                state={actions.setCreditCardExpDate}
                label="Expiration Date"
                placeholder="4/34"
              />
              <InputFormCheckout
                type="credit-card-cvc"
                existingData={state.creditCardCvc}
                state={actions.setCreditCardCvc}
                label="CVC (Backside Code)"
                placeholder="3443"
              />
            </div>
          </CheckoutGrid>
        </div>
      </SectionWrapper>
      <SectionWrapper className="cell">
        <CheckoutGrid title="Disclaimer/Cancellation">
          <ReservationContentWrapper className="cell grid-x">
              Lorem ipsum dolor amet normcore prism etsy, messenger bag whatever literally yr ennui.
              Raw denim kickstarter air plant flexitarian XOXO seitan tumeric.
          </ReservationContentWrapper>
        </CheckoutGrid>
      </SectionWrapper>
    </CheckoutLayout>
  );
};

CustomerInputForm.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CustomerInputForm;
