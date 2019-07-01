import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';
import DayPickerInput from 'react-datepicker';
import variables from '../../../theme/variables';

import 'react-datepicker/dist/react-datepicker.css';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Label = styled.h4`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${variables.typo.md};
  color: ${variables.color.green};
`;
const SelectFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectFormControl = styled(FormControl)`
  height: 4rem;
  
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const DayPickerWrapper = styled(DayPickerInput)`
  min-height: 4rem;
  font-size: 1.2rem;
  text-align: center;
  background-color: ${variables.color.green};
  color: white;
  border: none;
`;

const SelectForm = ({
  label, setItemState, itemSelected,
}) => {
  const handleChange = day => setItemState(day);

  return (
    <Wrapper className="grid-x">
      <Label className="cell medium-5 small-6">
        { label }
      </Label>
      <SelectFormWrapper className="cell medium-7 small-6">
        <SelectFormControl>
          <DayPickerWrapper
            selected={itemSelected}
            onChange={handleChange}
          />
        </SelectFormControl>
      </SelectFormWrapper>
    </Wrapper>
  );
};

SelectForm.propTypes = {
  label: PropTypes.string.isRequired,
  setItemState: PropTypes.func.isRequired,
  itemSelected: PropTypes.any.isRequired,
};

export default SelectForm;
