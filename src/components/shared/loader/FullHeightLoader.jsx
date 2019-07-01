import React from 'react';
import MDSpinner from 'react-md-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullHeightLoader = () => (
  <Wrapper>
    <MDSpinner
      size={100}
      color1="#598527"
      color2="#3f3f3f"
    />
  </Wrapper>
);

export default FullHeightLoader;
