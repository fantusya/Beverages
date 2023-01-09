import styled from 'styled-components';

export const HomeLink = styled.a`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.logo};

  font-size: ${p => p.theme.fontSizes[6]};

  color: inherit;

  text-decoration: none;
`;

export const MenuButton = styled.button`
  padding: ${p => p.theme.space[0]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};
  /* transform: scaleX(-1); */
`;
