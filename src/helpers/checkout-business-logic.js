import _ from 'lodash';

export const flattenBikesData = (bikes) => {
  const filteredArr = [];

  _.map(bikes, item => filteredArr.push(item));
  return _.flatMap(filteredArr);
};

export const transformHoursStringToNumber = (hours, selectedHours) => {
  if (selectedHours === 1) return hours['1 hour'];
  if (selectedHours === 2) return hours['2 hours'];
  if (selectedHours === 3) return hours['3 hours'];
  if (selectedHours === 5) return hours['5 hours'];
  if (selectedHours === 12) return hours['all day(8AM-8PM)'];
  if (selectedHours === 24) return hours['24 hours'];

  return 'Please select your duration of rent';
};

export const accessoriesQntyAvailability = (
  adultQnty, childQnty, tandemQnty,
  ebikeQnty, roadQnty, mountainQnty,
  elliptigoQnty, tricycleQnty,
  snowQnty, eHandQnty, handQnty,
) => _.range(
  0, (adultQnty + childQnty + tandemQnty
    + ebikeQnty + roadQnty + mountainQnty
    + elliptigoQnty + tricycleQnty + snowQnty
    + eHandQnty + handQnty + 1),
);

export const getPriceOfBikesBySelectedHour = (selectedHours, bikes) => {
  if (selectedHours <= 0) return 0;

  return _.reduce(flattenBikesData(bikes),
    (result, item) => {
      // eslint-disable-next-line no-param-reassign
      result[item.name] = transformHoursStringToNumber(item.hours, selectedHours);
      return result;
    }, {});
};

export const getPriceOfAccessoriesBySelectedHour = (selectedHours, accessories) => {
  if (selectedHours <= 0) return 0;

  return _.reduce(accessories, (result, item) => {
    // eslint-disable-next-line no-param-reassign
    result[item.name] = transformHoursStringToNumber(item.hours, selectedHours);
    return result;
  }, {});
};

export const computeSubtotal = (
  bikeData, accessoriesData,
  adultQnty, childQnty, tandemQnty, ebikeQnty,
  roadQnty, mountainQnty, elliptigoQnty, tricycleQnty,
  snowQnty, eHandQnty, handQnty,
  childSeatQnty, childTrailerQnty, tagalongQnty, basketQnty,
) => {
  const sumOfAllBikes = (bikeData.Adult * adultQnty)
    + (bikeData.Child * childQnty) + (bikeData.Tandem * tandemQnty)
    + (bikeData['E-Bike'] * ebikeQnty) + (bikeData.Road * roadQnty)
    + (bikeData.Mountain * mountainQnty) + (bikeData.Elliptigo * elliptigoQnty)
    + (bikeData.Tricycle * tricycleQnty) + (bikeData.Snow * snowQnty)
    + (bikeData['Electric-Hand'] * eHandQnty) + (bikeData.Hand * handQnty);
  const sumOfAllAccessories = (accessoriesData.Seat * childSeatQnty)
      + (accessoriesData.Trailer * childTrailerQnty)
      + (accessoriesData.Basket * basketQnty)
      + (accessoriesData.Tagalong * tagalongQnty);
  const sumOfAll = sumOfAllBikes + sumOfAllAccessories;

  const result = (bikeData === 0) ? bikeData : sumOfAll;
  return parseFloat(result).toFixed(2);
};

export const computeTax = subTotal => parseFloat(subTotal / 8.875).toFixed(2);

export const computeTotal = (subTotal, tax) => parseFloat(subTotal) + parseFloat(tax);

export const getCreditCardType = (creditCardNumber) => {
  // visa
  let re = new RegExp('^4');
  if (creditCardNumber.match(re) != null) return 'visa';

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(creditCardNumber)) return 'mastercard';

  // AMEX
  re = new RegExp('^3[47]');
  if (creditCardNumber.match(re) != null) return 'amex';

  // Discover
  re = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
  if (creditCardNumber.match(re) != null) return 'discover';

  // Diners
  re = new RegExp('^36');
  if (creditCardNumber.match(re) != null) return 'diners';

  // Diners - Carte Blanche
  re = new RegExp('^30[0-5]');
  if (creditCardNumber.match(re) != null) return 'diners';

  // JCB
  re = new RegExp('^35(2[89]|[3-8][0-9])');
  if (creditCardNumber.match(re) != null) return 'jcb';

  // Visa Electron
  re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
  if (creditCardNumber.match(re) != null) return 'visa';

  return null;
};

export const getExpirationMonth = creditCardExpDate => creditCardExpDate.split('').splice(0, 2).join('');

export const getExpirationYear = (creditCardExpDate) => {
  const creditCardArr = creditCardExpDate.split('');
  const generation = '20';

  if (creditCardArr.length === 4) {
    const lastDigitsYear = creditCardArr[2] + creditCardArr[3];
    return generation + lastDigitsYear;
  }
  if (creditCardArr.length === 5) {
    const lastDigitsYear = creditCardArr[3] + creditCardArr[4];
    return generation + lastDigitsYear;
  }
  if (creditCardArr.length === 6) {
    return creditCardArr.splice(2, 4).join('');
  }
  if (creditCardArr.length === 7) {
    return creditCardArr.splice(3, 4).join('');
  }
  return null;
};
