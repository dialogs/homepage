import React from 'react';
import { styled } from 'astroturf';
import { Text } from '../Text/Text';

const ListElement = styled.ul`
  margin: 0;
  padding: 40px 0;

  &.noPadding {
    padding: 0;
  }
`;

const ListItemElement = styled.li`
  @import '../../styles/variables.css';

  list-style: none;
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 1px;
    width: 20px;
    height: 20px;
    background-color: var(--color-secondary);
  }

  @media (--laptop-viewport) {
    padding-left: 60px;
  }
`;

export function List({ style, children }) {
  return <ListElement style={style}>{children}</ListElement>;
}

export function ListItem({ children }) {
  return (
    <ListItemElement>
      <Text inline>{children}</Text>
    </ListItemElement>
  );
}
