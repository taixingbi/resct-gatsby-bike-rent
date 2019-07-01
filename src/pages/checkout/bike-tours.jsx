import React, {useContext, useEffect} from 'react';
import _ from 'lodash';
import { Store } from '../../App';
import CheckoutLayout from '../../components/layouts/checkout';
import {
  SectionWrapper,
  TotalCostWrapper,
  TotalLabel,
  TotalPrice,
  CouponWrapper,
  CouponLabel,
  CouponButton,
} from '../../components/pages/checkout/checkout-styled';
import CheckoutGrid from '../../components/pages/checkout/CheckoutGrid';
import SelectForm from '../../components/shared/forms/SelectForm';
import RadioForm from '../../components/shared/forms/RadioForm';
import CalendarPicker from '../../components/shared/forms/CalendarPicker';

const bikeQuantityOption = _.range(0, 25);
const timeOptionsForCentralPark = [
  '9:00 AM',
  '10:00 AM',
  '1:00 PM',
  '4:00 PM',
];
const timeOptionForBrooklyn = [
  '1:00 PM',
];

const CheckoutGuidedToursPage = ({ location }) => {
  const { state, actions } = useContext(Store);

  const computeSubTotal = () => {
    if (!state.guidedTours) return parseFloat('0').toFixed(2);
    const compute = (49 * state.guidedToursAdultBike) + (35 * state.guidedToursChildBike);
    return parseFloat(compute).toFixed(2);
  };
  const tax = () => parseFloat(computeSubTotal() / 8.875).toFixed(2);
  const total = () => parseFloat(parseFloat(tax()) + parseFloat(computeSubTotal())).toFixed(2);
  const timeOption = () => {
    if (state.guidedTours === 'Central Park Guided Tour') return timeOptionsForCentralPark;
    if (state.guidedTours === 'Brooklyn Bridge Guided Tour') return timeOptionForBrooklyn;
    return [];
  };
  const accessoriesOption = _.range(0, (
    state.guidedToursAdultBike + state.guidedToursChildBike + 1
  ));

  useEffect(() => {
    actions.setCheckoutSubTotal(computeSubTotal);
  }, [computeSubTotal]);

  return (
    <CheckoutLayout location={location.pathname}>
      <SectionWrapper className="cell grid-x">
        <div className="cell medium-3 small-12">
          <CheckoutGrid title="Pick a tour (2 hours)">
            <div className="cell">
              <RadioForm
                state={state.guidedTours}
                setState={actions.setGuidedTours}
                values={[
                  'Central Park Guided Tour',
                  'Brooklyn Bridge Guided Tour',
                ]}
              />
            </div>
          </CheckoutGrid>
        </div>
        <div className="cell medium-3 small-12">
          <CheckoutGrid title="Pick Your Bike">
            <div className="cell auto grid-y">
              <div className="cell auto">
                <SelectForm
                  itemState={state.guidedToursAdultBike}
                  setItemState={actions.setGuidedToursAdultBike}
                  label="Adult"
                  selectItems={bikeQuantityOption}
                />
              </div>
              <div className="cell auto">
                <SelectForm
                  itemState={state.guidedToursChildBike}
                  setItemState={actions.setGuidedToursAdultBike}
                  label="Child"
                  selectItems={bikeQuantityOption}
                />
              </div>
            </div>
          </CheckoutGrid>
        </div>
        <div className="cell medium-6 small-12">
          <CheckoutGrid title="Pick Your Accessories">
            <div className="cell medium-6 small-12 grid-y">
              <div className="cell auto">
                <SelectForm
                  itemState={state.childSeatQnty}
                  setItemState={actions.setChildSeatQnty}
                  label="Child Seat"
                  selectItems={accessoriesOption}
                />
              </div>
              <div className="cell auto">
                <SelectForm
                  itemState={state.childTrailerQnty}
                  setItemState={actions.setChildTrailerQnty}
                  label="Child Trailer"
                  selectItems={accessoriesOption}
                />
              </div>
            </div>
            <div className="cell medium-6 small-12 grid-y">
              <div className="cell auto">
                <SelectForm
                  itemState={state.tagalongQnty}
                  setItemState={actions.setTagalongQnty}
                  label="Tagalong"
                  selectItems={accessoriesOption}
                />
              </div>
              <div className="cell auto">
                <SelectForm
                  itemState={state.basketQnty}
                  setItemState={actions.setBasketQnty}
                  label="Basket"
                  selectItems={accessoriesOption}
                />
              </div>
            </div>
          </CheckoutGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper className="cell grid-x">
        <div className="cell medium-9 small-12">
          <TotalCostWrapper className="grid-y grid-padding-y">
            <div className="cell auto grid-x grid-padding-x">
              <TotalLabel className="cell auto"> Subtotal </TotalLabel>
              <TotalPrice className="cell auto">
                $
                { computeSubTotal() }
              </TotalPrice>
            </div>
            <div className="cell auto grid-x grid-padding-x">
              <TotalLabel className="cell auto"> Tax </TotalLabel>
              <TotalPrice className="cell auto">
                $
                { tax() }
              </TotalPrice>
            </div>
            <div className="cell auto grid-x grid-padding-x">
              <TotalLabel
                bold
                className="cell auto"
              >
                Total
              </TotalLabel>
              <TotalPrice
                bold
                className="cell auto"
              >
                $
                { total() }
              </TotalPrice>
            </div>
          </TotalCostWrapper>
        </div>
        <div className="cell medium-3 small-12">
          <CouponWrapper className="grid-x">
            <CouponLabel className="cell medium-6 small-12">
              Coupon Code?
            </CouponLabel>
            <div className="cell medium-6 small-12">
              <CouponButton>
                +Add
              </CouponButton>
            </div>
          </CouponWrapper>
        </div>
      </SectionWrapper>

      <SectionWrapper className="cell grid-x">
        <CheckoutGrid title="Pick Your Time & Date">
          <div className="cell medium-3">
            <SelectForm
              itemState={state.timeSelected}
              setItemState={actions.setTimeSelected}
              label="Select Time"
              selectItems={timeOption()}
            />
          </div>
          <div className="cell medium-3">
            <CalendarPicker
              setItemState={actions.setGuidedToursDateSelected}
              itemSelected={state.guidedToursDateSelected}
              label="Select Date"
            />
          </div>
        </CheckoutGrid>
      </SectionWrapper>
    </CheckoutLayout>
  );
};

export default CheckoutGuidedToursPage;
