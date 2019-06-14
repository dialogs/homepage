import React from 'react';
import { Link } from 'gatsby';
import styled from 'astroturf';

const HeaderLogoLink = styled(Link)`
  line-height: 0;
  display: inline-block;
`;

const HeaderLogoImage = styled.img`
  height: 32px;
`;

export function HeaderLogo({ ...props }) {
  return (
    <HeaderLogoLink {...props}>
      <HeaderLogoImage src="/images/logo.svg" alt="dialog" />
    </HeaderLogoLink>
  );
}
