import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 3rem;
    margin-top: 1rem;
    //text-transform: uppercase;
  }
`;

export default function SectionTitle({
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle >
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}