import React from 'react';
import { styled } from 'astroturf';
import { Text } from '../Text/Text';

const ListElement = styled.ul`
  @import '../../styles/variables.css';

  margin: 0;
  padding: 40px 0;

  &.noPadding {
    padding: 0;
  }

  &.intent-primary {
    & li:before {
      background-color: var(--color-primary);
    }
  }

  &.intent-secondary {
    & li:before {
      background-color: var(--color-secondary);
    }
  }
`;

const ListItemElement = styled.li`
  @import '../../styles/variables.css';

  list-style: none;
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;
  line-height: 0px;

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
  }

  @media (--laptop-viewport) {
    padding-left: 60px;
  }
`;

export function List({ intent, style, children }) {
  return (
    <ListElement intent={intent} style={style}>
      {children}
    </ListElement>
  );
}

List.defaultProps = {
  intent: 'secondary',
};

export function ListItem({ children }) {
  return (
    <ListItemElement>
      <Text inline>{children}</Text>
    </ListItemElement>
  );
}
