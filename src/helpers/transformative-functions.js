import _ from 'lodash';

export const transformKeysFromSelectedBikes = (key) => {
  if (key === 'adultQnty') return 'Adult Bike';
  if (key === 'childQnty') return 'Child Bike';
  if (key === 'tandemQnty') return 'Tandem Bike';
  if (key === 'ebikeQnty') return 'Electric Bike';
  if (key === 'roadQnty') return 'Road Bike';
  if (key === 'mountainQnty') return 'Mountain Bike';
  if (key === 'elliptigoQnty') return 'Elliptigo Bike';
  if (key === 'tricycleQnty') return 'Tricycle Bike';
  if (key === 'snowQnty') return 'Snow Bike';
  if (key === 'eHandQnty') return 'Electric Hand Bike';
  if (key === 'handQnty') return 'Hand Bike';
  return 'Unknown Bike';
};

export const transformKeysFromSelectedAccessories = (key) => {
  if (key === 'childSeatQnty') return 'Child Seat';
  if (key === 'childTrailerQnty') return 'Child Trailer';
  if (key === 'tagalongQnty') return 'Tagalong';
  if (key === 'basketQnty') return 'Basket';
  return 'Unknown Accessory';
};

export const getAllSelectedBikesOnly = state => _.reduce(state, (result, value, key) => {
  if (key === 'adultQnty'
      || key === 'childQnty'
      || key === 'tandemQnty'
      || key === 'ebikeQnty'
      || key === 'roadQnty'
      || key === 'mountainQnty'
      || key === 'elliptigoQnty'
      || key === 'tricycleQnty'
      || key === 'snowQnty'
      || key === 'eHandQnty'
      || key === 'handQnty') {
    if (value > 0) {
      // eslint-disable-next-line no-param-reassign
      result[transformKeysFromSelectedBikes(key)] = value;
    }
  }
  return result;
}, {});

export const getAllSelectedAccessoriesOnly = state => _.reduce(state, (result, value, key) => {
  if (key === 'childSeatQnty'
      || key === 'childTrailerQnty'
      || key === 'tagalongQnty'
      || key === 'basketQnty') {
    if (value > 0) {
      // eslint-disable-next-line no-param-reassign
      result[transformKeysFromSelectedAccessories(key)] = value;
    }
  }
  return result;
}, {});
