import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;  
  font-size: 1.6rem;
  line-height: 0rem;  
`;

export default function PText({ children }) {
  return (
    <PStyle >
      <p>{children}</p>
    </PStyle>
  );
}