import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import variables from '../../../theme/variables';

toast.configure({
  autoClose: 5000,
});

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
`;
const Label = styled.div`
  font-size: ${variables.typo.sm};
  text-transform: uppercase;
`;

// AUTHORS NOTES:
// EXPLAINATION: USECONTEXT HOOK is not good with rapid request
// I am trying to only request it if successful or not
// PLEASE CHANGE THE LOGIC IF YOU FIND A BETTER SOLUTION
const validate = (value, type, setErrorState, state) => {
  if (!value.length) return;

  if (type === 'name') {
    if (value.length < 2) {
      state('');
      return setErrorState(true);
    }
    if (!(/^[a-z ,.'-]+$/i.test(value))) {
      state('');
      return setErrorState(true);
    }

    state(value);
    return setErrorState(false);
  }
  if (type === 'email') {
    if (value.length < 3) {
      state('');
      return setErrorState(true);
    }
    if (!(/.+@.+\.[A-Za-z]+$/.test(value))) {
      state('');
      return setErrorState(true);
    }

    state(value);
    return setErrorState(false);
  }
  if (type === 'phone') {
    if (value.length < 3) {
      state('');
      return setErrorState(true);
    }
    if (!(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value))) {
      state('');
      return setErrorState(true);
    }

    state(value);
    return setErrorState(false);
  }
  if (type === 'credit-card-number') {
    if (value.length < 3) {
      state('');
      return setErrorState(true);
    }
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      .test(value))
    ) {
      state('');
      return setErrorState(true);
    }

    state(value);
    return setErrorState(false);
  }
  if (type === 'credit-card-exp-date') {
    if (!(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(value))) {
      state('');
      return setErrorState(true);
    }

    state(value);
    return setErrorState(false);
  }
  if (type === 'credit-card-cvc') {
    if (!(/^[0-9]{3,4}$/.test(value))) {
      state('');
      return setErrorState(true);
    }

    state(value);
    return setErrorState(false);
  }

  state(value);
  return setErrorState(false);
};

const InputFormCheckout = ({
  type,
  state,
  label,
  placeholder,
  existingData,
}) => {
  const [value, setValue] = useState('');
  const [isError, setErrorState] = useState(false);

  const changeValue = e => setValue(e.target.value);

  useEffect(() => {
    if (existingData.length) {
      setValue(existingData);
    }
  }, []);

  // VALIDATION TRIGGER
  useEffect(() => {
    validate(value, type, setErrorState, state);
  }, [value]);

  return (
    <Wrapper className="cell grid-x">
      <Label className="cell medium-4 small-12">
        { label }
      </Label>
      <TextField
        error={isError}
        value={value}
        onChange={changeValue}
        placeholder={placeholder}
        className="cell medium-7 small-12"
      />
    </Wrapper>
  );
};

InputFormCheckout.propTypes = {
  type: PropTypes.string,
  state: PropTypes.func,
  existingData: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
InputFormCheckout.defaultProps = {
  type: null,
  state: null,
  existingData: null,
};

export default InputFormCheckout;
