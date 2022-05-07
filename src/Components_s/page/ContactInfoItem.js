import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 0.5rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 3px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}