import React from 'react';
import { styled } from 'astroturf';

const PageContainer = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
`;

export function Page({ children, ...props }) {
  return <PageContainer {...props}>{children}</PageContainer>;
}
