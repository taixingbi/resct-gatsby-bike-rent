import React, { useState, useEffect, useContext } from 'react';
import { navigate } from 'gatsby';
import _ from 'lodash';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Store } from '../../App';
import { temporaryToken } from '../../helpers/temporary-data';
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
import {
  accessoriesQntyAvailability,
  getPriceOfBikesBySelectedHour,
  getPriceOfAccessoriesBySelectedHour,
  computeSubtotal,
  computeTax,
  computeTotal,
} from '../../helpers/checkout-business-logic';
import CheckoutGrid from '../../components/pages/checkout/CheckoutGrid';
import SelectForm from '../../components/shared/forms/SelectForm';
import Loader from '../../components/shared/loader/FullHeightLoader';

const fetchData = async (setBikesData, setAccessoriesData, loadingSetter) => {
  try {
    loadingSetter(true);
    const responseBike = await axios.get('https://nvp.bikerent.nyc/api/rent-query/bikes', {
      headers: {
        Authorization: temporaryToken,
      },
    });
    const responseMisc = await axios.get('https://nvp.bikerent.nyc/api/rent-query/misc', {
      headers: {
        Authorization: temporaryToken,
      },
    });
    setBikesData(responseBike.data.bikes);
    setAccessoriesData(responseMisc.data.misc);
    loadingSetter(false);
  } catch (e) {
    loadingSetter(false);
    toast.error('We are sorry for the inconvenience, please try again.');
    navigate('/');
  }
};
const hourOptions = [0, 1, 2, 3, 5, 12, 24];
const bikeQuantityOption = _.range(0, 21);

const CheckoutBikeRentalPage = ({ location }) => {
  const [bikesData, setBikesData] = useState(null);
  const [accessoriesData, setAccessoriesData] = useState(null);
  const { state, actions } = useContext(Store);

  const accessoriesOption = accessoriesQntyAvailability(
    state.adultQnty, state.childQnty, state.tandemQnty,
    state.ebikeQnty, state.roadQnty, state.mountainQnty,
    state.elliptigoQnty, state.tricycleQnty, state.snowQnty,
    state.eHandQnty, state.handQnty,
  );
  const subTotal = computeSubtotal(
    getPriceOfBikesBySelectedHour(state.hours, bikesData),
    getPriceOfAccessoriesBySelectedHour(state.hours, accessoriesData),
    state.adultQnty, state.childQnty,
    state.tandemQnty, state.ebikeQnty,
    state.roadQnty, state.mountainQnty,
    state.elliptigoQnty, state.tricycleQnty,
    state.snowQnty, state.eHandQnty, state.handQnty,
    state.childSeatQnty, state.childTrailerQnty,
    state.tagalongQnty, state.basketQnty,
  );
  const tax = computeTax(subTotal);
  const total = computeTotal(subTotal, tax);


  useEffect(() => {
    fetchData(setBikesData, setAccessoriesData, actions.setIsLoading);
  }, []);

  useEffect(() => {
    actions.setCheckoutSubTotal(subTotal);
  }, [subTotal]);

  if (!state.isLoading) {
    return (
      <CheckoutLayout location={location.pathname}>
        <SectionWrapper className="cell grid-x grid-padding-x grid-padding-y">
          <div className="cell medium-2 small-12">
            <CheckoutGrid title="Pick Your Hour">
              <div className="cell">
                <SelectForm
                  itemState={state.hours}
                  setItemState={actions.setHours}
                  label="Hour(s)"
                  selectItems={hourOptions}
                />
              </div>
            </CheckoutGrid>
          </div>
          <div className="cell medium-7 small-12">
            <CheckoutGrid title="Pick Your Bike">
              <div className="cell medium-4 small-12 grid-y grid-padding-y">
                <div className="cell auto">
                  <SelectForm
                    itemState={state.adultQnty}
                    setItemState={actions.setAdultQnty}
                    label="Adult"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.childQnty}
                    setItemState={actions.setChildQnty}
                    label="Child"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.tandemQnty}
                    setItemState={actions.setTandemQnty}
                    label="Tandem"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.ebikeQnty}
                    setItemState={actions.setEbikeQnty}
                    label="E-Bike"
                    selectItems={bikeQuantityOption}
                  />
                </div>
              </div>
              <div className="cell medium-4 small-12 grid-y grid-padding-y">
                <div className="cell auto">
                  <SelectForm
                    itemState={state.roadQnty}
                    setItemState={actions.setRoadQnty}
                    label="Road"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.mountainQnty}
                    setItemState={actions.setMountainQnty}
                    label="Mountain"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.elliptigoQnty}
                    setItemState={actions.setElliptigoQnty}
                    label="Elliptigo"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.tricycleQnty}
                    setItemState={actions.setTricycleQnty}
                    label="Tricycle"
                    selectItems={bikeQuantityOption}
                  />
                </div>
              </div>
              <div className="cell medium-4 small-12 grid-y grid-padding-y">
                <div className="cell auto">
                  <SelectForm
                    itemState={state.snowQnty}
                    setItemState={actions.setSnowQnty}
                    label="Snow"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.eHandQnty}
                    setItemState={actions.setEHandQnty}
                    label="E-Hand"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto">
                  <SelectForm
                    itemState={state.handQnty}
                    setItemState={actions.setHandQnty}
                    label="Hand"
                    selectItems={bikeQuantityOption}
                  />
                </div>
                <div className="cell auto" />
              </div>
            </CheckoutGrid>
          </div>
          <div className="cell medium-3 small-12">
            <CheckoutGrid title="Pick Your Accessories">
              <div className="cell">
                <SelectForm
                  itemState={state.childSeatQnty}
                  setItemState={actions.setChildSeatQnty}
                  label="Child Seat"
                  selectItems={accessoriesOption}
                />
              </div>
              <div className="cell">
                <SelectForm
                  itemState={state.childTrailerQnty}
                  setItemState={actions.setChildTrailerQnty}
                  label="Child Trailer"
                  selectItems={accessoriesOption}
                />
              </div>
              <div className="cell">
                <SelectForm
                  itemState={state.tagalongQnty}
                  setItemState={actions.setTagalongQnty}
                  label="Tagalong"
                  selectItems={accessoriesOption}
                />
              </div>
              <div className="cell">
                <SelectForm
                  itemState={state.basketQnty}
                  setItemState={actions.setBasketQnty}
                  label="Basket"
                  selectItems={accessoriesOption}
                />
              </div>
            </CheckoutGrid>
          </div>
        </SectionWrapper>

        <SectionWrapper
          className="cell grid-x"
          minHeight="15rem"
        >
          <div className="cell medium-9 small-12">
            <TotalCostWrapper className="grid-y grid-padding-y">
              <div className="cell auto grid-x grid-padding-x">
                <TotalLabel className="cell auto"> Subtotal </TotalLabel>
                <TotalPrice className="cell auto">
                  $
                  { subTotal }
                </TotalPrice>
              </div>
              <div className="cell auto grid-x grid-padding-x">
                <TotalLabel className="cell auto"> Tax </TotalLabel>
                <TotalPrice className="cell auto">
                  $
                  { tax }
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
                  { total }
                </TotalPrice>
              </div>
            </TotalCostWrapper>
          </div>
          <div className="cell medium-3 small-12">
            <CouponWrapper className="grid-x">
              <CouponLabel className="cell medium-6 small-6">
                Coupon Code?
              </CouponLabel>
              <div className="cell medium-6 small-6">
                <CouponButton>
                  +Add
                </CouponButton>
              </div>
            </CouponWrapper>
          </div>
        </SectionWrapper>
      </CheckoutLayout>
    );
  }
  return <Loader />;
};

CheckoutBikeRentalPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CheckoutBikeRentalPage;
