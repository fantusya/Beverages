import styled from 'styled-components';
// import { device } from 'constants/breakpoints';

export const FilterTitle = styled.span`
  font-family: 'Quicksand', sans-serif;
  margin-bottom: ${p => p.theme.space[3]}px;
  display: block;

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FilterInput = styled.input`
  max-width: 220px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes[3]};

  background: ${p => p.theme.colors.filterBg};
  border-radius: ${p => p.theme.radii.rounded};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.7px);
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.filterBg};
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  padding: ${p => p.theme.space[3]}px;
`;
