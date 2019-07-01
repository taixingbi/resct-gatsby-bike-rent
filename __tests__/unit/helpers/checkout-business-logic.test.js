import {
  flattenBikesData,
  transformHoursStringToNumber,
  accessoriesQntyAvailability,
  getPriceOfBikesBySelectedHour,
  getPriceOfAccessoriesBySelectedHour,
  computeSubtotal,
  computeTax,
  computeTotal,
  getCreditCardType,
  getExpirationMonth,
  getExpirationYear,
} from '../../../src/helpers/checkout-business-logic';
import {
  bikeMockData,
  hoursMockData,
} from '../../../__mocks__/bike-data';
import accessoriesMockData from '../../../__mocks__/accessories-data';

describe('Checkout Business Logic', () => {
  it('should transform the bikes object to a flat array', () => {
    expect(flattenBikesData(bikeMockData).length).toBe(11);
  });

  it('should only get the price that is equivalent to the selected hour', () => {
    expect(transformHoursStringToNumber(hoursMockData, 2)).toBe(20);
  });

  it('should be transform into a range array value from 1 to max', () => {
    expect(accessoriesQntyAvailability(
      1, 2, 3,
      1, 0, 0,
      0, 0, 0,
      0, 0,
    )).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });

  it('should only get the prices from the hours that was selected', () => {
    const adultPrice = getPriceOfBikesBySelectedHour(2, bikeMockData).Adult;
    expect(adultPrice).toBe(20);
  });

  it('should compute for the subtotal', () => {
    const subtotal = computeSubtotal(
      getPriceOfBikesBySelectedHour(2, bikeMockData),
      getPriceOfAccessoriesBySelectedHour(2, accessoriesMockData),
      0, 1, 2, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0,
    );
    expect(subtotal).toBe(parseFloat(97).toFixed(2));
  });

  it('should compute for taxes from the subtotal', () => {
    const subtotal = computeSubtotal(
      getPriceOfBikesBySelectedHour(2, bikeMockData),
      getPriceOfAccessoriesBySelectedHour(2, accessoriesMockData),
      0, 1, 2, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0,
    );
    expect(computeTax(subtotal)).toBe(parseFloat('10.93').toFixed(2));
  });

  it('should compute for the total amount', () => {
    const subtotal = computeSubtotal(
      getPriceOfBikesBySelectedHour(2, bikeMockData),
      getPriceOfAccessoriesBySelectedHour(2, accessoriesMockData),
      0, 1, 2, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 1, 0,
    );
    const tax = computeTax(subtotal);
    expect(computeTotal(subtotal, tax)).toBe(130.18);
  });

  it('should get only the price for that hour on the accessories data', () => {
    const accessoriesData = getPriceOfAccessoriesBySelectedHour(2, accessoriesMockData);
    expect(accessoriesData.Seat).toBe(10);
  });

  it('should get the credit card type', () => {
    const visaCardNum = getCreditCardType('4417119669820331');
    const masterCardNum = getCreditCardType('5255398982274879');
    const discoverCardNum = getCreditCardType('6011140704582566');

    expect(visaCardNum).toBe('visa');
    expect(masterCardNum).toBe('mastercard');
    expect(discoverCardNum).toBe('discover');
  });

  it('should get the credit card expiration month only', () => {
    expect(getExpirationMonth('1232')).toBe('12');
  });

  it('should get the credit card expiration year only', () => {
    expect(getExpirationYear('1232')).toBe('2032');
    expect(getExpirationYear('12/32')).toBe('2032');
    expect(getExpirationYear('122032')).toBe('2032');
    expect(getExpirationYear('12/2032')).toBe('2032');
  });
});
