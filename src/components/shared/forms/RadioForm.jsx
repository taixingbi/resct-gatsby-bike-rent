import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import variables from '../../../theme/variables';

const Wrapper = styled(RadioGroup)`
  height: 100%;
`;
const RadioItem = styled(FormControlLabel)`
  span {
    font-size: ${variables.typo.sm};
    font-weight: bold;
    ${props => (props['selected-color'] === 'true' ? css`color: ${variables.color.green}` : css`color: ${variables.color.darkGray}`)}
  }
`;

const RadioForm = ({ state, setState, values }) => (
  <Wrapper
    aria-label="gender"
    name="gender2"
    value={state}
    onChange={e => setState(e.target.value)}
  >
    {
      _.map(values, val => (
        <RadioItem
          selected-color={(val === state).toString()}
          className="cell auto"
          value={val}
          control={<Radio />}
          label={val}
          key={val}
        />
      ))
    }
  </Wrapper>
);

RadioForm.propTypes = {
  state: PropTypes.string,
  setState: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};
RadioForm.defaultProps = {
  state: null,
};

export default RadioForm;
