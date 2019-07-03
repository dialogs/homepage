import React from 'react';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { Text } from '../Text/Text';

const PossibilityCardContainer = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (--mobile-viewport) {
    width: 100%;
    margin-bottom: 40px;
  }

  @media (--tablet-viewport) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const PossibilityCardImage = styled.img`
  height: 60px;
`;

const PossibilityCardTitle = withProps({ size: 'large', bold: true })(styled(
  Text,
)`
  @import '../../styles/variables.css';

  display: none;

  @media (--mobile-viewport) {
    display: block;
    margin-bottom: 30px;
  }
`);

export function PossibilityCard({ image, title, description }) {
  return (
    <PossibilityCardContainer className="possibility__card">
      <PossibilityCardTitle>{title}</PossibilityCardTitle>
      <PossibilityCardImage src={image} alt="" />
      <Text size="large">{description}</Text>
    </PossibilityCardContainer>
  );
}
