import React from 'react';
import { CheckoutImage, CheckoutImageLabel } from '../../pages/checkout/checkout-styled';

const CheckoutCard = () => (
  <div className="cell auto grid-y">
    <div className="cell medium-9 small-12 grid-x grid-padding-x">
      <CheckoutImage
        className="cell auto"
        src="https://via.placeholder.com/150x150"
        alt="img1"
      />
    </div>
    <div className="cell medium-3 small-12">
      <CheckoutImageLabel>
        Helmet(s), Lock(s), Map(s) are included
      </CheckoutImageLabel>
    </div>
  </div>
);

export default CheckoutCard;
