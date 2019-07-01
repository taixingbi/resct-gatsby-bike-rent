import {
  getAllSelectedBikesOnly,
  transformKeysFromSelectedBikes,
  getAllSelectedAccessoriesOnly,
  transformKeysFromSelectedAccessories,
} from '../../../src/helpers/transformative-functions';
import globalStateMock from '../../../__mocks__/global-state-data';

describe('Transformative function helpers', () => {
  it('should transform global state keys to a human readable key', () => {
    expect(transformKeysFromSelectedBikes('adultQnty')).toBe('Adult Bike');
    expect(transformKeysFromSelectedAccessories('childSeatQnty')).toBe('Child Seat');
  });

  it('should get all the selected bikes only from the state', () => {
    expect(getAllSelectedBikesOnly(globalStateMock)).toEqual({
      'Child Bike': 2,
      'Road Bike': 1,
    });
  });

  it('should get all the selected accesories from the state', () => {
    expect(getAllSelectedAccessoriesOnly(globalStateMock)).toEqual({
      'Child Seat': 2,
    });
  });
});
