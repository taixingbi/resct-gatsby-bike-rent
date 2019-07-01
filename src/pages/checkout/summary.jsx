import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Store } from '../../App';
import CheckoutLayout from '../../components/layouts/checkout';
import {
  ReservationContentRowContent,
  ReservationContentRowLabel,
  ReservationContentWrapper,
  SectionWrapper,
  MapWrapper,
  ReservationSelectedBikesWrapper,
} from '../../components/pages/checkout/checkout-styled';
import CheckoutGrid from '../../components/pages/checkout/CheckoutGrid';
import { getAllSelectedAccessoriesOnly, getAllSelectedBikesOnly } from '../../helpers/transformative-functions';
import { computeTax, computeTotal } from '../../helpers/checkout-business-logic';

const Summary = ({ location }) => {
  const { state } = useContext(Store);

  const tax = computeTax(state.checkoutSubTotal);
  const total = computeTotal(state.checkoutSubTotal, tax);
  const allBikesAndAccessories = Object.assign({},
    getAllSelectedAccessoriesOnly(state),
    getAllSelectedBikesOnly(state));
  const selectedItems = Object.keys(allBikesAndAccessories);

  useEffect(() => {
    // REDIRECT IF STATE IS NOT INITIALIZE!
    if (state.checkoutSubTotal <= 0
        && !state.firstName.length
        && !state.lastName.length
        && !state.email.length) {
      navigate('/checkout/bike-rental');
    }
  }, []);

  return (
    <CheckoutLayout location={location.pathname}>
      <SectionWrapper className="cell">
        <CheckoutGrid title="Booking Summary">
          <ReservationContentWrapper className="cell grid-x">
            <div className="cell medium-8 small-12 grid-x grid-padding-x">
              <ReservationContentRowLabel className="label cell medium-4 small-4">
                  Selection:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total cell medium-8 small-8">
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
            </div>
            <div className="cell medium-4 small-12 grid-x grid-padding-x">
              <ReservationContentRowLabel className="label cell medium-4 small-4">
                Total:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total cell medium-8 small-8">
                $
                { total }
              </ReservationContentRowContent>
            </div>
          </ReservationContentWrapper>
          <ReservationContentWrapper className="cell grid-x">
            <div className="cell medium-8 small-12 grid-x grid-padding-x">
              <ReservationContentRowLabel className="label cell medium-4 small-4">
                  Name:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total cell cell medium-8 small-8">
                { state.firstName }
                &nbsp;
                { state.lastName }
              </ReservationContentRowContent>
            </div>
            <div className="cell medium-4 small-12 grid-x grid-padding-x">
              <ReservationContentRowLabel className="label cell medium-4 small-4">
                  Contact:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total cell medium-8 small-8">
                { state.email }
              </ReservationContentRowContent>
            </div>
          </ReservationContentWrapper>
          <ReservationContentWrapper className="cell grid-x">
            <div className="cell medium-8 small-12 grid-x grid-padding-x">
              <ReservationContentRowLabel className="label cell medium-4 small-4">
                  Pick up location:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total  cell medium-8 small-8">
                  Brooklyn Bridge Bike Rent
              </ReservationContentRowContent>
            </div>
            <div className="cell medium-4 small-12 grid-x grid-padding-x">
              <ReservationContentRowLabel className="label cell medium-4 small-4">
                  Opening Hours:
              </ReservationContentRowLabel>
              <ReservationContentRowContent className="total cell medium-8 small-8">
                  8AM - 8PM
              </ReservationContentRowContent>
            </div>
          </ReservationContentWrapper>
          <MapWrapper className="cell">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24195.75787989993!2d-74.0030498153688!3d40.70767469810725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a227fcd1c5d%3A0xc0e8362b68069bdf!2sBrooklyn+Bridge+Bike+Rent!5e0!3m2!1sen!2sus!4v1557431147260!5m2!1sen!2sus"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </MapWrapper>
        </CheckoutGrid>
      </SectionWrapper>
    </CheckoutLayout>
  );
};

Summary.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Summary;
