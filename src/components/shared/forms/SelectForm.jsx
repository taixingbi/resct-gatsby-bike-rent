import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FormControl,
  Select,
  MenuItem,
  InputBase,
} from '@material-ui/core';
import variables from '../../../theme/variables';

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
const SelectFormSelectInput = styled(Select)`
  height: 100%;
  background-color: ${props => props['select-bg-color']} !important;
  color: white !important;
  font-size: 1.2rem !important;
  padding-left: 0.5rem;
  svg {
    color: white !important;
  }
`;

const SelectForm = ({
  label, selectItems, itemState, setItemState,
}) => {
  const handleChange = e => setItemState(e.target.value);
  const selectBgColor = (itemState <= 0) ? variables.color.darkGray : variables.color.green;

  return (
    <Wrapper className="grid-x">
      <Label className="cell medium-5 small-6">
        { label }
      </Label>
      <SelectFormWrapper className="cell medium-7 small-6">
        <SelectFormControl>
          <SelectFormSelectInput
            select-bg-color={selectBgColor}
            value={itemState}
            onChange={handleChange}
            input={<InputBase name={label} />}
          >
            { selectItems.map(item => (
              <MenuItem
                key={item}
                value={item}
              >
                {item.toString()}
              </MenuItem>
            ))}
          </SelectFormSelectInput>
        </SelectFormControl>
      </SelectFormWrapper>
    </Wrapper>
  );
};

SelectForm.propTypes = {
  label: PropTypes.string.isRequired,
  selectItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  itemState: PropTypes.any.isRequired,
  setItemState: PropTypes.func.isRequired,
};

export default SelectForm;
