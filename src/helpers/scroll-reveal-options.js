
export const goRight = {
  viewFactor: 0.5,
  mobile: false,
  // reset: true,
  distance: '1000px',
  origin: 'left',
  easing: 'ease-in',
  duration: 1000,
};

export const goLeft = {
  viewFactor: 0.5,
  mobile: false,
  // reset: true,
  distance: '1000px',
  origin: 'right',
  easing: 'ease-in',
  duration: 1000,
};

export const goTop = {
  viewFactor: 0.6,
  mobile: false,
  // reset: true,
  distance: '1000px',
  origin: 'top',
  easing: 'ease-in',
  duration: 1000,
};

export const goBottom = {
  viewFactor: 0.6,
  mobile: false,
  // reset: true,
  distance: '1000px',
  origin: 'bottom',
  easing: 'ease-in',
  duration: 1000,
};

export const goLeftDelay = duration => ({
  viewFactor: 0.5,
  mobile: false,
  // reset: true,
  distance: '1000px',
  origin: 'right',
  easing: 'ease-in',
  duration: 1000 + duration,
});
